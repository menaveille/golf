import React from "react";
import "./BlogCard.css";


import { blogSection } from "../../portfolio";
import { Fade } from "react-reveal";



export default function BlogCard({ blog }) {
  return (
    <div>
      <div class="blog-container">
        <a class="blog-card"  href={blog.url} target="_blank" rel="noopener noreferrer"> 
			
		  <h3 className="blog-title">{blog.title}</h3>
          <p class="small">{blog.description}</p>
          <div class="go-corner" >
          <div class="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
