"use client";

import BlogPost from "../../components/BlogPost";
import {blogData} from "../../mock/blogData";
import Breadcrumbs from "../../components/Breadcrumbs"; 

export default function ContrabandoBlogPost( { params } ) {
  const { slug } = params;
  const postData = blogData.find(post => post.slug === slug);
  return (
    <main className="min-h-screen bg-white">  
      <Breadcrumbs />
      <BlogPost {...postData} />
    </main>
  ); 
} 