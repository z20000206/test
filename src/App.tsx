import Header from './components/header';
import Banner from './components/banner';
import Carousel from './components/carousel';
import IntroSection from './components/introsection';
import Spec from './components/spec';
import Footer from './components/footer';
import SideMenu from './components/menu';

function App() {
  return (
    <div className="l-wrapper">
      <Header />
      <main>
        <Banner />
        <Carousel />
        <IntroSection />
        <Spec />
      </main>
      <Footer />
      <SideMenu />
    </div>
  );
}

export default App;
