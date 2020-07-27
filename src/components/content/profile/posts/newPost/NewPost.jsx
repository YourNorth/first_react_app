import React from "react";
import newPostStyle from "./NewPost.module.css"

const NewPost = () => {
    return (
        <div className={newPostStyle.newPost}>
            <input type="textarea"/>
            <input type="submit" value="post"/>
        </div>
    );
}

export default NewPost;