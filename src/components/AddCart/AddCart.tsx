import { ChangeEvent, ChangeEventHandler, FC, FormEvent, FormEventHandler, useState } from "react";
import { addCart } from "../../api";
import { CartToAddInterface } from "../../interfaces/CartInterface";
import { ProductsToAddInterface } from "../../interfaces/ProductInterface";
import { NumberInput } from "../_Reusable/NumberInput/NumberInput";
import { PrimaryButton } from "../_Reusable/PrimaryButton/PrimaryButton";

export const AddCart: FC = () => {

  const [cartData, setCartData] = useState<CartToAddInterface>({
    userId: 0,
    products: []
  });
  const [productData, setProductData] = useState<ProductsToAddInterface>({
    id: 0,
    quantity: 0
  });

  const handleChangeCartData: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCartData({
      ...cartData,
      [e.target.name]: e.target.value
    });
  }

  const handleChangeProductData: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit: FormEventHandler = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('submit');
    
    try {
      const { data } = await addCart(cartData);
      console.log('data --> ', data);
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="fixed flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-white border-[1px] border-gray-400 rounded-lg">

      <h2 className="text-lg py-4 font-bold">
        Add cart
      </h2>

      <div className="w-full px-5">
        <form className="">
          <NumberInput
            label="User ID:"
            name="userId"
            handler={handleChangeCartData}
          />
          
          <hr />

          <NumberInput
            label="Product ID:"
            name="id"
            handler={handleChangeProductData}
          />

          <NumberInput
            label="Quantity:"
            name="quantity"
            handler={handleChangeProductData}
          />
        </form>

        <div className="flex justify-end pb-5">
          <PrimaryButton 
            text="Add product"
            classes="bg-gray-800 self-end ml-auto"
            handler={() => setCartData(prev => ({ 
              ...prev, 
              products: [...prev.products].concat([{ id: productData.id, quantity: productData.quantity }])
            }))}
          />
        </div>

        <hr />

        <div className="w-full">
          <div className="flex justify-between pb-2">
            <p>Product ID:</p>
            <p>Quantity:</p>
          </div>

          {cartData.products.map((product, idx) => (
            <div className="flex justify-around" key={idx}>
              <p>{product.id}</p>
              <p>{product.quantity}</p>
            </div>
          ))}
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-500 w-full rounded-sm my-5 text-white px-5 py-2"
          onClick={handleSubmit}
        >
          Add cart
        </button>
      </div>

    </div>
  )
}