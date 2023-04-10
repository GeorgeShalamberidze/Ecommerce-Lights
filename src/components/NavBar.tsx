import React, { useState } from "react";
import Link from "next/link";
import Cart from "./Cart";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { useStateContext } from "@/context/ProductContext";
import { BsFillCartFill } from "react-icons/bs";
import { MdSupervisorAccount } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBar = () => {
  const { showCart, setShowCart, totalQuantity, resetCart } = useStateContext();
  const { status, data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    resetCart();
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="nav_container">
      <nav>
        <ul className="flex justify-between items-center px-4 text-lg">
          <li className="p-2 profile_logo">
            {status === "loading" ? (
              "Loading"
            ) : session?.user ? (
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="font-bold text-lg text-white"
                >
                  {session?.user?.name}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    Profile
                    <span>
                      <CgProfile />
                    </span>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    My account
                    <span>
                      <MdSupervisorAccount />
                    </span>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    Logout{" "}
                    <span>
                      <CgLogOut />
                    </span>
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center mx-5 gap-2 font-bold text-xl"
              >
                <span>Login</span>
                <CgProfile size={25} />
              </Link>
            )}
          </li>
          <li className="p-2">
            <button
              type="button"
              className="flex items-center mx-5 gap-2 font-bold text-xl cursor-pointer hover:underline"
              onClick={() => setShowCart((prev: boolean) => !prev)}
            >
              <span>Cart</span>
              <BsFillCartFill size={25} className="relative" />
            </button>
            <div className="absolute top-10 right-8 roundBall">
              {totalQuantity}
            </div>
          </li>
        </ul>
        {showCart && <Cart />}
      </nav>
    </div>
  );
};

export default NavBar;
