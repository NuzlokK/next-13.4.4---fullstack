import React, { PropsWithChildren } from "react";

type Props = {};

const PortLayout: React.FC<PropsWithChildren> = (
  props: PropsWithChildren<Props>
) => {
  return <div>Portfolio Layout{props.children}</div>;
};

export default PortLayout;
