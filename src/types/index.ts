export interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  link?: string;
  volume?: string | number;
  issue?: string | number;
  pages?: string;
}

export interface WorkItem {
  id: number;
  period: string;
  org: string;
  role: string;
}

export interface PublicationsListProps {
  publications: Publication[];
}

export interface WorkHistoryProps {
  items: WorkItem[];
}
