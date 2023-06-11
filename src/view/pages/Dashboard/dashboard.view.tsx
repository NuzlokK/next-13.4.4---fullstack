import SectionContainer from "@/Containers/SectionContainer";
import React from "react";

import classes from "./dashboard.module.scss";

type Props = {};

const DashboardView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div>HomeView</div>
    </SectionContainer>
  );
};

export default DashboardView;
