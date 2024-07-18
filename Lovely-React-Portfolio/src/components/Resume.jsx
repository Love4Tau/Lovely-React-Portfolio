import REACT from "react";
import "./Resume.css"
const Resume = () => {
    return (
        <div>
            <h2>Lovely's Resume</h2>
            <iframe
            title="Resume PDF"
            width="400px"
            height="500px"
            src="/assets/images/LovelyResume.pdf"
            >
                This browser does not support PDFs. Please download.
            </iframe>
        </div>
    )
}

export default Resume;