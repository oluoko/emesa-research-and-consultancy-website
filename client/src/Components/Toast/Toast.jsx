import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Toast.css";

export const showToast = (message, type) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast(message);
  }
};

const Toast = () => {
  return (
    <ToastContainer
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default Toast;
