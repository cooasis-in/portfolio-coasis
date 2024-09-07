import "./App.css";
import ForthPage from "./component/ForthPage/ForthPage";
import Layout from "./component/Layout";
import ThirdPage from "./component/ThirdPage/ThirdPage";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <ThirdPage /> */}
      <ForthPage />
    </Layout>
  );
}

export default MyApp;

