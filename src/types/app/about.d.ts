export interface JobHistory {
  range: string;
  link: string;
  linkLabel: string;
  role?: string;
}

export interface Account {
  name: string;
  url: string;
}

export interface Product {
  name: string;
  url: string;
}

export interface Activity {
  name: string;
  url: string;
  date: string;
}
