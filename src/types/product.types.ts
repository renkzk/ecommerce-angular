export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}
