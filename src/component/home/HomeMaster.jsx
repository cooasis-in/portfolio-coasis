import React from "react";
import CommunityDesigner from "./CommunityDesigner";
import WorkShowcase from "./WorkShowcase";
import TalentPoolDesign from "./TalentPoolDesign";
import DesignInstitute from "./DesignInstitute";
import Hero from "./Hero";

const HomeMaster = () => {
  return (
    <div>
      <Hero />
      <CommunityDesigner />
      <WorkShowcase />
      <TalentPoolDesign />
      <DesignInstitute />
    </div>
  );
};

export default HomeMaster;
