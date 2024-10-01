import pic from "../profile pic.jpg"
import Image from "next/image"
import Footer from "@/Components/footer"
import Header from "@/Components/header"
export default function Home(){
  return(
      <div>
      <Header/>
  <div className="homeContainer">
    <div className="childContainer">
      Hey,
      <br />
      My Name is <span className="nameColor">Noman ALi</span>
      <br />
      I am Next JS Developer
      <br />
      Welcome to my Homepage...
    </div>
      <div className="childContainer" > 
    <Image
      src={pic}
      alt="This is profile picture"  
      className="img"/>
      </div>
      <Footer/>
  </div>
  </div>
  )
}