import CheckOutNew from "./components/CheckOutNew";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSectionTop from "./components/HeroSectionTop";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import WhatsTrending from "./components/WhatsTrending";
import WhoAreWe from "./components/WhoAreWe";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="px-10 md:px-20 xl:px-40">
        <HeroSectionTop />
        <WhoAreWe />
        <CheckOutNew />
      </div>
      <WhatsTrending />
      <div className="px-4 xl:px-40">
        <Testimonials />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
