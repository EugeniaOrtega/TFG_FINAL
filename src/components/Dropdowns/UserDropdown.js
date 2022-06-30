import React from "react";
import { createPopper } from "@popperjs/core";
import { useAuth } from "context/authContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const { user, logout } = useAuth();
  console.log(user);
  const history = useHistory();
  const handleLogout = async () => {
    try {
      await logout();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="text-blueGray-500 block"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={user.photoURL}
            />
          </span>
        </div>
      </div>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a className="lg:text-black-200 lg:hover:text-blueGray-200 text-black-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
          <Link to="/profile">
            <i className="lg:text-blueGray-800 text-blueGray-800 fas fa-user text-lg leading-lg mr-2" />{" "}
            Perfil
          </Link>
        </a>
        <a
          className="lg:text-black-200 lg:hover:text-blueGray-200 text-black-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          onClick={handleLogout}
        >
          <Link to="/">
            <i className="lg:text-blueGray-800 text-blueGray-800 fas fa-sign-out-alt text-lg leading-lg mr-2" />{" "}
            Cerrar sesion
          </Link>
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
