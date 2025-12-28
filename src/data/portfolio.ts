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
    frontend: [
      {
        name: "Next.js",
        level: 4,
        iconName: "next",
        link: "https://nextjs.org/",
      },
      {
        name: "React",
        level: 4,
        iconName: "react",
        link: "https://react.dev/",
      },
      {
        name: "TypeScript",
        level: 5,
        iconName: "ts",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "JavaScript",
        level: 5,
        iconName: "js",
        link: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      {
        name: "Sass",
        level: 5,
        iconName: "sass",
        link: "https://sass-lang.com/",
      },
      {
        name: "Tailwind CSS",
        level: 4,
        iconName: "tailwind",
        link: "https://tailwindcss.com/",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 5,
        iconName: "nodejs",
        link: "https://nodejs.org/",
      },
      { name: "PHP", level: 4, iconName: "php", link: "https://www.php.net/" },
      {
        name: "Laravel",
        level: 4,
        iconName: "laravel",
        link: "https://laravel.com/",
      },
      {
        name: "MySQL",
        level: 4,
        iconName: "mysql",
        link: "https://www.mysql.com/",
      },
      {
        name: "PostgreSQL",
        level: 4,
        iconName: "postgres",
        link: "https://www.postgresql.org/",
      },
    ],
    infrastructure: [
      {
        name: "GitHub Actions",
        level: 4,
        iconName: "githubactions",
        link: "https://github.com/features/actions",
      },
      {
        name: "Vercel",
        level: 4,
        iconName: "vercel",
        link: "https://vercel.com/",
      },
      {
        name: "Supabase",
        level: 4,
        iconName: "supabase",
        link: "https://supabase.com/",
      },
      {
        name: "Firebase",
        level: 5,
        iconName: "firebase",
        link: "https://firebase.google.com/",
      },
      {
        name: "Google Cloud",
        level: 2,
        iconName: "gcp",
        link: "https://cloud.google.com/",
      },
      {
        name: "AWS",
        level: 1,
        iconName: "aws",
        link: "https://aws.amazon.com/",
      },
    ],
    machineLearning: [
      {
        name: "Python",
        level: 4,
        iconName: "py",
        link: "https://www.python.org/",
      },
      {
        name: "PyTorch",
        level: 1,
        iconName: "pytorch",
        link: "https://pytorch.org/",
      },
      {
        name: "HuggingFace",
        level: 3,
        iconName: null,
        link: "https://huggingface.co/",
      },
      {
        name: "Comet",
        level: 5,
        iconName: null,
        link: "https://www.comet.com/",
      },
    ],
    editor: [
      {
        name: "VSCode",
        level: 5,
        iconName: "vscode",
        link: "https://code.visualstudio.com/",
      },
      { name: "Cursor", level: 5, iconName: null, link: "https://cursor.com/" },
      {
        name: "Antigravity",
        level: 5,
        iconName: null,
        link: "https://antigravity.google/",
      },
    ],
    os: [
      {
        name: "Windows",
        level: 5,
        iconName: "windows",
        link: "https://www.microsoft.com/windows",
      },
      {
        name: "macOS",
        level: 5,
        iconName: null,
        link: "https://www.apple.com/macos/",
      },
      {
        name: "Linux",
        level: 4,
        iconName: "linux",
        link: "https://www.linux.org/",
      },
    ],
    tool: [
      { name: "Git", level: 5, iconName: "git", link: "https://git-scm.com/" },
      {
        name: "GitHub",
        level: 5,
        iconName: "github",
        link: "https://github.com/",
      },
      {
        name: "Docker",
        level: 2,
        iconName: "docker",
        link: "https://www.docker.com/",
      },
    ],
    other: [
      {
        name: "Java",
        level: 4,
        iconName: "java",
        link: "https://www.java.com/",
      },
      {
        name: "C",
        level: 3,
        iconName: "c",
        link: "https://www.c-language.org/",
      },
      { name: "C++", level: 3, iconName: "cpp", link: "https://isocpp.org/" },
      {
        name: "Bash",
        level: 5,
        iconName: "bash",
        link: "https://www.gnu.org/software/bash/",
      },
    ],
  },
  timeline: {
    // TODO: 並び替えの比較用のdate型のデータを追加する
    // TODO: これからの目標をどこかに書く(timeline上か、twitter風か)
    // TODO: 日付の形式(-, /を合わせる)
    // TODO: カテゴリを付けて、タイムラインにアイコンを表示する
    career: [
      {
        date: "2022-04",
        title: "名古屋工業大学 入学",
      },
      {
        date: "2025-03",
        title: "名古屋工業大学 玉木・丁研究室 配属",
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
        description: "バックエンド (PHP, Java, SpringBoot)",
      },
      {
        date: "2025/7 ~ Present",
        title: "株式会社イノベーション",
        description: "フロントエンド (React)・バックエンド (PHP, Laravel)",
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
      // TODO: link追加
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
    // TODO: 出した論文名も書いて、ボタンクリックでpublicationsにスクロール
    // TODO: posterかoralかもわかるように
    {
      date: "2025/7",
      title: "国内学会: 画像の認識・理解シンポジウム (MIRU 2025)",
      description: "TBW",
    },
    {
      date: "2026/1",
      title:
        "国際学会: The International Workshop on Advanced Image Technology (IWAIT2026)",
      description: "TBW",
    },
  ],
  publications: {
    // TODO: 論文はポスターがある場合はそれも載せる
    papers: [
      {
        date: "2025/7",
        title: "M3DDMによるvideo outpainting結果の改善方法の検討",
        authors: "村川卓也, 丁寧, 玉木徹",
        description: "MIRU TBW",
        links: [
          {
            title: "Poster",
            url: "https://sites.google.com/nitech.jp/tamaki-lab/poster",
          },
        ],
      },
      {
        date: "2026/1",
        title:
          "M3DDM+: an improved video outpainging by a modified masking strategy",
        authors: "Takuya Murakawa, Takumi Fukuzawa, Ding Ning, Toru Tamaki",
        description: "IWAIT TBW",
        abstract:
          "M3DDM provides a computationally efficient framework for video outpainting via latent diffusion modeling. However, it exhibits significant quality degradation --- manifested as spatial blur and temporal inconsistency --- under challenging scenarios characterized by limited camera motion or large outpainting regions, where inter-frame information is limited. We identify the cause as a training-inference mismatch in the masking strategy: M3DDM's training applies random mask directions and widths across frames, whereas inference requires consistent directional outpainting throughout the video. To address this, we propose M3DDM+, which applies uniform mask direction and width across all frames during training, followed by fine-tuning of the pretrained M3DDM model. Experiments demonstrate that M3DDM+ substantially improves visual fidelity and temporal coherence in information-limited scenarios while maintaining computational efficiency. The code is available at https://github.com/tamaki-lab/M3DDM-Plus.", // TODO: 一部だけ見えるようにして、展開で全部表示
        links: [
          {
            title: "Project Page",
            url: "https://github.com/tamaki-lab/M3DDM-Plus",
          },
          {
            title: "GitHub",
            url: "https://github.com/tamaki-lab/M3DDM-Plus",
          },
          {
            title: "IWAIT Proceedings (4 pages due to page limit)",
            url: "TBW",
          },
          {
            title: "arXiv (6 pages, Related Work included)",
            url: "TBW",
          },
          {
            title: "Poster",
            url: "TBW",
          },
        ],
      },
    ],
    qiitaArticles: [], // TODO: これはいらないかも
    noteArticles: [], // TODO: これはいらないかも
    slides: [
      {
        title:
          "What, when, and where? Self-Supervised Spatio-Temporal Grounding in Untrimmed Multi-Action Videos from Narrated Instructions",
        url: "https://www.slideshare.net/slideshow/what-when-and-where-self-supervised-spatio-temporal-grounding-in-untrimmed-multi-action-videos-from-narrated-instructions/279146670",
      },
      {
        title:
          "MotionMatcher: Cinematic Motion Customizationof Text-to-Video Diffusion Models via Motion Feature Matching",
        url: "https://www.slideshare.net/slideshow/motionmatcher-cinematic-motion-customizationof-text-to-video-diffusion-models-via-motion-feature-matching/284341530",
      },
    ], // TODO: speakerdeckと一緒に表示する
    projects: [], // GitHub repositories etc.
  },
};
