import FashionAMaster from "./component/fashionArticle/FashionAMaster";
import MeetUpMaster from "./component/meetupPriemier/MeetUpMaster";
import HomeMaster from "./component/home/HomeMaster";
import DotGrid from "./component/common/DotGrid";
import DesignMaster from "./component/talentPoolDesign/DesignMaster";
function App() {
  return (
    <>
      {/* <DotGrid /> */}
      <HomeMaster />
      <DesignMaster />
      <FashionAMaster />
      <MeetUpMaster />
    </>
  );
}

export default App;
