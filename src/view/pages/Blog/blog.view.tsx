import SectionContainer from "@/Containers/SectionContainer";
import React from "react";

import classes from "./blog.module.scss";

type Props = {};

const BlogView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div>HomeView</div>
    </SectionContainer>
  );
};

export default BlogView;
