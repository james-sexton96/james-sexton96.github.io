import { Github, Linkedin, GraduationCap } from "lucide-react";
import { UserData, Publication } from "../types";

// User Data
export const userData: UserData = {
  name: "James Sexton",
  profilePicture: "/IMG_3681.jpg", // Default/Desktop background
  mobileProfilePicture: "/mobile_background.jpg", // Mobile background
  brainGif: "/brain_activation2.gif", // Path in public folder
  links: [
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=3Z64U10AAAAJ",
      icon: GraduationCap,
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      focusRing: "focus:ring-green-400",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jamesdsexton/",
      icon: Linkedin,
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
      focusRing: "focus:ring-blue-400",
    },
    {
      name: "GitHub",
      url: "https://github.com/james-sexton96",
      icon: Github,
      bgColor: "bg-gray-800",
      hoverColor: "hover:bg-gray-900",
      focusRing: "focus:ring-gray-400",
    },
  ],
};

// Publication Data
export const actualPublications: Publication[] = [
  {
    id: 1, // Unique ID
    title:
      "Increased global integration in the brain after psilocybin therapy for depression",
    authors:
      "Richard E Daws, Christopher Timmermann, Bruna Giribaldi, James D Sexton, Matthew B Wall, David Erritzoe, Leor Roseman, David Nutt, Robin Carhart-Harris",
    journal: "Nature medicine",
    volume: 28,
    issue: 4,
    pages: "844-851",
    year: 2022,
    link: "https://www.nature.com/articles/s41591-022-01744-z",
  },
  {
    id: 2,
    title:
      "Associations between lifetime classic psychedelic use and markers of physical health",
    authors: "Otto Simonsson, James D Sexton, Peter S Hendricks",
    journal: "Journal of Psychopharmacology",
    volume: 35,
    issue: 4,
    pages: "447-452",
    year: 2021,
    link: "https://journals.sagepub.com/doi/abs/10.1177/0269881121996863",
  },
  {
    id: 3,
    title:
      "Population survey data informing the therapeutic potential of classic and novel phenethylamine, tryptamine, and lysergamide psychedelics",
    authors: "James D Sexton, Charles D Nichols, Peter S Hendricks",
    journal: "Frontiers in psychiatry",
    volume: 10,
    pages: "896",
    year: 2020,
    link: "https://www.frontiersin.org/articles/10.3389/fpsyt.2019.00896/full",
  },
  {
    id: 4,
    title:
      "Prevalence and epidemiological associates of novel psychedelic use in the United States adult population",
    authors:
      "James D Sexton, Michael S Crawford, Noah W Sweat, Allyson Varley, Emma E Green, Peter S Hendricks",
    journal: "Journal of psychopharmacology",
    volume: 33,
    issue: 9,
    pages: "1058-1067",
    year: 2019,
    link: "https://journals.sagepub.com/doi/abs/10.1177/0269881119827796",
  },
]; 