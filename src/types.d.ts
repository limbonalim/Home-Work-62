export interface Data {
  email: string;
  name: string;
  title: string;
  message: string;
}

export interface Offices {
  support: string;
  main: string;
}

export interface Filling {
  name: string;
  price: number;
  image: string;
}

export interface Counter {
  name: string;
  count: number;
}

export interface Cell {
  hasItem: boolean;
  clicked: boolean;
  id: string;
}