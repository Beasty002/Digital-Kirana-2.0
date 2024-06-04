/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const PaymentForm = ({cartData,authData}) => {
  console.log(cartData,authData)

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async (payment_method) => {
    console.log(cartData.cartTotalQuantity)
    const url = "http://localhost:3000/api/create/1";
    const data = {
      amount: cartData.cartTotalAmount,
      quantity: cartData.cartTotalQuantity ,
      products: [
        { product: cartData.cartItems, amount: cartData.cartTotalAmount}
      ],
      payment_method,
      costumer: "665606745e163fe47b91f066",
    };

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const responseData = response.data;
        console.log(responseData);
        if (responseData.payment_method === "esewa") {
          esewaCall(responseData.formData);
        }
      } else {
        setError(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      setError(`Error during fetch: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const esewaCall = (formData) => {
    console.log(formData);
    const path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (const key in formData) {
      const hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", formData[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="w-[100vw] flex flex-col justify-center items-center mt-[5vh]">
      {error && <p className="text-red-600">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 mx-2"
          onClick={() => handlePayment("esewa")}
        >
          Pay Through Esewa
        </button>
      )}
    </div>
  );
}

export default PaymentForm;
