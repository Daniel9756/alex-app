import "./App.css";
import React, { useState } from "react";
import { Typography, Container, Box } from "@mui/material";

import Group1 from "./components/carousel/Group1";
import Group2 from "./components/carousel/Group2";
import Group3 from "./components/carousel/Group3";
import { Carousel } from "react-bootstrap";

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <Container
      style={{
        marginBottom: 20,
        paddingBottom: 10,
        paddingTop: 20,
        background: "#130f40",
        backgroundImage: `url(https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)`
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
          fontSize: 46,
          color: "#fff",
        }}
      >
        <h2>OUR</h2>{" "}
        <h2 style={{ color: "#e84118", marginLeft: 12 }}>HOTELS</h2>
      </Box>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{
        
          height: 600,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Carousel.Item style={{ marginLeft: 10,paddingLeft: 20,  marginRight: 10, paddingRight: 40  }}>
          <Group1 />
        </Carousel.Item>
        <Carousel.Item>
          <Group2 />
        </Carousel.Item>
        <Carousel.Item>
          <Group3 />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default App;
