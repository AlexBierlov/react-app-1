import { useContext } from "react";
import GlobalContext from "../../share/context";

export default function Header() {
   const { buttonValue, isToken } = useContext(GlobalContext);
   return (
      <header className="header">
         <button className="btn" onClick={() => {isToken()}}>{buttonValue}</button>
      </header>
   );
}