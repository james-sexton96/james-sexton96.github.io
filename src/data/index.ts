import type { Publication, WorkItem } from "../types";

export const SITE = {
  name: "James Sexton",
  fullName: "James D. Sexton",
  location: "Brooklyn, NY",
  tagline:
    "Data Scientist and Commercial Leader in the Pharmaceutical Industry",
  domain: "jamesdsexton.com",
  links: {
    scholar: "https://scholar.google.com/citations?user=3Z64U10AAAAJ",
    linkedin: "https://www.linkedin.com/in/jamesdsexton/",
    github: "https://github.com/james-sexton96",
  },
  portrait: "/james-backpack.jpg", // swap for a tighter headshot if you have one
};

export const workHistory: WorkItem[] = [
  { id: 1, period: "Now",         org: "Compass Pathways",                       role: "Commercial Analytics" },
  { id: 2, period: "2022 — 2026", org: "Otsuka Precision Health",                role: "Data Scientist" },
  { id: 3, period: "2021 — 2022", org: "Eleusis Therapeutics (now AtaiBeckley)", role: "Data Scientist" },
  { id: 4, period: "2020 — 2022", org: "Imperial College London",                role: "Research" },
  { id: 5, period: "2017 — 2020", org: "University of Alabama at Birmingham",    role: "Research" },
];

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Increased global integration in the brain after psilocybin therapy for depression",
    authors:
      "Richard E Daws, Christopher Timmermann, Bruna Giribaldi, James D Sexton, Matthew B Wall, David Erritzoe, Leor Roseman, David Nutt, Robin Carhart-Harris",
    journal: "Nature Medicine",
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
    journal: "Frontiers in Psychiatry",
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
    journal: "Journal of Psychopharmacology",
    volume: 33,
    issue: 9,
    pages: "1058-1067",
    year: 2019,
    link: "https://journals.sagepub.com/doi/abs/10.1177/0269881119827796",
  },
];
