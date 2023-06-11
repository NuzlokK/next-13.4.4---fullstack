import SectionContainer from "@/Containers/SectionContainer";
import React from "react";

import classes from "./about.module.scss";

type Props = {};

const AboutView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div>About</div>
    </SectionContainer>
  );
};

export default AboutView;
