import React from "react";

import FooterView from "./Footer.view";

import { footer } from "./Footer.map";

type Props = {};

const Footer = (props: Props) => {
  return <FooterView data={footer} />;
};

export default Footer;
