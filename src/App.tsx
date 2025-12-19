import Awards from "./components/container/AwardsSection";
import Companies from "./components/container/CompaniesSection";
import Faq from "./components/container/FaqSection";
import Hero from "./components/container/HeroSection";
import Industries from "./components/container/IndustriesSection";
import Layout from "./components/container/Layout";
import LayoutMain from "./components/container/LayoutMain";
import Nav from "./components/container/Nav";
import Portofolio from "./components/container/Portofolio";
import Process from "./components/container/ProcessSection";
import Services from "./components/container/ServicesSection";
import Testimonials from "./components/container/Testimonials";

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
        <Testimonials></Testimonials>
        <Faq></Faq>
      </LayoutMain>
    </Layout>
  );
}

export default App;
