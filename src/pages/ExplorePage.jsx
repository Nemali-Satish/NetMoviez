import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useUser } from "@clerk/clerk-react";
import { v4 as uuidv4 } from "uuid";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  console.log("params", params.explore);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((preve) => {
        return [...preve, ...response.data.results];
      });
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((preve) => preve + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/login");
    }
  }, [isSignedIn, navigate]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  //   console.log(exploreData);

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl text-center font-semibold my-3">
          Popular {params.explore} show
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((exploreData, index) => {
            const uniqId = uuidv4();
            return (
              <Card
                data={exploreData}
                key={uniqId}
                media_type={params.explore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
