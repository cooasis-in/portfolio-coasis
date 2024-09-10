import React from "react";
import CommunityDesigner from "./CommunityDesigner";
import WorkShowcase from "./WorkShowcase";
import TalentPoolDesign from "./TalentPoolDesign";
import DesignInstitute from "./DesignInstitute";
import Hero from "./Hero";
import Events from "./Events";
import FutureNetworkSection from "./FutureNetworkSection";

const HomeMaster = () => {
  return (
    <div>
      <Hero />
      <CommunityDesigner />
      <WorkShowcase />
      <TalentPoolDesign />
      <DesignInstitute />
      <Events />
      <FutureNetworkSection />
    </div>
  );
};

export default HomeMaster;
