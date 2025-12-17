import Awards from "./components/container/AwardsSection";
import Companies from "./components/container/CompaniesSection";
import Hero from "./components/container/HeroSection";
import Industries from "./components/container/IndustriesSection";
import Layout from "./components/container/Layout";
import LayoutMain from "./components/container/LayoutMain";
import Nav from "./components/container/Nav";
import Portofolio from "./components/container/Portofolio";
import Process from "./components/container/ProcessSection";
import Services from "./components/container/ServicesSection";

function App() {
  return (
    <Layout>
      <Nav></Nav>
      <Hero></Hero>
      <LayoutMain>
        <Companies></Companies>
        <Awards></Awards>
        <Process></Process>
        <Services></Services>
        <Industries></Industries>
        <Portofolio></Portofolio>
      </LayoutMain>
    </Layout>
  );
}

export default App;
