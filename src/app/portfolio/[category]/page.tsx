import SectionContainer from "@/Containers/SectionContainer";
import CategoryView from "@/view/pages/Portfolio/Category/Category.view";
import React from "react";

type Props = {
  params: {
    category: string;
  };
};

const Category: React.FC<Props> = ({ params }) => {
  return (
    <SectionContainer>
      <CategoryView />
      {params.category}
    </SectionContainer>
  );
};

export default Category;
