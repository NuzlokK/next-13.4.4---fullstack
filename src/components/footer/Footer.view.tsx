"use client";

import React from "react";

import SectionContainer from "@/Containers/SectionContainer";

import { IFooter } from "@/models/UI/footer.model";
import classes from "./Footer.module.scss";

type Props = {
  data: IFooter[];
};

const FooterView = (props: Props) => {
  console.log("sup");
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["footer"]}>
        {props.data.map((item: IFooter, index: number) => (
          <p key={`item-footer-${index}`}>{item.copyright}</p>
        ))}
      </div>
    </SectionContainer>
  );
};

export default FooterView;
