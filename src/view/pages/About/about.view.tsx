import Button from "@/components/Button/Button";
import SectionContainer from "@/Containers/SectionContainer";
import Image from "next/image";
import React from "react";

import classes from "./about.module.scss";

type Props = {};

const AboutView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["about"]}>
        <div className={classes["titleWithImage"]}>
          <Image
            className={classes["aboutImg"]}
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="s"
            fill={true}
          />
          <div className={classes["imageText"]}>
            <h1 className={classes["imgTitle"]}>Digital Storytellers</h1>
            <h2 className={classes["imgDescription"]}>
              Handcrafting award winning digital experiences
            </h2>
          </div>
        </div>
        <div className={classes["info"]}>
          <div className={classes["block"]}>
            <h1 className={classes["question"]}>Who are we?</h1>
            <p className={classes["answer"]}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              velit soluta alias rem nisi eveniet debitis in expedita sed fuga,
              commodi qui impedit, earum hic veritatis minus enim voluptatem a.
            </p>

            <p className={classes["answer"]}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              velit soluta alias rem nisi eveniet debitis in expedita sed fuga,
              commodi qui impedit, earum hic veritatis minus enim voluptatem a.
            </p>

            <p className={classes["answer"]}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              velit soluta alias rem nisi eveniet debitis in expedita sed fuga,
              commodi qui impedit, earum hic veritatis minus enim voluptatem a.
            </p>
          </div>
          <div className={classes["block"]}>
            <h1 className={classes["question"]}>What we do?</h1>
            <text className={classes["answer"]}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              velit soluta alias rem nisi eveniet debitis in expedita sed fuga,
              commodi qui impedit, earum hic veritatis minus enim voluptatem a.
            </text>
            <ul className={classes["list"]}>
              <li>Creative Ilustration</li>
              <li>Dynamic Website</li>
              <li>Fast Mobile Apps</li>
            </ul>
            <Button url="/contact" className={classes["button"]}>
              Click
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutView;
