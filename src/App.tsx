import Awards from "./components/container/AwardsSection";
import Companies from "./components/container/CompaniesSection";
import Hero from "./components/container/HeroSection";
import Layout from "./components/container/Layout";
import LayoutMain from "./components/container/LayoutMain";
import Nav from "./components/container/Nav";

function App() {
  return (
    <Layout>
      <Nav></Nav>
      <Hero></Hero>
      <LayoutMain>
        <Companies></Companies>
        <Awards></Awards>
      </LayoutMain>
    </Layout>
  );
}

export default App;
