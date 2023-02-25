// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaLinux,
  FaAws
  
} from "react-icons/fa";
import { SiJavascript, SiSpringboot, SiJava, SiPython,SiC } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
// import Log from "./images/linkedin.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "swagat77";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = <h4>"Hi, I'm Swagat Pandak, a software engineering student at the University of Texas at Arlington. I have a strong background in programming, with expertise in Java, Python, JavaScript, C, HTML, CSS, React, Node.js, and Spring Boot. In addition to my technical skills, I have experience teaching and mentoring students, helping them improve their programming and SQL abilities. I'm also passionate about math and have taught Calculus III in the past."</h4>;

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <SiSpringboot className="display-4" />,
    name: "Springboot",
  },
  {
    id: 7,
    skill: <SiJava className="display-4" />,
    name: "Java",
  },
  {
    id: 8,
    skill: <SiPython className="display-4" />,
    name: "Python",
  },
  {
    id: 9,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <FaLinux className="display-4" />,
    name: "Linux",
  },
  {
    id: 11,
    skill: <SiC className="display-4" />,
    name: "C",
  },
  {
  id: 12,
  skill: <FaAws className="display-4" />,
  name: "AWS",
}
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1Ovz6pNNe3XwhBXpleTWr13PaRIjyI1lE/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Movie-review", "CloudCast", "Serve Me System", "Car-Rental-System", "Java-And-Donut-Express"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "Movie-review",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mnqydrko";
