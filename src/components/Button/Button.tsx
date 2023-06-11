import React, { PropsWithChildren } from "react";

import ButtonView from "./Button.view";

type Props = {
  className?: string;
};

const Button: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return <ButtonView className={props.className}>{props.children}</ButtonView>;
};

export default Button;
