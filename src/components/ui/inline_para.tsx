import React from "react";

interface IProps {
  key: number;
  val: string;
}

const Inline_para = ({ key, val }: IProps) => {
  return (
    <p
      className="text-foreground text-base lg:text-lg font-regural mb-2 inline"
      key={key}
    >
      {val}
    </p>
  );
};

export default Inline_para;
