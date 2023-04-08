//Si quiero leer el STORE necesito :
import { useSelector, useDispatch } from "react-redux";
import { unsetUser } from "../reducers/user/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
// import { useState } from "react"
// import ModalCreateProducts from "./modalProducts"

export const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //MODAL ADD PRODUCT
  // const [openModal, setOpenModal] = useState(false);
  //
  const current = useLocation();
  //Mi funcion de deslogeo
  const handleLogout = () => {
    dispatch(unsetUser());
    navigate("/");
  };
  //
  const handleToCart = () => {
    if (current.pathname === "/home") {
      navigate("/cart");
    } else if (current.pathname === "/catIndumen") {
      navigate("/cart");
    } else if (current.pathname === "/catElectro") {
      navigate("/cart");
    } else if (current.pathname === "/catDeporte") {
      navigate("/cart");
    } else if (current.pathname === "/catHogar") {
      navigate("/cart");
    } else {
      navigate("/home");
    }
  };
  const handleToElectro = () => {
    if (current.pathname === "/home") {
      navigate("/catElectro");
    } else if (current.pathname === "/cart") {
      navigate("/catElectro");
    } else if (current.pathname === "/catDeporte") {
      navigate("/catElectro");
    } else if (current.pathname === "/catHogar") {
      navigate("/catElectro");
    } else if (current.pathname === "/catIndumen") {
      navigate("/catElectro");
    } else {
      navigate("/home");
    }
  };
  const handleToDeporte = () => {
    if (current.pathname === "/home") {
      navigate("/catDeporte");
    } else if (current.pathname === "/cart") {
      navigate("/catDeporte");
    } else if (current.pathname === "/catElectro") {
      navigate("/catDeporte");
    } else if (current.pathname === "/catHogar") {
      navigate("/catDeporte");
    } else if (current.pathname === "/catIndumen") {
      navigate("/catDeporte");
    } else {
      navigate("/home");
    }
  };
  const handleToHogar = () => {
    if (current.pathname === "/home") {
      navigate("/catHogar");
    } else if (current.pathname === "/cart") {
      navigate("/catHogar");
    } else if (current.pathname === "/catElectro") {
      navigate("/catHogar");
    } else if (current.pathname === "/catDeporte") {
      navigate("/catHogar");
    } else if (current.pathname === "/catIndumen") {
      navigate("/catHogar");
    } else {
      navigate("/home");
    }
  };
  const handleToIndumentaria = () => {
    if (current.pathname === "/home") {
      navigate("/catIndumen");
    } else if (current.pathname === "/cart") {
      navigate("/catIndumen");
    } else if (current.pathname === "/catElectro") {
      navigate("/catIndumen");
    } else if (current.pathname === "/catDeporte") {
      navigate("/catIndumen");
    } else if (current.pathname === "/catHogar") {
      navigate("/catIndumen");
    } else {
      navigate("/home");
    }
  };
  const goHome = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="h-fit flex flex-col bg-black text-white fixed bg-casiFondo px-4 dark:bg-light z-50 w-full">
        <div className="flex xs:items-center xs:justify-center sm:justify-around mt-1 ">
          <h2 className="text-white text-2xl xl:text-3xl font-bold hidden sm:flex">
            Shopping Cart
          </h2>
          <p className="text-white text-base lg:text-lg">
            Bienvenid@ {user.fullName}
          </p>
        </div>
        <div className="flex xs:items-center justify-between mt-2 lg:mt-1 p-1 xs:flex-col flex-row">
          <div className="flex flex-row xs:gap-2 gap-5 xs:mb-2">
            <button
              onClick={handleToElectro}
              className={`text-white xs:text-base sm:text-lg hover:scale-110 duration-200 ${
                current.pathname === "/catElectro" ? "text-red-500" : ""
              }`}
            >
              Electro
            </button>
            <button
              onClick={handleToDeporte}
              className={`text-white xs:text-base sm:text-lg hover:scale-110 duration-200 ${
                current.pathname === "/catDeporte" ? "text-red-500" : ""
              }`}
            >
              Deportes
            </button>
            <button
              onClick={handleToHogar}
              className={`text-white xs:text-base sm:text-lg hover:scale-110 duration-200 ${
                current.pathname === "/catHogar" ? "text-red-500" : ""
              }`}
            >
              Hogar
            </button>
            <button
              onClick={handleToIndumentaria}
              className={`text-white xs:text-base sm:text-lg hover:scale-110 duration-200 ${
                current.pathname === "/catIndumen" ? "text-red-500" : ""
              }`}
            >
              Indumentaria
            </button>
            <button
              onClick={goHome}
              className={`text-white xs:text-base sm:text-lg hover:scale-110 duration-200 ${
                current.pathname === "/home" ? "text-red-500" : ""
              }`}
            >
              Inicio
            </button>
          </div>
          <div className="flex gap-5">
            <button
              onClick={handleToCart}
              className="text-white  rounded-md text-lg"
            >
              {current.pathname === "/home" ||
              current.pathname === "/catElectro" ||
              current.pathname === "/catDeporte" ||
              current.pathname === "/catHogar" ||
              current.pathname === "/catIndumen" ? (
                <FiShoppingCart />
              ) : (
                <IoReturnUpBackSharp />
              )}
            </button>

            <button
              className="btn btn-primary text-white  rounded-md p-1 text-lg"
              onClick={handleLogout}
            >
              <VscAccount />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
