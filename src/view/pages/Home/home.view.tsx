import Button from "@/components/Button/Button";
import SectionContainer from "@/Containers/SectionContainer";
import Image from "next/image";
import React from "react";

import classes from "./home.module.scss";

type Props = {};

const HomeView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["home"]}>
        <div className={classes["info"]}>
          <h1 className={classes["title"]}>
            Better designe for your digital product
          </h1>
          <p className={classes["slogan"]}>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Button url="/portfolio" className={classes["button"]}>
            See Our Works
          </Button>
        </div>
        <div className={classes["homeImage"]}>
          <Image
            className={classes["image"]}
            src="/home.png"
            alt="s"
            width={600}
            height={600}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default HomeView;
