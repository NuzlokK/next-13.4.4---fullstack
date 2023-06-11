import SectionContainer from "@/Containers/SectionContainer";
import React from "react";

import classes from "./home.module.scss";

type Props = {};

const HomeView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div>Home</div>
    </SectionContainer>
  );
};

export default HomeView;
