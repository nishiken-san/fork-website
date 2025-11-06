// app/api/supporters/public/route.ts
import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export const dynamic = 'force-dynamic';
export const revalidate = 300;

async function getGoogleSheetsData() {
  const debugInfo: any = {
    step: '',
    hasKey: false,
    hasSheetId: false,
    keyLength: 0,
    error: null,
    cellA2: ''
  };

  try {
    debugInfo.step = '1. 環境変数の確認';
    
    const keyValue = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    
    debugInfo.hasKey = !!keyValue;
    debugInfo.keyLength = keyValue?.length || 0;
    debugInfo.hasSheetId = !!sheetId;
    debugInfo.sheetId = sheetId;
    
    console.log('=== Debug Step 1: Environment Variables ===');
    console.log('Has key:', debugInfo.hasKey);
    console.log('Key length:', debugInfo.keyLength);
    console.log('Has sheet ID:', debugInfo.hasSheetId);
    console.log('Sheet ID:', sheetId);
    
    if (!keyValue) {
      debugInfo.error = 'GOOGLE_SERVICE_ACCOUNT_KEY が設定されていません';
      return debugInfo;
    }
    
    if (!sheetId) {
      debugInfo.error = 'GOOGLE_SHEET_ID が設定されていません';
      return debugInfo;
    }
    
    // JSONパース
    debugInfo.step = '2. JSONパース';
    let credentials;
    
    try {
      credentials = JSON.parse(keyValue);
      debugInfo.jsonParsed = true;
      debugInfo.serviceAccountEmail = credentials.client_email;
      console.log('=== Debug Step 2: JSON Parsed ===');
      console.log('Service account email:', credentials.client_email);
    } catch (parseError: any) {
      debugInfo.error = `JSONパースエラー: ${parseError.message}`;
      debugInfo.jsonParsed = false;
      debugInfo.firstChars = keyValue.substring(0, 100);
      console.error('JSON parse error:', parseError.message);
      console.error('First 100 chars:', keyValue.substring(0, 100));
      return debugInfo;
    }
    
    // Google認証
    debugInfo.step = '3. Google認証';
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
    
    debugInfo.authCreated = true;
    console.log('=== Debug Step 3: Auth Created ===');
    
    // Sheets API
    debugInfo.step = '4. Sheets API呼び出し';
    const sheets = google.sheets({ version: 'v4', auth });
    
    console.log('=== Debug Step 4: Fetching from Sheet ===');
    console.log('Sheet ID:', sheetId);
    console.log('Range: サポーター!A2');
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'サポーター!A2',
    });
    
    const value = response.data.values?.[0]?.[0] || '';
    
    debugInfo.step = '5. 完了';
    debugInfo.cellA2 = value;
    debugInfo.success = true;
    
    console.log('=== Debug Step 5: Success ===');
    console.log('A2セルの値:', value);
    
    return debugInfo;
    
  } catch (error: any) {
    console.error('=== Error at step:', debugInfo.step, '===');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    debugInfo.error = error.message;
    debugInfo.errorDetails = {
      name: error.name,
      message: error.message,
      code: error.code
    };
    
    return debugInfo;
  }
}

export async function GET() {
  try {
    const data = await getGoogleSheetsData();
    
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (error: any) {
    console.error('Outer error:', error);
    return NextResponse.json(
      { 
        error: error.message,
        details: 'Check server logs for more information'
      },
      { status: 500 }
    );
  }
}