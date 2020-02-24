import React from "react";

const FormList = ({ year, director, title, image }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{year}</p>
      <p>{director}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default FormList;
