import React from "react";
import blogData from "../data/blogData.json"
import { Link } from 'react-router-dom';

export default function BlogListing() {

    const blogElems = blogData
        .filter((post) => post.published === "true")
        .map((post) => {
            return (
                <li className="list-unstyled my-3" key={post.id}>
                    <div>{post.publishedDate}</div>
                    <Link className="text-dark fw-bold" to={`/blog/${post.id}`}>{post.title}</Link>
                    {/* <div>{post.description}</div> */}
                </li>
            )
        })

    return (
        <div className="container">
            <ul className="list-unstyled">
                {blogElems}
            </ul>
        </div>
    )
}