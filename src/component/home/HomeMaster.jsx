import React from "react";
import CommunityDesigner from "./CommunityDesigner";
import WorkShowcase from "./WorkShowcase";
import TalentPoolDesign from "./TalentPoolDesign";
import DesignInstitute from "./DesignInstitute";
import Hero from "./Hero";
import DotGrid from "../common/DotGrid";

const HomeMaster = () => {
  return (
    <div>
      <DotGrid/>
      <Hero />
      <CommunityDesigner />
      <WorkShowcase />
      <TalentPoolDesign />
      <DesignInstitute />
    </div>
  );
};

export default HomeMaster;
