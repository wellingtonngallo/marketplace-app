import { Spinner } from "flowbite-react";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import type { Product } from "../../../services/GetProductsService";
import type { useProductsList } from "../model/ProductsList.model";

type ProductsListViewProps = ReturnType<typeof useProductsList>;
export const ProductsListView = ({
  products,
  isLoadingProducts,
  isFetchingNextPage,
  sentinelRef,
}: ProductsListViewProps) => {
  if (isLoadingProducts)
    return (
      <div className="flex justify-center py-6">
        <Spinner
          aria-label="Carregando"
          className="text-gray-200 fill-blue-600"
        />
      </div>
    );

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold">Produtos</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
            rating={product.rating ?? 0}
            imageUrl={product.thumbnail}
            description={product.description}
          />
        ))}
      </div>

      <div ref={sentinelRef} className="h-10" />
      {isFetchingNextPage && (
        <div className="flex justify-center py-6">
          <Spinner
            aria-label="Carregando mais"
            className="text-gray-200 fill-blue-600"
          />
        </div>
      )}
    </div>
  );
};
