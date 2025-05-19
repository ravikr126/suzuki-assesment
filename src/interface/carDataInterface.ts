export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  description: string;
  images: string[];
  specifications: {
    engine: string;
    transmission: string;
    fuel: string;
  };
}
