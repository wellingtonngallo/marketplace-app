import { Button, Card, Rating, RatingStar } from "flowbite-react";
import { formatCurrency } from "../../utils/formatCurrency";
import { useProductCard } from "./ProductCard.model";
import type { ProductCardProps } from "./ProductCard.type";

export const ProductCard = ({
  name,
  price,
  rating,
  imageUrl,
  description,
}: ProductCardProps) => {
  const {
    levelRating,
    STAR_VALUES,
    productImageLoaded,
    handleProductImageLoaded,
  } = useProductCard({ rating });

  return (
    <Card className="max-w-sm">
      <div className="relative w-full overflow-hidden rounded-t-lg bg-gray-100 aspect-[4/3]">
        {!productImageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 h-full w-full object-contain p-2 transition-opacity duration-300 ${productImageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={handleProductImageLoaded}
          />
        )}
      </div>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900">
        {name}
      </h5>
      <p className="font-normal text-gray-700">{description}</p>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-500">{rating.toFixed(1)}</span>
          <Rating>
            {STAR_VALUES.map((star) => (
              <RatingStar key={star} filled={star <= levelRating} />
            ))}
          </Rating>
        </div>
        <span className="text-2xl font-bold">{formatCurrency(price)}</span>
      </div>
      <Button className="mt-3 w-full">Adicionar ao carrinho</Button>
    </Card>
  );
};
