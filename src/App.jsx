import "./App.css";
import FashionAMaster from "./component/fashionArticle/FashionAMaster";
import MeetUpMaster from "./component/meetupPriemier/MeetUpMaster";
import HomeMaster from "./component/home/HomeMaster";
function App() {
  return (
    <>
      <HomeMaster />
      <FashionAMaster />
      <MeetUpMaster />
    </>
  );
}

export default App;
