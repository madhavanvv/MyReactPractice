import React from "react";

const AxiosDisplay = (props) => {
  //console.log(props.randomData);
  let uImg, fullName;

  let allData = props.randomData;
  uImg = allData.picture.large;
  fullName = allData.name.title + allData.name.first + allData.name.last;

  return (
    <>
      <div>
        <img src={uImg} alt="..." />
        <div>
          <h5>{fullName}</h5>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#">Go somewhere</a>
        </div>
      </div>
    </>
  );
};
export default AxiosDisplay;
