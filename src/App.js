import { Avatar } from "./components/Avatar";
import Layout from "./components/Layout";
import LinksCards from "./components/LinkCard";
import Img from './assets/photo.jpeg';
import Footer from "./components/Footer";


function App() {

  const bio = (
    <>
      16y
      <br></br>
      F.A ADC
      <br></br>
      Plays since 2017
      <br></br>
    </>
  )
  return (
    <Layout>
      <Avatar
        image={Img}
        title="Lol player"
        subtitle="Main jinx aspirante a loucura"
        bio={bio}
      />
      <LinksCards />
      <Footer />
    </Layout>
  );
}

export default App;
