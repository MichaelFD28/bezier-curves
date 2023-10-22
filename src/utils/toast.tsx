import { toast } from "react-toastify";

export const errorToast = (message: string | JSX.Element) => {
  // re-set toastify css variable here so it is declared after toastify
  // can't set in css file as toastify loads and declares after
  document.documentElement.style.setProperty(
    "--toastify-color-error",
    "#bd3d2f"
  );
  const content =
    typeof message === "string" ? (
      <p style={{ wordBreak: "break-word" }}>{message}</p>
    ) : (
      message
    );

  toast(content, {
    position: toast.POSITION.TOP_RIGHT,
    type: "error",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
