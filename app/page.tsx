import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import LatestNewsSection from "./components/News";
import VideoSection from "./components/VideoSection";
import ImageGallery from "./components/Album";
import Statistics from "./components/Statistics";
import Infos from "./components/Infos";
import Links from "./components/Links";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className=" w-full ">
      <Header />
      <Hero />
      <About />
      <LatestNewsSection />
      <Statistics />
      <ImageGallery />
      <Links />
      <VideoSection />
      <Infos />
      <Contact />
    </div>
  );
}
