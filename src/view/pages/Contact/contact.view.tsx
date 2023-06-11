import Button from "@/components/Button/Button";
import SectionContainer from "@/Containers/SectionContainer";
import Image from "next/image";
import React from "react";

import classes from "./contact.module.scss";

type Props = {};

const ContactView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["contact"]}>
        <h1 className={classes["title"]}>Let&apos;s Keep in Touch</h1>
        <div className={classes["contactForm"]}>
          <div className={classes["image"]}>
            <Image src="/contact.png" alt="contact" width={500} height={500} />
          </div>
          <div className={classes["formContainer"]}>
            <form action="submit" className={classes["form"]}>
              <input
                className={classes["input"]}
                type="text"
                placeholder="name"
              />
              <input
                className={classes["input"]}
                type="email"
                placeholder="email"
              />
              <input
                className={`${classes["input"]} ${classes["message"]}`}
                type="text"
                placeholder="message"
              />
            </form>
            <Button className={classes["button"]}>Send</Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactView;
