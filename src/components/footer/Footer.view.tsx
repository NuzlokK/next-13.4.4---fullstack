"use client";

import React from "react";

import { IFooter } from "@/models/UI/footer.model";

type Props = {
  data: IFooter[];
};

const FooterView = (props: Props) => {
  console.log("sup");
  return (
    <div>
      {props.data.map((item: IFooter, index: number) => (
        <p key={`item-footer-${index}`}>{item.copyright}</p>
      ))}
    </div>
  );
};

export default FooterView;
