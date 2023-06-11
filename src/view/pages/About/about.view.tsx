import SectionContainer from "@/Containers/SectionContainer";
import Image from "next/image";
import React from "react";

import classes from "./about.module.scss";

type Props = {};

const AboutView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["about"]}>
        <div className={classes["title"]}>
          <Image src="/s" alt="s" width={20} height={30} />
          <div>text</div>
        </div>
        <div className={classes["info"]}>
          <div></div>
          <div></div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutView;
