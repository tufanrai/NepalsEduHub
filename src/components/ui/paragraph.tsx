import React from "react";

interface IProps {
  para: string;
  key: number;
}

const P = ({ para, key }: IProps) => {
  return (
    <p
      key={key}
      className="text-foreground text-base lg:text-lg font-regural mb-2"
    >
      {para}
    </p>
  );
};

export default P;
