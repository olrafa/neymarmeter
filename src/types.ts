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
