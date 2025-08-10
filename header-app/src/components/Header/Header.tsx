import { Button } from "flowbite-react";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [cartCount] = useState(2);

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white border-b border-gray-200 sm:border-r sm:border-gray-200 px-6 py-4 flex items-center justify-between shadow-lg z-50">
      <p className="text-2xl font-bold">Marketplace</p>
      <div className="flex justify-end w-full">
        <div className="relative">
          <Button outline>
            <ShoppingCart className="h-5 w-5" />
          </Button>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-pink-600 px-1 text-[10px] font-semibold text-white">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
