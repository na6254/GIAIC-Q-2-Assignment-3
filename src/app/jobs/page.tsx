import Footer from "@/Components/footer"
import Header from "@/Components/header"
export default function Jobs(){
    return(
        <div>
        <Header />
        <div className="jobs">
        <h1><b>"Join me on my Next.js journey!</b> 
            <br />
            I'm a beginner developer looking to collaborate and learn from others. 
            If you're interested in working together or would like to discuss potential projects, 
            let's connect!
            <br />
            <b>Current Skills:</b>
            <br />
            - Beginner-level proficiency in Next.js <br />
            - Familiarity with JavaScript, TypeScript and HTML/CSS <br />
            
            <b>Available for:</b>
            <br />
            - Freelance projects <br />
            - Collaborations <br />
            - Mentorship opportunities
        </h1>
        </div>
        <Footer/>
        </div>
    )
}