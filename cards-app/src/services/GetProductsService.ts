export type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
  images: string[];
  description: string;
};

export type GetProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export interface IGetProductsService {
  getProducts: (params?: {
    limit?: number;
    skip?: number;
  }) => Promise<GetProductsResponse>;
}

export class GetProductsService implements IGetProductsService {
  async getProducts(params?: {
    limit?: number;
    skip?: number;
  }): Promise<GetProductsResponse> {
    const limit = params?.limit ?? 20;
    const skip = params?.skip ?? 0;
    const url = new URL("https://dummyjson.com/products");
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("skip", String(skip));

    const response = await fetch(url.toString());
    return response.json();
  }
}
