import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Murakawa Takuya",
  icon: "/icon.jpg",
  // TODO: bio追加
  catchphrase: "Fullstack Development × Computer Vision Research", // TODO: full stack developmentの中身をrotateしてもいいかも: https://reactbits.dev/text-animations/rotating-text
  strengths: ["キャッチアップ力", "好奇心", "挑戦心", "Grid力"],
  links: [
    // TODO: 数値系はcount upを使う: https://reactbits.dev/text-animations/count-up
    {
      url: "https://github.com/MurakawaTakuya",
      name: "GitHub",
      iconLink: "/link_icons/github.svg",
      width: 2,
      height: 2,
      iconBackgroundColor: "#181717",
    },
    {
      url: "https://x.com/MosiTaku",
      name: "X (Twitter)",
      iconLink: "/link_icons/x.svg",
      width: 2,
      height: 1,
      iconBackgroundColor: "#000000",
    },
    {
      url: "https://qiita.com/Murakawa_Takuya",
      name: "Qiita",
      iconLink: "/link_icons/qiita.png",
      iconBackgroundColor: "#55C500",
    },
    {
      url: "https://connpass.com/user/MurakawaTakuya/",
      name: "Connpass",
      iconLink: "/link_icons/connpass.png",
      iconBackgroundColor: "#ffffffff",
      backgroundColor: "#ca3e4737",
    },
    {
      url: "https://speakerdeck.com/murakawatakuya",
      name: "SpeakerDeck",
      iconLink: "https://speakerdeck.com/favicon.ico",
      iconBackgroundColor: "#ffffffff",
      backgroundColor: "#48b6ab3a",
    },
    {
      url: "https://atcoder.jp/users/RarabyBye",
      name: "AtCoder",
      iconLink: "/link_icons/atcoder.png",
      iconBackgroundColor: "#ffffffff",
    },
    {
      url: "https://lapras.com/person",
      name: "LAPRAS",
      iconLink: "/link_icons/lapras.png",
      iconBackgroundColor: "#56C1B6",
    },
    // {
    //   url: "#",
    //   name: "Note",
    //   iconLink: "https://assets.st-note.com/production/uploads/images/82958428/picture_pc_ccb0c7924771239535de98c92a95aa5c.png",
    // },
  ],
  skills: {
    frontend: ["Next.js", "React", "JavaScript", "TypeScript"],
    backend: ["Node.js", "PHP", "Laravel", "MySQL", "PostgreSQL"],
    infrastructure: [
      "GitHub Actions",
      "Vercel",
      "Supabase",
      "Firebase",
      "Google Cloud",
    ],
    other: ["Java", "C", "C++"],
  },
  timeline: {
    // TODO: 並び替えの比較用のdate型のデータを追加する
    career: [
      {
        date: "2022-04",
        title: "名古屋工業大学 入学",
      },
      {
        date: "2026-03",
        title: "名古屋工業大学 卒業予定",
      },
      {
        date: "2026-04",
        title: "名古屋工業大学大学院 入学予定",
      },
    ],
    internship: [
      {
        date: "2024/6 ~ 2024/7",
        title: "Qiita株式会社 / 株式会社エイチームホールディングス",
        description:
          "インターン: フロントエンド (React, TypeScript)・バックエンド (Ruby on Rails) ",
      },
      {
        date: "2024/9",
        title: "株式会社アイスタイル",
        description: "バックエンド(PHP, Java, SpringBoot)",
      },
      {
        date: "2024/7 ~ Present",
        title: "株式会社イノベーション",
        description: "フロントエンド(React)・バックエンド(PHP, Laravel)",
      },
    ],
    parttime: [
      {
        date: "2022/4 ~ 2024/3",
        title: "学習塾アルバイト",
      },
      {
        date: "2022/10 ~ 2023/2",
        title: "学習塾アルバイト",
      },
      {
        date: "2023/12 ~ 2025/7",
        title: "大学技術補佐員",
        description: "熱中症搬送者数予測サイトの開発",
      },
    ],
    activities: [
      // TODO: タイトルは所属・活動
      // link追加
      {
        date: "2022 ~ 2023(2024)",
        title: "工大祭実行委員会 所属",
        description: "広報局所属 Web開発担当",
      },
      // {
      //   date: "2022",
      //   title: "熱中症搬送者数予測サイト開発",
      //   description: "技術補佐員",
      // },
      {
        date: "2025/2 ~ 2025/3",
        title: "Efrei Paris フランス留学",
        description: "TBW",
      },
      {
        date: "2026 ~ Present",
        title: "名古屋CVPR・ML勉強会 運営",
        description: "TBW",
      },
    ],
  },
  qualifications: [
    {
      date: "2020-11",
      title: "実用英語技能検定 準一級",
    },
    {
      date: "2024-04",
      title: "応用情報技術者試験",
    },
    {
      date: "2025-05",
      title: "TOEIC 895点",
    },
  ],
  researchConferences: [
    // 出した論文名も書いて、ボタンクリックでpublicationsにスクロール
    // posterかoralかもわかるように
    {
      date: "2025/7",
      title: "国内学会: 画像の認識・理解シンポジウム MIRU 2025",
      description: "TBW",
    },
    {
      date: "2026/1",
      title:
        "国際学会: IWAIT 2026 (The International Workshop on Advanced Image Technology)",
      description: "TBW",
    },
  ],
  publications: {
    papers: [], // To be added later
    articles: [], // To be added later (e.g. from Qiita)
    developed: [], // GitHub repositories etc.
  },
};
