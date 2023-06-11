"use client";

import React from "react";
import Link from "next/link";

import { INavBar } from "@/models/UI/navbar.model";
import classes from "./Navbar.module.scss";

type Props = {
  links: INavBar[];
};

const logout = () => {
  console.log("logout");
};

const NavbarView = (props: Props) => {
  return (
    <div className={classes["navbar"]}>
      {props.links.map((item: INavBar, index: number) => (
        <li key={`link-${item.title}-${index}`} className={classes["list"]}>
          <Link href={item.url} className={classes["item"]}>
            {item.title}
          </Link>
        </li>
      ))}
      <button onClick={logout}>Log</button>
    </div>
  );
};

export default NavbarView;
