import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    //console.log(data);
    const details = data.results[0];
    setDetails(details);
    console.log(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      <Counter />

      <Card details={details} />

      {/* <Card name="sara" imgUrl="https://images.pexels.com/photos/2522672/pexels-photo-2522672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/> */}
      {/* <Card imgUrl="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /> */}
    </div>
  );
}

export default App;
