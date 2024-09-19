import Header from "../Header/Header";
import css from "./Layout.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        pauseOnHover
        style={{ width: "400px" }} // Inline styling for width
        toastStyle={{
          backgroundColor: "#F2F4F7",
        }}
      />
      <Header />
      <Suspense fallback={null}>
        <div className={css.content}>{children}</div>
      </Suspense>
    </>
  );
}
