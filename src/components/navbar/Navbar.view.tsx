"use client";

import React from "react";
import Link from "next/link";

import { INavBar } from "@/models/UI/navbar.model";
import classes from "./Navbar.module.scss";
import SectionContainer from "@/Containers/SectionContainer";
import Image from "next/image";
import Button from "../Button/Button";

type Props = {
  links: INavBar[];
};

const logout = () => {
  console.log("logout");
};

const NavbarView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["navbar"]}>
        <Link href="/">
          <Image alt="logos" src="/logo.png" width={69} height={45} />
        </Link>
        <div className={classes["navbarItem"]}>
          {props.links.map((item: INavBar, index: number) => (
            <li key={`link-${item.title}-${index}`} className={classes["list"]}>
              <Link href={item.url} className={classes["item"]}>
                {item.title}
              </Link>
            </li>
          ))}
          <Button className={classes["button"]}>Logout</Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default NavbarView;
