import { useCallback, useMemo, useState } from "react";

type UseProductCardProps = {
  rating: number;
};

const STAR_VALUES = [1, 2, 3, 4, 5] as const;

export const useProductCard = ({ rating }: UseProductCardProps) => {
  const [productImageLoaded, setProductImageLoaded] = useState(false);

  const levelRating = useMemo(() => {
    const level = Math.max(0, Math.min(5, rating));
    return Math.round(level);
  }, [rating]);

  const handleProductImageLoaded = useCallback(() => {
    setProductImageLoaded(true);
  }, []);

  return {
    levelRating,
    STAR_VALUES,
    productImageLoaded,
    handleProductImageLoaded,
  };
};
