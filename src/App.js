import React from 'react';
import { useEffect, useState } from 'react';
import Banner from "./Banner";
import Aboutme from "./Aboutme";
import Carosel from "./Carosel";

function App() {
  const [date, setDate] = useState(null);

  return (
    <div>
      <Banner></Banner>
      <Aboutme></Aboutme>
      <Carosel></Carosel>
    </div>
  );
}

export default App;
