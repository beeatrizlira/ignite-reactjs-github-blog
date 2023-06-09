export interface Posts {
  title: string;
  body: string;
  created_at: string;
  number: number;
}

export interface Post {
  body: string;
  title: string;
  html_url: string;
  created_at: string;
  comments: number;
  user: {
    login: string;
  };
}
