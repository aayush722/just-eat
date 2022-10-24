import React from 'react'

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onClick={onClick}
    ></div>
  );
};

export default NextArrow;