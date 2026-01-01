export interface TimelineItem {
  date: string;
  timestamp: Date;
  title: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  iconName: string | null;
  link?: string;
}

export interface PortfolioData {
  aboutme: {
    name: string;
    icon: string;
    bio: string;
    catchphrase: string;
    strengths: string[];
  };
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
    tool: SkillItem[];
    other: SkillItem[];
  };
  timeline: {
    career: TimelineItem[];
    internship: TimelineItem[];
    parttime: TimelineItem[];
    activities: TimelineItem[];
    researchConferences: TimelineItem[];
    goals: TimelineItem[];
  };
  qualifications: Array<{
    date: string;
    title: string;
  }>;
  publications: {
    // TODO: データ構造を定義する
    papers: unknown[];
    noteArticles: unknown[];
    slides: unknown[];
    articles: Array<{
      title: string;
      site: string;
      link: string;
      description: string;
    }>;
  };
  projects: Array<{
    title: string;
    description: string;
    links: Array<{
      title: string;
      url: string;
    }>;
    tags: string[];
  }>;
  stories: Array<{
    title: string;
    category: "internship" | "research" | "parttime" | "activity" | "project";
    description: string;
  }>;
}
