import React from "react";

interface IProps {
  key: number;
  id: string;
  val: string;
}

const H2 = ({ key, val, id }: IProps) => {
  return (
    <h2
      key={key}
      id={id}
      className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4 cursor-pointer ease duration-300 relative after:content-['#'] after:hidden hover:after:inline hover:after:italic hover:after:text-blue-500/50 hover:after:absolute hover:after:right-auto hover:after:bottom-0"
    >
      {val}
    </h2>
  );
};

export default H2;
