import { ReactElement, useCallback, useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import Link from "next/link";
import Cart from "./icons/Cart";

const Navbar = (): ReactElement => {
  const [auth, setAuth] = useState<boolean>(false);

  const seeAuth = useCallback(async () => {
    const a = await Auth.currentAuthenticatedUser();
    if (a) setAuth(true);
  }, []);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      setAuth(false)
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  useEffect(() => {
    seeAuth();
  }, []);

  return (
    <nav className="bg-white px-4 py-2 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <img
                src="./icons/icon-32x32.png"
                className="mr-3 h-8"
                alt={process.env.NEXT_PUBLIC_TITLE}
              />
              <span className="text-2xl font-bold text-red-600">
                {process.env.NEXT_PUBLIC_TITLE}
              </span>
            </div>
          </Link>
        </div>
        <div className="justify-between items-center gap-4 flex w-auto">
          <Link href="/cart">
            <div className="cursor-pointer">
              <Cart />
            </div>
          </Link>
          {!auth && <Link href="/login">Log In</Link>}
          {auth && (
            <button type="button" onClick={() => handleSignOut()}>
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
