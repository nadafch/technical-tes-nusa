import React from "react";
import digicoin from "../asset/Digicoins.png";
import Rectangle from "../asset/Rectangle 7.png";
import moon from "../asset/moon.png";

function Navbar() {
  return (
    <div className="bg-black p-3 flex justify-between">
      <div className="flex gap-2">
        <img src={Rectangle} />
        <div className="my-auto">
          <img src={digicoin} />
        </div>
      </div>
      <div className="flex gap-2 my-auto">
        <h4 className="text-white mr-3">ENG/ID</h4>
        <h4 className="text-white border-r-2"></h4>
        <div className="my-auto">
          <img src={moon} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
