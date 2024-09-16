import Layout from "../Layout/Layout";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"));
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
export default function App() {
  const isRefreshing = false;
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/catalog" element={<CatalogPage></CatalogPage>}></Route>
        <Route path="/catalog/:id" element={<CamperPage></CamperPage>}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route
          path="/favorites"
          element={<FavoritesPage></FavoritesPage>}
        ></Route>
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
