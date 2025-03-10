import { SignUp, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { isSignedIn } = useUser(); // Check if user is signed in
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login page if not signed in
    if (isSignedIn) {
      navigate("/");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="flex flex-col items-center gap-5 justify-center h-[100vh] bg-[url(/background_banner.jpg)] bg-cover ">
      <div className="z-30 mt-20">
        <SignUp />
      </div>
      <p className="text-center text-sm z-40">
        Already had an Account?{" "}
        <Link to="/login" className="text-red-600 hover:underline">
          Sign In now
        </Link>
      </p>

      <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </div>
  );
};

export default Register;
