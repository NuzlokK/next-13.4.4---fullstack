import SectionContainer from "@/Containers/SectionContainer";
import { IGallery } from "@/models/UI/portfolio.model";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import classes from "./portfolio.module.scss";

type Props = {
  gallery: IGallery[];
};

const PortfolioView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["portfolio"]}>
        <h1 className={classes["title"]}>Our Works</h1>
        <h2 className={classes["subTitle"]}>Choose a gallery</h2>
        <div className={classes["gallery"]}>
          {props.gallery.map((item: IGallery, index: number) => (
            <Link
              key={`gallery-item-${item.src}`}
              href={`/portfolio/${item.id}`}
              className={classes["item"]}
            >
              <Image
                src={item.src}
                alt="s"
                fill={true}
                className={classes["image"]}
              />
              <span className={classes["name"]}>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default PortfolioView;
