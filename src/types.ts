export type RunMentions = {
  color: string;
  runHour: string;
  mentions: number;
  sites: string[];
};

export type MentionsSummary = RunMentions[];

export type Site = {
  site: string;
  url: string;
};

export type Story = {
  title: string;
  link: string;
  source: string;
  date: string;
  imageUrl: string;
};