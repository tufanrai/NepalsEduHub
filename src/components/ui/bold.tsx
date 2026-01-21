import React from "react";

interface IProps {
  key: number;
  val: string;
}
const B = ({ key, val }: IProps) => {
  return (
    <b
      key={key}
      className="text-foreground text-base lg:text-lg font-semibold mb-2"
    >
      {val}
    </b>
  );
};

export default B;
