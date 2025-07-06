// Type Definition for Publication
export interface Publication {
  id: number; // Use a unique ID for React keys
  title: string;
  authors: string;
  journal: string; // Can be journal name or conference name
  year: number;
  link?: string; // Link is now populated for most items
  volume?: string | number; // Add optional volume
  issue?: string | number; // Add optional issue
  pages?: string; // Add optional pages
}

// Type Definition for User Data
export interface UserData {
  name: string;
  profilePicture: string;
  mobileProfilePicture: string;
  brainGif: string;
  links: SocialLink[];
}

// Type Definition for Social Links
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  bgColor: string;
  hoverColor: string;
  focusRing: string;
}

// Props Type for PublicationsList
export interface PublicationsListProps {
  publications: Publication[];
} 