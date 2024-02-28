import { Routes, Route } from "react-router-dom";
import RightclickDisplay from "./RightclickDisplay";
import RightInitialDisplay from "./RightInitialDisplay";

function RightSide() {
  return (
    <Routes>
      <Route path="/" element={<RightInitialDisplay />} />
      <Route path="/:id" element={<RightclickDisplay />} />
    </Routes>
  );
}

export default RightSide;
