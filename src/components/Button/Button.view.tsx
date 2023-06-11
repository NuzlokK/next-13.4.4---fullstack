import Link from "next/link";
import React, { PropsWithChildren } from "react";

import classes from "./Button.module.scss";

type Props = {
  url?: string;
  className?: string;
};

const ButtonView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => (
  <Link href={props.url || ""}>
    <button className={`${classes["button"]} ${props.className || ""}`}>
      {props.children}
    </button>
  </Link>
);

export default ButtonView;
