import { Button, Card, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import type { ProductCart } from 'marketplace-host/context'
import { useDrawer } from "./Drawer.model";
import { formatCurrency } from "../../utils/formatCurrency";
import { ShoppingCart } from "lucide-react";

type CartDrawerProps = {
  isOpen: boolean
  handleCartDrawer: () => void
}

export const CartDrawer = ({ isOpen, handleCartDrawer }: CartDrawerProps) => {
  const { subTotal, productsCart } = useDrawer();

  return (
    <Drawer open={isOpen} onClose={handleCartDrawer} position="right">
      <DrawerHeader title="Meu Carrinho" titleIcon={ShoppingCart} />
      <DrawerItems>
        <div className="space-y-3">
          {productsCart.map((product: ProductCart) => (
            <Card
              key={product.id}
              className="w-full shadow-none border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-12 w-12 md:h-14 md:w-14 rounded object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded bg-gray-100" />
                )}
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-medium text-gray-900 break-words leading-tight">
                    {product.name}
                  </h5>
                  <p className="mt-1 text-xs text-gray-600">{formatCurrency(product.price)}</p>
                </div>
              </div>
            </Card>
          ))}
          {productsCart.length === 0 && (
            <p className="text-sm text-gray-500">Seu carrinho está vazio.</p>
          )}
        </div>
        {productsCart.length > 0 && (
          <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-3">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="text-sm font-semibold text-gray-900">{subTotal}</span>
          </div>
        )}
        {productsCart.length > 0 && (
          <div className="mt-3">
            <Button className="w-full">Finalizar compra</Button>
          </div>
        )}
      </DrawerItems>
    </Drawer>
  );
}
