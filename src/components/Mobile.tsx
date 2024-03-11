import { Routes,Route } from "react-router-dom";
import LeftSide from "./LeftSide";
import RightclickDisplay from "./RightClickDisplay";
function Mobile():any{
 return(
    <Routes>
        <Route path="/" element={<LeftSide/>}/>
        <Route path="/:id" element={<RightclickDisplay/>}/>
    </Routes>
 )
}
export default Mobile;