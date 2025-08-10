import { GetProductsService } from "../../../services/GetProductsService"
import { useProductsList } from "../model/ProductsList.model"
import { ProductsListView } from "../view/ProductsList.view"

export const ProductsListPage = () => {
  const getProductsService = new GetProductsService()
  const props = useProductsList({ getProductsService })

  return <ProductsListView {...props}/>
}