import { ChangeEvent, ChangeEventHandler, FC, FormEvent, FormEventHandler, useContext, useState, MouseEventHandler } from "react";
import { addCart } from "../../api";
import { AppContext } from "../../context/AppContext";
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
  const [error, setError] = useState<string>("");

  const { setAddCartModal } = useContext(AppContext);

  const handleChangeCartData: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");

    setCartData({
      ...cartData,
      [e.target.name]: e.target.value
    });
  }

  const handleChangeProductData: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    
    setProductData({
      ...productData,
      [e.target.name]: e.target.value
    })
  }

  const handleAddProduct = (): void => {

    if(Number(productData.id) === 0 || Number(productData.quantity) === 0) {
      return setError("Incorrect product info");
    }
    
    setCartData(prev => ({ 
      ...prev, 
      products: [...prev.products].concat([{ id: productData.id, quantity: productData.quantity }])
    }));
  }

  const handleSubmit: FormEventHandler = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if(Number(cartData.userId) === 0 || cartData.products.length === 0) {
      return setError("User ID is incorrect or cart is empty");
    }
    
    try {
      const res = await addCart(cartData);
      if(res.status === 200) setAddCartModal(prev => !prev);
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="fixed flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white border-[1px] border-gray-400 rounded-lg">

      <h2 className="text-lg py-4 font-bold">
        Add cart
      </h2>

      {error ? (
        <p className="text-sm text-red-400">
          {error}
        </p>
      ) : null}

      <div className="w-full px-5">
        <form className="">
          <NumberInput
            label="User ID:"
            name="userId"
            handler={handleChangeCartData}
            value={cartData.userId}
          />
          
          <hr />

          <NumberInput
            label="Product ID:"
            name="id"
            handler={handleChangeProductData}
            value={productData.id}
          />

          <NumberInput
            label="Quantity:"
            name="quantity"
            handler={handleChangeProductData}
            value={productData.quantity}
          />
        </form>

        <div className="flex justify-end pb-5">
          <PrimaryButton 
            text="Add product"
            classes="bg-gray-800 self-end ml-auto"
            handler={handleAddProduct}
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
          className="bg-blue-600 hover:bg-blue-500 w-full rounded-sm mt-5 text-white px-5 py-2"
          onClick={handleSubmit}
        >
          Add cart
        </button>

        <button
          className="bg-white hover:bg-gray-200 w-full rounded-sm mb-5 mt-2 border-[1px] border-gray-800 px-5 py-2"
          onClick={() => setAddCartModal(prev => !prev)}
        >
          Close
        </button>
      </div>

    </div>
  )
}