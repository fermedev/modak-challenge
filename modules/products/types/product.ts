export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: Category;
  thumbnail: string;
  images: string[];
};

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type Category = {
  slug: string;
  name: string;
  url: string;
};
