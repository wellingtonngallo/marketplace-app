export type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  rating: number;
  imageUrl?: string;
  description: string;
};

export type UseProductCardProps = Omit<ProductCardProps, 'description' | 'name' | 'price' | 'imageUrl'>;