import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import LatestNewsSection from "./components/News";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <LatestNewsSection />
    </div>
  );
}
