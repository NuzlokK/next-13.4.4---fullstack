import React from "react";

import FooterView from "./Footer.view";

import { footerData, footerIcons } from "./Footer.map";

type Props = {};

const Footer = (props: Props) => {
  return <FooterView data={footerData} icons={footerIcons} />;
};

export default Footer;
