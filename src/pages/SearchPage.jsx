import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useUser } from "@clerk/clerk-react";
import { FaSearch } from "react-icons/fa";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { isSignedIn } = useUser();

  const query = location?.search?.slice(3);

  const fetchData = async () => {
    try {
      const response = await axios.get(`search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page,
        },
      });
      setData((preve) => {
        return [...preve, ...response.data.results];
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/login");
    }
  }, [isSignedIn, navigate]);

  useEffect(() => {
    if (query) {
      setPage(1);
      setData([]);
      fetchData();
    }
  }, [location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((preve) => preve + 1);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isSignedIn) {
    return <div className="h-[100vh] w-[100vw]"> Loading</div>; // Optionally, a loader can be added here while waiting for the redirect.
  }

  return (
    <div className="py-16 min-h-[100vh]">
      <div className="lg:hidden my-2 mx-1 sticky top-[70px] flex justify-center items-center z-30">
        <div className="flex items-center bg-zinc-700/50  rounded-md text-white backdrop-blur-3xl  px-3">
          <FaSearch />
          <input
            type="text"
            placeholder="Search here..."
            onChange={(e) => navigate(`/search?q=${e.target.value}`)}
            value={query?.split("%20")?.join(" ")}
            className="px-4 py-1 text-lg w-80 outline-none"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3 text-center">
          Search Results
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((searchData, index) => {
            return (
              <Card
                data={searchData}
                key={searchData.id + "search" + index}
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
