import React, { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  let HeroData = [
    { text1: "Dive Into", text2: "What You Love" },
    { text1: "Indulge", text2: "Your Passion" },
    { text1: "Give Into", text2: "Your Passion" },
  ];

  const [HeroCount, setHeroCount] = useState(0);
  const [PlayStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((prevCount) => (prevCount + 1) % HeroData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Background PlayStatus={PlayStatus} HeroCount={HeroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        setHeroCount={setHeroCount}
        HeroCount={HeroCount}
        HeroData={HeroData[HeroCount]}
        PlayStatus={PlayStatus}
      />
    </div>
  );
}

export default App;
