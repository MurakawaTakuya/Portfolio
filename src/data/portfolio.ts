export const portfolioData = {
  name: "Murakawa Takuya",
  icon: "/icon.jpg",
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
    career: [
      {
        date: "2026-04",
        title: "名古屋工業大学大学院",
        description: "入学予定",
        type: "education",
      },
      {
        date: "2026-03",
        title: "名古屋工業大学",
        description: "卒業予定",
        type: "education",
      },
      {
        date: "2024-09",
        title: "株式会社アイスタイル",
        description: "インターン: バックエンド (Java, Spring Boot)",
        type: "internship",
      },
      {
        date: "2024-07",
        title: "株式会社イノベーション",
        description: "インターン (2024/7 ~ now)",
        type: "internship",
      },
      {
        date: "2024-06",
        title: "Qiita株式会社 / 株式会社エイチームホールディングス",
        description:
          "インターン: フロントエンド (React, TypeScript)・バックエンド (Ruby on Rails) (2024/6 ~ 2024/7)",
        type: "internship",
      },
      {
        date: "2022-04",
        title: "名古屋工業大学",
        description: "入学",
        type: "education",
      },
    ],
    activities: [
      // link追加
      {
        date: "2026",
        title: "名古屋CVPR・ML勉強会",
        description: "2026~now",
      },
      {
        date: "2022",
        title: "工大祭実行委員会",
        description: "Web開発担当 (2022~2024)",
      },
      {
        date: "2022",
        title: "熱中症搬送者数予測サイト開発",
        description: "技術補佐員 (https://heatstroke.jp/)",
      },
    ],
    qualifications: [
      {
        date: "2025-05",
        title: "TOEIC 895点",
      },
      {
        date: "2024-04",
        title: "応用情報技術者試験",
      },
      {
        date: "2020-11",
        title: "実用英語技能検定 準一級",
      },
    ],
  },
  publications: {
    papers: [], // To be added later
    articles: [], // To be added later (e.g. from Qiita)
    developed: [], // GitHub repositories etc.
  },
};
