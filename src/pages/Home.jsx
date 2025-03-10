import { useUser } from "@clerk/clerk-react";
import React from "react";
import Landing from "../components/Landing";
import HomeContent from "./HomeContent";

const Home = () => {
  const { isSignedIn } = useUser();

  return <div className="">{isSignedIn ? <HomeContent /> : <Landing />}</div>;
};

export default Home;
