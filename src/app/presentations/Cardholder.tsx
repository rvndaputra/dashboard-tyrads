import Image from "next/image";
import React from "react";

const Cardholder = () => {
  return (
    <div className="text-md text-white font-semibold tracking-wide">
      <div className="relative h-64 w-96 bg-gradient-to-r from-indigo-900 via-violet-600 to-purple-900 rounded-md">
        <Image
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
          src="/assets/images/inky-credit-card.png"
          width={350}
          height={350}
          alt="card img"
          draggable={false}
        />
        <Image
          className="absolute top-5 right-5 select-none"
          src="/assets/images/visa-logo-white.webp"
          width={50}
          height={50}
          alt="visa logo"
        />
        <div className="absolute top-3 left-3">S.</div>
        <div className="absolute bottom-3 left-3">
          <div>****9838</div>
          <div>Jhon Demon</div>
        </div>
        <div className="absolute right-3 bottom-3">08/12</div>
      </div>
    </div>
  );
};

export default Cardholder;
