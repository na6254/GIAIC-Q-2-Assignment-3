import Link from "next/link";

export default function Header(){
    return(
        <div className="header">
            <ul className="header-buttons">
             <Link href={"/"}><li className="header-button-formation">Home</li></Link>   
             <Link href={"/about-us"}><li className="header-button-formation">About us</li></Link>   
             <Link href={"/contact-us"}><li className="header-button-formation">Contact us</li></Link>   
             <Link href={"/jobs"}><li className="header-button-formation">Jobs</li></Link>   
            </ul>
        </div>
    )
}