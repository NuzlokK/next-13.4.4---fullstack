import SectionContainer from "@/Containers/SectionContainer";
import React from "react";

import classes from "./portfolio.module.scss";

type Props = {};

const PortfolioView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div>HomeView</div>
    </SectionContainer>
  );
};

export default PortfolioView;
