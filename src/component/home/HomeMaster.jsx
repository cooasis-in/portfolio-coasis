import React from "react";
import CommunityDesigner from "./CommunityDesigner";
import WorkShowcase from "./WorkShowcase";
import TalentPoolDesign from "./TalentPoolDesign";
import DesignInstitute from "./DesignInstitute";
import Hero from "./Hero";
import WaterDropGrid from "../common/WaterDropGrid";
import Events from "./Events";
import FutureNetworkSection from "./FutureNetworkSection";

const HomeMaster = () => {
  return (
    <div>
      {/* <DotGrid/> */}
      {/* <WaterDropGrid /> */}
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
