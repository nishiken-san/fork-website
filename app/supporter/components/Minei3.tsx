'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/supporter-sections.css';

interface VoiceItem {
  id: string;
  name: string;
  occupation: string;
  location: string;
  message: string;
}

const Minei3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  const voices: VoiceItem[] = [
    {
    id: '1',
    name: '百瀬実希・雄太',
    occupation: '庭文庫',
    location: '',
    message: '岡山さんはいつも誰かを助けている。それなのに、助けてもらってるのは僕のほうですよ、みたいな顔をしている。\n\n東京でのイベントのあと、3人で銭湯に行った帰りの夜道、のぼせて赤い顔をした岡山さんと目指しているのは世界平和なんですよって話したことを、ずっと覚えている。わたしの夢もそうだったから。\n\nその言葉は言葉で終わらずに、岡山さんは岡山さんの方法で、わたしたちはわたしたちの方法で、その夢へ向かっていることが心強かった。\n\nそんな岡山さんの人生をかけた大きな挑戦が、このfork toyama。大きな夢が、大きな夢のままに、ここが素敵な場所になりますように。'
  },
  {
    id: '2',
    name: '絹張 蝦夷丸',
    occupation: '（株）Earth Friends Camp 代表取締役',
    location: '北海道上川町',
    message: '岡山さんから新しい学童のお話を聞いたのは確か今年の1月頃だったと思う。\nありがたいことに、僕たちEFCが北海道上川町で運営しているPORTOという交流施設も参考にして、新しい形の学童を構想していると連絡をいただきました。\n\n岡山さんには上川町のイベントでもお世話になったり、残念ながら僕は行けなかったけど一緒に活動している協力隊が実際に舟橋村を訪れたりもして、地域の子育てについて参考にさせてもらってきました。\n\nそれぞれ離れた土地で暮らし、活動しているけれど、いつも僕たちの活動を気にかけてくれて、応援してくれる岡山さん。もちろん僕たちも岡山さんの挑戦を応援しないわけにはいかない。\n\n「みん営」は僕たちも今まさに目指している自治の形です。そういう意味では、舟橋村のみなさんの挑戦は、私たちの挑戦でもあると思っています。心から応援しています！頑張ってください！'
  },
  {
    id: '3',
    name: '林田光弘',
    occupation: '長崎大学RECNA特任研究員',
    location: '',
    message: '大学や社会人生活を通じて「社会って思ってたより自由だ」「生き方は自分決めて良いんだ」と、これまで背負っていたものが軽くなったような感覚があります。\n\nだから我が子には、子どものころから色んな大人に囲まれて育ってほしい。\n\n学校や家庭では出会えない人たちがいて、あたらしい自分らしさを見つけられるようなサードプレイスを社会に増やしたいです。\n\nforkが多くの子どもたちのサードプレイスになりますように！'
  },
  {
    id: '4',
    name: '鳥巣智行',
    occupation: 'Better inc. 代表取締役',
    location: '',
    message: '私が故郷の長崎を離れ、東京などに暮らして感じたのは選択肢の多様さでした。\n\nいろんな生き方が受け入れられる。\n自分にあった学び方がみつかる。\n多様な働き方がゆるされる。\n好きな暮らし方を選択できる。\n\nそんないろんな選択肢は大都会でしか得られないものなのでしょうか？\n\nそうではないはず。\n\n地域に暮らす人たちが自分の得意分野を持ち寄って、お互いに学び合い、支え合い、育み合うことで、選択肢はゆたかになっていく。\n\nそんなforkのような場所が、私が住む長崎にも増えてほしいと思います。'
  },
  {
    id: '5',
    name: '山﨑 彰悟',
    occupation: '株式会社ヤマチク 専務取締役',
    location: '',
    message: '「子はいつでも地域の宝」\nでも岡山さんは、そんな耳触りのいい言葉で終わらせないんですよね。\n\n誰もが「宝」という割には、それを守る「仕組み」がない。\n「みん営化」は、そんな社会への「やさしい挑戦」なんだと思います。\n\n私も熊本の小さな町に住んでいるからこそ、この挑戦の凄さがわかる。\n決して他人事ではありません。\nこの挑戦は、舟橋村の皆さんだけのものじゃない。\n「fork toyama」、応援せずにはいられんでしょう。'
  }
  ];

  return (
    <section ref={sectionRef} id="minei3" className="minei3-section relative">
      <div className="minei3-container">
        {/* 左側: 固定ヘッダー */}
        <div className="minei3-left">
          <div className="minei3-sticky">
            <div className="minei3-subtitle">supporter voice</div>
            <h2 className="minei3-title">サポーターの声</h2>
          </div>
        </div>

        {/* 右側: スクロールコンテンツ */}
        <div ref={contentRef} className="minei3-right">
          <div className="minei3-content">
            <div className="minei3-voices-list">
              {voices.map((voice) => (
                <div key={voice.id} className="minei3-voice-card">
                  <div className="minei3-voice-header">
                    <div className="minei3-voice-name">{voice.name}</div>
                    <div className="minei3-voice-info">
                      {voice.occupation} [{voice.location}]
                    </div>
                  </div>
                  <div className="minei3-voice-divider"></div>
                  <p className="minei3-voice-text">{voice.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minei3;