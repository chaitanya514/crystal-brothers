"use client";


import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, updateQty, removeItem, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item?.fields?.price * item?.quantity, 0);


  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart?.map((item) => (
            <div
              key={item?.fields?.id}
              className="flex items-center gap-4 border-b py-4"
            >
                {console.log("item from cart",item)}
              <Image
              
                src={`https:${item?.fields?.image?.fields?.file?.url}`} 
                width={100}
                height={100}
                alt={item.name}
                className="rounded"
              />

              <div className="flex-1">
                <h2 className="font-semibold">{item?.fields?.name}</h2>
                <p>${item?.fields?.price}</p>

                {console.log("item from cart",item)}

                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() =>
                      updateQty(item?.fields?.id, Math.max(1, item.quantity - 1))
                    }
                    className="cursor-pointer px-3 py-1 border rounded"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQty(item?.fields?.id, item.quantity + 1)}
                    className="cursor-pointer px-3 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeItem(item?.fields?.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>

            <button
              onClick={clearCart}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </main>
  );
}
