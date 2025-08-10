import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ProductsListPage } from "./page/ProductsList.page"

export const ProductsList = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <div className="mt-24">
      <QueryClientProvider client={queryClient}>
        <ProductsListPage />
      </QueryClientProvider>
    </div>
  )
}

export default ProductsList