export interface Posts {
  title: string;
  body: string;
  created_at: string;
}

export interface Post {
  title: string;
  html_url: string;
  created_at: string;
  comments: number;
  user: {
    login: string;
  };
}