import type React from "react";
import "./Logo.scss";

export const Logo: React.FC = () => {
 const screenWidth = window.innerWidth;
 const fileName = screenWidth > 400 ? 'full' : 'min';

  return <img src={`src/assets/icons/logo-${fileName}.svg`} className="logo"/>;
};
