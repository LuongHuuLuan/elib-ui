export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  subMenu?: boolean;
  activePath?: string[];
  subMenuItems?: SideNavItem[];
};

export type MenuItem = {
  title: string;
  icon?: JSX.Element;
  code?: string;
  to?: string;
  action?: boolean;
  children?: MenuItem[];
};

export type LinkItem = {
  title: string;
  path: string | null;
};

export type Book = {
  id: number;
  title: string;
  description: string | null;
  image: string;
  code: string;
  parent_code: string | null;
  source: Source;
  url_book_source: string;
  is_redirect_to_source: number;
  children_count: number;
  year: number;
  count_view: string;
  position: number;
  categories: Category[];
  book_documents: BookDocument[];
  authors: Author[];
  child_books: Book[];
};

export type Category = {
  id: number;
  name: string;
  code: string;
  parent_code: string;
  children_count: number;
  position: number | null;
};

export type Author = {
  id: number;
  name: string;
  code: string;
};

export type Source = {
  id: number;
  name_source: string;
  url_source: string;
  color: string;
  background: string;
};

export type BookDocument = {
  id: number;
  file_name: string | null;
  file_size: string | null;
  web_path: string | null;
  system_path: string | null;
  file_type: string | null;
  code: string;
  book_code: number;
  position: number | null;
};
