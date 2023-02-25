import React from "react";


import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
// import { FaGithub} from "react-icons/fa";
// import { FaLinkedin} from "react-icons/fa";
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { IoIosPaper} from 'react-icons/io';
const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;


export default function SocialLinks() {
 
  const { blog, html_url } = useSelector(selectData);

  return (
    <div className="">
<section className="intro-section" style={{ textAlign: "left" }}>
<h3>Swagat Pandak            <br></br>University of Texas at Arlington | Seeking Software Engineering internships</h3>
</section>

 
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Checkout my GitHub profile."
        className="link-icons"
        margin ="1rem"
      
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/swagat-pandak25/"
        aria-label="Check out my LinkedIn profile."
        className="link-icons"
      >
        <FaLinkedin />
      </a>
     
      <a
        href="https://drive.google.com/file/d/1Ovz6pNNe3XwhBXpleTWr13PaRIjyI1lE/view?usp=sharing"
        aria-label="Check out my Resume."
        className="link-icons"
      >
        <IoIosPaper />
      </a>


      {blog && (
        <a href={blog} aria-label="External link" className="link-icons">
          {Blog}
        </a>
      )}
    </StyledSocialLinks>
    </div>
  );
}