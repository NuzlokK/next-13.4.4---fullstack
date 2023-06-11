import React, { PropsWithChildren } from "react";

import classes from "./SectionContainer.module.scss";

type Props = {
  className: string;
};

const SectionContainerView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
): JSX.Element => {
  return (
    <section className={props.className}>
      <div className={classes["container"]}>{props.children}</div>
    </section>
  );
};

export default SectionContainerView;
