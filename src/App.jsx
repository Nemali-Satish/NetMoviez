import React, { useEffect } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setBannerData, setImageURL } from "./store/movieSlice";
import DetailsPage from "./pages/DetailsPage";
import ExplorePage from "./pages/ExplorePage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      console.log(response);

      dispatch(setBannerData(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");

      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
    } catch (error) {}
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);

  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path=":explore" element={<ExplorePage />} />
          <Route path=":explore/:id" element={<DetailsPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
