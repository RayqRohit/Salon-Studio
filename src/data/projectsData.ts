import projectsDataJson from "./projectsData.json";

export interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  year: string;
  client: string;
  service: string;
  location: string;
  mainImage: string;
  galleryImages: string[];
  nextProject: {
    slug: string;
    title: string;
    description: string;
    image: string;
  };
}

export const projectsData: Record<string, ProjectDetail> = projectsDataJson as Record<string, ProjectDetail>;
