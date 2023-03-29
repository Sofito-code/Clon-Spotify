import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-bottons">
        <Image src="/media/header/Go back.svg" alt="" />
        <button>
          <Image src="/media/header/Go forward.svg" alt="" />
        </button>
      </div>
      <div className="auth">
        <span className="sing-up">Sign up</span>
        <div className="log-in">
          <span>Log in</span>
        </div>
      </div>
    </header>
  );
};

export { Header };
