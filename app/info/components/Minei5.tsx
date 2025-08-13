'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/supporter-section.css';

const Minnei5 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="minnei5-main" className="minnei5-bg relative">
      <div className="section-container">
        <div ref={contentRef} className="left-column">
          <div className="content-area">
            <div className="section-category">supporters</div>
            <div className="section-title">みん営フレンズのみなさま</div>
          </div>
        </div>

        <div className="right-column">
          <div className="supporters-container">
            <div className="supporters-text">
              AAkiHaruHima / ayato / madoka / Masanori Mizuochi / Ｎ.brothers / sak / SUN / USAGI / Yoshi / あべなるみ / いきいき職人　田中信 / いわしくらぶ / ウィルソン麻菜 / おさる / オレンジ / かんばやしちえこ / ささきゆか / しんどうひとみ / とやま子どもの権利条約ネット 小神 / どろんこ農園 / なつみっくす / ファームサイド 佐川友彦 / ふじた　いく / マイルドスポーツ / マッチ / まるやま　ちさと / みやもと あかり / やまくぼ / ゆうすい保育園　枝元 / りお♡なお / リバ邸　かたくられん　岡山さんlove / 阿部光平（IN&OUT -ハコダテとヒト-） / 安井ちあき / 伊藤昌徳 / 園原麻友実 / 横尾 涼 / 岡山　桜緒 / 加藤郁生 / 花水木BASE（AI母心） / 皆川浩一 / 寒竹泉美 / 丸山 彬 / 鬼谷成美 / 亀山真之 / 吉森真人(滑川市) / 吉川夕佳 / 久保田竜 / 橋本慧子 / 平岡麻子 / 古川　公成 / 広瀬　拓哉 / 高橋朗 / 高野夏那汰 / 坂東法子 / 小松雅人 / 小川翔大 / 神代ちひろ / 杉野健二 / 清水由希 / 西野知佳 / 石黒綾佳 / 早川恭平 / 早川誠一 / 草野優介 / 増子愛 / 大森愛 / 中谷幸葉 / 長崎ホープツーリズム  / 鳥巣智行 / 藤井宏一郎 / 藤井大輔 / 藤本恵理子 / 富山オタクことちゃん / 楓大海 / 福原 / 米山　ちひろ / 北川由依 / 柳まり子 / 和久井香菜子 / なんちー / aki / Akio Wada / Aradono Mika / B.S.W.works1957 / CHINUSHI KATSUKI / daisuke_kuroda / Daitetsu  Imaizumi / issei / Jun Hatakeyama / kajinumatsubasaKen Osaki / Kenta Tsukamoto / Mak Sashida / Masayuki Okita / Miyu / Moeka Kameyama  / na / negi_rakuda / Noriaki Imai / rayco / ryosuke.hara / Saki Matsuda / Satoko UJIHASHI / Satoshi Tatemichi / sb2kooo / Shibakusa Tomomi / Shin-ichiro Hayashida / shinya / shyoshi / yamada tomoko / yh / Yoshimitsu Fujimura / YURI Yamashita / Yurie Muraoka / あお / あくつさとし / おりはしゆみこ / かすみ / かなやん / カモシカnet 三太 / キルタ / けーやま / ケンザサン / さおこ / さとうたま / じく / じゅんりん / たき / たなか / なかにし / なるみ / にじくま / にょろた / ネコなし / はしもとかず / はっぴーママ富山版 / ハッピー太郎 / ハナウタカジツ / ぱや / はるぴー / ふるかわけいこ / ますだ / まゆぼう / まり / みさわ / めぐつなジャーニー / やま / ゆいちひろ / ゆうだい / ゆりえ / 安江 淨 / 伊藤大志 / 伊藤拓也 / 井手 拓也 / 井上 香奈 / 宇留野 晴香 / 益田部翔 / 園部 優樹 / 奥田 祐樹 / 貝津 美里 / 梶(川瀬) 汐里 / 管野昌子 / 丸山 修平 / 古賀詠風 / 荒木 貴大 / 黒川 花子 / 三浦 宗一郎 / 山崎　一成 / 篠原　笑子 / 柴木 知次 / 勝山恵一 / 小谷 草志 / 小林　佑衣 / 小林祐太 / 上澤 聖子 / 杉本 いづみ / 清水 たつや / 西尾 拓哉 / 西野 聡 / 赤嶺 健 / 川嶋 直人 / 浅野 哲平 / 大江 結花 / 大村おおむら / 竹下知宏 / 中崎史菜 / 中西 拓郎 / 中野 彰太 / 鶴見 真子 / 庭文庫　百瀬雄太・実希 / 田中 翼 / 島崎 寛和 / 東郷 りん / 内山 真理子 / 尾上 那奈 / 芳賀 あゆみ / 豊嶋 想也 / 柳下 柚子  / 林田 光弘 / 鈴木 賀子 / 鈴木 晴子  / 枡田 恭子 / 澤永 遼 / Eiji Harada / フジサワカズノリ@URAKATA / okayama / 宮田 浩和 / 大野 幸子 / 藤本 あゆみ / 柴田 史郎 / TABI TABI / 富山の海賊 / t.inoue@mikke.co.jp / moriai / 貝津 美里 / 枡田 恭子 / 平島健一 / ちよこ / 森本瑛 / 96.eri.kca / やまもと / sb2kooo / KAAKA / 芳崎　誉 / 岩本 / ゆゆ / あこ / たかき / もと / Seiya Kawai / 堀 卓 / 森　慶子 / さいとう なな / さな / すぎまる / ちぃーづ / あらやたかし☆ / けけ / りえこ / いまこ / サカナ / 38 / しき / のん / 米山愛 / brownsugar / あおあくあ / yu_pf / Kawakami Yuki / Tatuya  Itatani / harvestおじさん / ｈｉｒｏｍｉ / RM / クエ / りえ / ミタニ / ayumi / ms / みゆ / まー / Junko / シオハラ / ヒナ / YU / すみっこ / ひろきい
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minnei5;