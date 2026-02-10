export type TextFragment =
  | { type: "text"; text: string }
  | { type: "bold"; text: string }
  | { type: "link"; text: string; href: string };

export type ListItem = string | TextFragment[];

export type BlogContentBlock =
  | { type: "title"; text: string }
  | { type: "subtitle"; text: string }
  | { type: "paragraph"; fragments: TextFragment[] }
  | { type: "quote"; text: string }
  | { type: "list"; items: ListItem[] }
  | { type: "image"; link: string };

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  intro: string;
  date: string;
  // author: string;
  tags: string[];
  image: string;
  content: BlogContentBlock[];
}
