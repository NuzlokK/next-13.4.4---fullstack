"use client";

import React from "react";

import SectionContainer from "@/Containers/SectionContainer";

import { IFooter, IFooterIcons } from "@/models/UI/footer.model";
import classes from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: IFooter[];
  icons: IFooterIcons[];
};

const FooterView = (props: Props) => {
  console.log("sup");
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["footer"]}>
        <div className={classes["data"]}>
          {props.data.map((item: IFooter, index: number) => (
            <p key={`item-footer-${index}`}>{item.copyright}</p>
          ))}
        </div>
        <div className={classes["icons"]}>
          {props.icons.map((item: IFooterIcons, index: number) => (
            <Link key={`footer-icon-${item.name}`} href="/">
              <Image
                src={`${item.path}`}
                alt={`${item.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default FooterView;
