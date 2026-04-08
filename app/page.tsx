import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import LatestNewsSection from "./components/News";
import VideoSection from "./components/VideoSection";
import ImageGallery from "./components/Album";
import Statistics from "./components/Statistics";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <LatestNewsSection />
      <VideoSection />
      <ImageGallery />
      <Statistics />
    </div>
  );
}
