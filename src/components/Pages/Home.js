import Hero from "../Hero/Hero";
import Header from "../Header/Header";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";
// import BackGround from "../BackGround/BackGround";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>

      <Work />
      <Footer />
    </div>
  );
}
