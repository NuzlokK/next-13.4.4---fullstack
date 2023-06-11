import React from "react";

import PortfolioView from "@/view/pages/Portfolio/portfolio.view";

import { gallery } from "@/view/pages/Portfolio/portfolio.map";

type Props = {};

const Portfolio = (props: Props) => {
  return <PortfolioView gallery={gallery} />;
};

export default Portfolio;
