import { Button, Card, Rating, RatingStar } from "flowbite-react";
import { formatCurrency } from "../../utils/formatCurrency";
import { useProductCard } from "./ProductCard.model";
import type { ProductCardProps } from "./ProductCard.type";

export const ProductCard = ({
  name,
  price,
  rating,
  id,
  imageUrl,
  description,
}: ProductCardProps) => {
  const {
    levelRating,
    STAR_VALUES,
    productImageLoaded,
    productAlreadyInCart,
    handleProductImageLoaded,
    handleAddToCart,
  } = useProductCard({ rating, id });

  return (
    <Card className="w-full max-w-full sm:max-w-sm md:max-w-md mx-auto overflow-hidden">
      <div className="relative w-full overflow-hidden rounded-t-lg bg-gray-100 aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/9]">
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
      <h5 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 mt-3 px-2 sm:px-4 break-words line-clamp-2 md:line-clamp-3">
        {name}
      </h5>
      <p className="text-sm sm:text-base text-gray-700 mt-1 px-2 sm:px-4 line-clamp-2 sm:line-clamp-3">
        {description}
      </p>
      <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 justify-between px-2 sm:px-4">
        <div className="flex items-center gap-1">
          <span className="text-xs sm:text-sm text-gray-500">{rating.toFixed(1)}</span>
          <Rating>
            {STAR_VALUES.map((star) => (
              <RatingStar key={star} filled={star <= levelRating} />
            ))}
          </Rating>
        </div>
        <span className="text-base sm:text-xl md:text-2xl font-bold whitespace-nowrap tabular-nums">{formatCurrency(price)}</span>
      </div>
      <Button
        className="mt-4 sm:mt-3 w-full px-3 sm:px-4 py-2 text-sm sm:text-base"
        onClick={() => handleAddToCart({ id, name, price, imageUrl })}
      >
        {productAlreadyInCart ? "Remover do carrinho" : "Adicionar ao carrinho"}
      </Button>
    </Card>
  );
};
