import React from "react";

import NavbarView from "./Navbar.view";

import { links } from "./Navbar.map";

type Props = {};

const Navbar: React.FC = (props: Props) => {
  return <NavbarView links={links} />;
};

export default Navbar;
