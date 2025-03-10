import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { SignedIn } from "@clerk/clerk-react";
import MobileNavigation from "../components/MobileNavigation";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />

      <Footer />
      <SignedIn>
        <MobileNavigation />
      </SignedIn>
    </div>
  );
};

export default RootLayout;
