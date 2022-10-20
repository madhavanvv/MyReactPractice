import React, { useState } from "react";
import axios from "axios";
import AxiosDisplay from "./AxiosDisplay";

const MyAxios = () => {
  const [item, setItems] = useState();
  const [disp, setDisp] = useState(false);

  const myData = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    const { data } = response;
    const randomData = data.results[0];
    setItems(randomData);
    setDisp(true);
  };

  return (
    <div>
      <h1>hello axios</h1>
      <button onClick={myData}>Submit</button>
      {disp && <AxiosDisplay randomData={item} />}
    </div>
  );
};
export default MyAxios;
