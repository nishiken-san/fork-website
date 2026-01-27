// app/components/HeaderWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import HeaderTop from './HeaderTop';
import Header from './Header';

const HeaderWrapper = () => {
  const pathname = usePathname();
  
  // トップページ（/）の場合はHeaderTop、それ以外はHeader
  if (pathname === '/') {
    return <HeaderTop />;
  }
  
  return <Header />;
};

export default HeaderWrapper;