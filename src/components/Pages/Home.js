
import Hero from "../Hero/Hero"
import Header from "../Header/Header";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";
import BackGround from "../BackGround/BackGround";
export default function Home() {
  return (
    <div>
      
      <BackGround headerDiv={<Header/> } heroDiv = {<Hero/>}></BackGround>
    <Work/>
    <Footer/>
    </div>
  )
}
