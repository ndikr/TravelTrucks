import Header from "../Header/Header";
import css from "./Layout.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Header />
      <Suspense fallback={null}>
        <div className={css.content}>{children}</div>
      </Suspense>
    </>
  );
}
