import React from "react";
import digicoin from "../asset/Digicoins.png";
import Rectangle from "../asset/Rectangle 7.png";
import moon from "../asset/moon.png";

function Navbar() {
  return (
    <nav className="w-full bg-black p-5 flex flex-wrap justify-between">
      <div className="flex gap-2">
        <img src={Rectangle} />
        <div className="my-auto">
          <a href="/">
            <img src={digicoin} />
          </a>
        </div>
      </div>
      <div className="flex gap-2 my-auto">
        <a href="/" className="text-white mr-3">
          ENG/ID
          <span className="text-white border-r-2 ml-4"></span>
        </a>
        <div className="my-auto">
          <img src={moon} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
