import React, { PropsWithChildren } from "react";

import classes from "./Button.module.scss";

type Props = {
  className?: string;
};

const ButtonView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => (
  <button className={`${classes["button"]} ${props.className || ""}`}>
    {props.children}
  </button>
);

export default ButtonView;
