import Layout from "../Layout/Layout";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
export default function App() {
  const isRefreshing = false;
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/catalog" element={<CatalogPage></CatalogPage>}></Route>
        <Route path="/catalog/:id" element={<CamperPage></CamperPage>}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>

    // <>
    //   {isRefreshing ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <Layout>

    //     </Layout>
    //   )}
    // </>
  );
}
