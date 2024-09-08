import viteLogo from "/vite.svg";
import "./App.css";
import DesignInstitute from "./component/DesignInstitute";
import Footer from "./component/Footer";
import TalentPoolDesign from "./component/TalentPoolDesign";
import Events from "./component/Events";
import FutureNetworkSection from "./component/FutureNetworkSection";


function App() {

  return (
    <>
      <TalentPoolDesign/>
      <Events/>
      <FutureNetworkSection/>
     <DesignInstitute />
      <Footer />
    </>
  );
}

export default App;
