export interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
  fork: boolean;
  updated_at: string;
  homepage: string | null;
}
