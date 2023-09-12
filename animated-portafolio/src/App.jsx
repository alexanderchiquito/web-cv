import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

//'bg-site bg-no-repeat bg-cover overflow-hidden'

function App() {
  return (
    <div className="bg-bkg text-content isolate overflow-hidden p-4">
        <Header />
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Contact />
        {/* <div className="h-[4000px]"></div> */}
    </div>
  );
}

export default App;
