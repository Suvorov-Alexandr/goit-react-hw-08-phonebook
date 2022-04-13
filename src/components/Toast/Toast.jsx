import { Toaster } from "react-hot-toast";

function Toats() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={true}
      toastOptions={{
        style: {
          padding: "18px",
          fontSize: "16px",
        },
        error: {
          style: {
            border: "2px solid red",
          },
        },
        success: {
          style: {
            border: "3px solid green",
          },
        },
      }}
    />
  );
}

export default Toats;
