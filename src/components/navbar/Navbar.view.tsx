import { INavBar } from "@/models/UI/navbar.model";
import Link from "next/link";
import React from "react";

type Props = {
  links: INavBar[];
};

const NavbarView = (props: Props) => {
  return (
    <div>
      {props.links.map((item: INavBar, index: number) => (
        <li key={`link-${item.title}-${index}`}>
          <Link href={item.url}>{item.title}</Link>
        </li>
      ))}
      sup
    </div>
  );
};

export default NavbarView;
