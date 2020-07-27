import React from "react";
import postStyle from "./Post.module.css"

const Post = (props) =>{
    return (
        <div className={postStyle.post}>
            {props.text}
        </div>
    );
}

export default Post;