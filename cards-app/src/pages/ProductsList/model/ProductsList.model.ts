import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import type { IGetProductsService } from "../../../services/GetProductsService";

type UseProductsListProps = {
  getProductsService: IGetProductsService;
};

const PAGE_SIZE = 10;

export const useProductsList = ({
  getProductsService,
}: UseProductsListProps) => {
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const getListProducts = useInfiniteQuery({
    queryKey: ["products"],
    initialPageParam: 0,
    queryFn: async ({ pageParam }) =>
      getProductsService.getProducts({
        limit: PAGE_SIZE,
        skip: pageParam as number,
      }),
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;

      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
  });

  const hasNextPage = getListProducts.hasNextPage ?? false;
  const isFetchingNextPage = getListProducts.isFetchingNextPage;
  const fetchNextPage = getListProducts.fetchNextPage;

  useEffect(() => {
    if (!sentinelRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];

        if (first.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return {
    products:
      getListProducts.data?.pages.flatMap((page) => page.products) ?? [],
    isLoadingProducts: getListProducts.isLoading,
    isFetchingNextPage,
    sentinelRef,
  };
};
