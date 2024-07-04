import Image from "next/image";
import React from "react";

const Logo = () => {
  const logo = "/assets/images/logo-with-bg.png";
  return (
    <div className="relative w-24 h-24 ">
      <Image src={logo} alt="Logo" fill />
    </div>
  );
};

export default Logo;
