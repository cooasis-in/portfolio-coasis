import "./App.css";
import WorkShowcase from "./component/WorkShowcase";
import DesignInstitute from "./component/DesignInstitute";
import Footer from "./component/Footer";
import TalentPoolDesign from "./component/TalentPoolDesign";
import CommunityDesigner from "./component/CommunityDesigner";
import DotGrid from "./component/common/DotGrid";

function App() {
  return (
    <>
    <DotGrid/>
      <CommunityDesigner />
      <WorkShowcase />
      <TalentPoolDesign />
      <DesignInstitute />
      <Footer />
    </>
  );
}

export default App;
