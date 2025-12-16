import type React from "react";
import './Tab.scss'
import { TabButton } from "./components/TabButton/TabButton";
import { useState } from "react";

export const Tab: React.FC = () => {
 const [isHighlighted, setIsHighlighted] = useState(false);

 return (
  <div className="tab">
   <TabButton title='Study Mode' isHighlighted={true} />
   <TabButton title='All Cards' isHighlighted={false}/>
  </div>
 )
}