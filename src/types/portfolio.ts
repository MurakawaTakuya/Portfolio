export interface TimelineItem {
  date: string;
  title: string;
  description?: string;
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
    frontend: string[];
    backend: string[];
    infrastructure: string[];
    other: string[];
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
  publications: {
    papers: unknown[];
    articles: unknown[];
    developed: unknown[];
  };
}
