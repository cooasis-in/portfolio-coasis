import React from "react";

const Header = () => {
  return (
    <>
      <header className="z-50">
        <div className="container">
          <nav className="flex justify-between p-2 pt-7 items-center z-40">
            <div></div>
            <img
              className="cursor-pointer"
              src="/images/mainLogo.svg"
              alt="Logo"
            />
            <p className="text-[#232323] text-[20px] cursor-pointer">Menu</p>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
