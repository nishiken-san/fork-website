// constants/images.ts
// 画像パスを一元管理するためのファイル

export const IMAGES = {
  // ロゴ関連
  logo: {
    main: '/images/logo/logo.png',
    white: '/images/logo/fork-logo-white.png',
    dark: '/images/logo/fork-logo-dark.png',
    favicon: '/images/logo/favicon.ico',
  },

  // ヒーローセクション
  hero: {
    background: '/images/hero/hero-bg.jpg', // メイン背景画像（パララックス用）
    overlay: '/images/hero/hero-overlay.jpg',
    fallback: '/images/hero/hero-fallback.jpg', // フォールバック画像
    forkTitle: '/images/hero/fork-title.png', // fork文字画像
    forkIllustrationPC: '/images/hero/fork-illustration-pc.png', // PC版5本線フォーク画像
    forkIllustrationMobile: '/images/hero/fork-illustration-mobile.png', // モバイル版5本線フォーク画像
  },

  // パララックス画像
  parallax: {
    home1: '/images/parallax/home-parallax-1.jpg', // ホームページ1枚目
    about1: '/images/parallax/parallax-bg-4.png', // Aboutページ1枚目（parallaxフォルダ内）
    about2: '/images/parallax/about-parallax-2.jpg', // Aboutページ2枚目
    section1: '/images/parallax/section-parallax-1.jpg', // セクション用1
    section2: '/images/parallax/section-parallax-2.jpg', // セクション用2
    section3: '/images/parallax/section-parallax-3.jpg', // セクション用3
  },

  // About セクション
  about: {
    teamPhoto: '/images/about/team-photo.png',
    officeInterior: '/images/about/office-interior.jpg',
    workingSpace: '/images/about/working-space.jpg',
    peopleSilhouette: '/images/about/people-silhouette.png', // 人物シルエット画像
    childcarePeople: '/images/about/people.png', // 子育て支援の人々
  },

  // Team セクション
  team: {
    member1: '/images/team/member-01.jpg',
    member2: '/images/team/member-02.jpg',
    member3: '/images/team/member-03.jpg',
    member4: '/images/team/member-04.jpg',
    teamGroup: '/images/team/team-group.jpg',
  },

  // Members セクション（Aboutページ用）
  members: {
    leader: '/images/members/岡山史興（おかぴー).png', // 代表者
    member1: '/images/members/大橋えつこ（ジーン）.png',
    member2: '/images/members/板谷あつこ（ダコダ）.png',
    member3: '/images/members/滝澤茜（たっきー）.png',
    member4: '/images/members/戸谷朱李（あかどん）.png',
    member5: '/images/members/山口未来子（みっこ）.png',
    member6: '/images/members/吉田ゆかり（よっしー）.png',
    member7: '/images/members/大庭日菜（にわにわ）.png',
    member8: '/images/members/松野志保（おまつ）.png',
    member9: '/images/members/大石和（やまぴー）.png',
    member10: '/images/members/えみこむ.png',
  },

  // Services セクション
  services: {
    consulting: '/images/services/consulting.jpg',
    development: '/images/services/development.jpg',
    design: '/images/services/design.jpg',
    support: '/images/services/support.jpg',
  },

  // プロジェクト・ポートフォリオ
  projects: {
    project1: '/images/projects/project-01.jpg',
    project2: '/images/projects/project-02.jpg',
    project3: '/images/projects/project-03.jpg',
    project4: '/images/projects/project-04.jpg',
  },

  // ブログ・ニュース
  blog: {
    article1: '/images/blog/article-01.jpg',
    article2: '/images/blog/article-02.jpg',
    article3: '/images/blog/article-03.jpg',
  },

  // アイコン
  icons: {
    consulting: '/images/icons/consulting-icon.svg',
    development: '/images/icons/development-icon.svg',
    design: '/images/icons/design-icon.svg',
    support: '/images/icons/support-icon.svg',
    arrow: '/images/icons/arrow.svg',
    close: '/images/icons/close.svg',
    menu: '/images/icons/menu.svg',
  },

  // 背景画像
  backgrounds: {
    pattern1: '/images/backgrounds/pattern-01.jpg',
    pattern2: '/images/backgrounds/pattern-02.jpg',
    texture: '/images/backgrounds/texture.jpg',
  },

  // プレースホルダー画像
  placeholders: {
    avatar: '/images/placeholders/avatar-placeholder.jpg',
    image: '/images/placeholders/image-placeholder.jpg',
    thumbnail: '/images/placeholders/thumbnail-placeholder.jpg',
  },
} as const;

// 画像の alt テキストも管理
export const IMAGE_ALT_TEXTS = {
  logo: {
    main: 'Fork Company Logo',
    white: 'Fork Company Logo (White)',
    dark: 'Fork Company Logo (Dark)',
  },

  hero: {
    background: 'Hero background image showing modern workspace',
    overlay: 'Creative workspace environment',
    forkTitle: 'Fork title image',
    forkIllustrationPC: 'Fork illustration for PC',
    forkIllustrationMobile: 'Fork illustration for mobile',
  },

  parallax: {
    home1: 'Home page parallax background',
    about1: 'About page parallax background 1',
    about2: 'About page parallax background 2',
    section1: 'Section parallax background 1',
    section2: 'Section parallax background 2',
    section3: 'Section parallax background 3',
  },

  about: {
    teamPhoto: 'Fork team members working together',
    officeInterior: 'Modern office interior design',
    workingSpace: 'Collaborative working space',
    peopleSilhouette: 'Diverse people silhouette illustration',
    childcarePeople: '子育て支援に関わる人々のイラスト',
  },

  team: {
    member1: 'Team member portrait',
    member2: 'Team member portrait',
    member3: 'Team member portrait',
    member4: 'Team member portrait',
    teamGroup: 'Group photo of Fork team',
  },

  members: {
    leader: '岡山史興 代表取締役のプロフィール写真',
    member1: '大橋えつこのプロフィール写真',
    member2: '畠中みつこのプロフィール写真',
    member3: '池澤澪のプロフィール写真',
    member4: '戸谷本孝のプロフィール写真',
    member5: '山口恵美子のプロフィール写真',
    member6: '吉野ゆかりのプロフィール写真',
    member7: '大越由香のプロフィール写真',
    member8: '松野心愛のプロフィール写真',
    member9: '大石裕のプロフィール写真',
    member10: 'えみこむのプロフィール写真',
  },

  services: {
    consulting: 'Business consulting service illustration',
    development: 'Software development service illustration',
    design: 'Design service illustration',
    support: 'Customer support service illustration',
  },

  projects: {
    project1: 'Featured project showcase',
    project2: 'Featured project showcase',
    project3: 'Featured project showcase',
    project4: 'Featured project showcase',
  },
} as const;