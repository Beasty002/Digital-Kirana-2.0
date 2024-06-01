import axios from "axios";

function App() {

  const handlePayment = async (payment_method) => {
    const url = "http://localhost:3000/api/create";
    const data = {
      amount: 100,
      products: [{product: "665aa7b215cb64cd6b8e2dfa", amount: 100, quantity: 1 }],
      payment_method,
      // costumer: {
      //   _id: "665606745e163fe47b91f066",
      // },
      costumer:"665606745e163fe47b91f066",
    };

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
        console.error("Failed to fetch:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  const esewaCall = (formData) => {
    console.log(formData);
    var path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (var key in formData) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", formData[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };
  return (
    <>
      <div className="w-[100vw] flex justify-center items-center mt-[5vh]">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 mx-2"
          onClick={() => handlePayment("esewa")}
        >
          Pay Through Esewa
        </button>
      </div>
    </>
  );
}

export default App;
