import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Box } from "@mui/material";
import React, { useState } from "react";

function HomePage() {
  const contactState = [
    { name: "Pratiksha", massage: ["Hello", "Hey"] },
    { name: "Pruthvi", massage: ["Hi", "How are you?"] },
    { name: "Pranjal", massage: ["Nice to meet you", "Hey"] },
    { name: "Trupti", massage: ["Nice to meet you", "Hey"] },
    { name: "Prerana", massage: ["Nice to meet you", "Hey"] },
    { name: "Abhinandan", massage: ["Nice to meet you", "Hey"] },
    { name: "Abhishek", massage: ["Nice to meet you", "Hey"] },
    { name: "Mehvish", massage: ["Nice to meet you", "Hey"] },
    { name: "Nupur", massage: ["Nice to meet you", "Hey"] },
    { name: "Shital", massage: ["Nice to meet you", "Hey"] },
    { name: "Shruti", massage: ["Nice to meet you", "Hey"] },
  ];

  const [selectedState, setSelectedState] = useState(null);

  return (
    <Box display="flex" flexDirection="row" height="100vh">
      <Box width="30%" sx={{ background: "#1f2c33" }}>
        <LeftSide
          contactState={contactState}
          setSelectedState={setSelectedState}
          selectedState={selectedState}
        />
      </Box>
      <Box sx={{ border: ".05px solid #2f3b44" }} />
      <Box width="70%" sx={{ background: "#1f2c33" }}>
        <RightSide selectedState={selectedState} />
      </Box>
    </Box>
  );
}

export default HomePage;
