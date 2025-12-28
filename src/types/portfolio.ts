export interface TimelineItem {
  date: string;
  title: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  iconName: string | null;
}

export interface PortfolioData {
  name: string;
  icon: string;
  catchphrase: string;
  strengths: string[];
  links: Array<{
    url: string;
    name: string;
    iconLink: string;
    width?: number;
    height?: number;
    iconBackgroundColor?: string;
    backgroundColor?: string;
  }>;
  skills: {
    frontend: SkillItem[];
    backend: SkillItem[];
    infrastructure: SkillItem[];
    machineLearning: SkillItem[];
    editor: SkillItem[];
    os: SkillItem[];
    other: SkillItem[];
  };
  timeline: {
    career: TimelineItem[];
    internship: TimelineItem[];
    parttime: TimelineItem[];
    activities: TimelineItem[];
  };
  qualifications: Array<{
    date: string;
    title: string;
  }>;
  researchConferences: TimelineItem[];
  publications: {
    // TODO: データ構造を定義する
    papers: unknown[];
    qiitaArticles: unknown[];
    noteArticles: unknown[];
    slides: unknown[];
    projects: unknown[];
  };
}
