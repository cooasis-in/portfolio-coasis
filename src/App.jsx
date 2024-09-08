import { Routes, Route } from "react-router-dom";
import FashionAMaster from "./component/fashionArticle/FashionAMaster";
import MeetUpMaster from "./component/meetupPriemier/MeetUpMaster";
import HomeMaster from "./component/home/HomeMaster";
import DotGrid from "./component/common/DotGrid";
import DesignMaster from "./component/talentPoolDesign/DesignMaster";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeMaster />} />
        <Route path="/secondPage" element={<DesignMaster />} />
        <Route path="/thirdPage" element={<FashionAMaster />} />
        <Route path="/fourthPage" element={<MeetUpMaster />} />
      </Routes>
    </>
  );
}

export default App;