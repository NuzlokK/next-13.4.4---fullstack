import SectionContainer from "@/Containers/SectionContainer";
import LayoutView from "@/view/pages/Portfolio/Layout.view";
import React, { PropsWithChildren } from "react";

type Props = {};

const PortfolioLayout: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <div>
      <SectionContainer>
        <LayoutView />
      </SectionContainer>

      {props.children}
    </div>
  );
};

export default PortfolioLayout;
