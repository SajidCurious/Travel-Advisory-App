import Corousel from "./components/Carousel";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Corousel />
      <Footer />
    </>
  );
};

export default App;
