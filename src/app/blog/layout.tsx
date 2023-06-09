import React, { PropsWithChildren, ReactNode } from "react";

type Props = {};

const BlogLayout: React.FC<PropsWithChildren> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <div>
      <h1>Blog Layout</h1>
      {props.children}
    </div>
  );
};

export default BlogLayout;
