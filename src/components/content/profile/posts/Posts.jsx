import React from "react";
import Post from "./post/Post";
import postsStyle from "./PostStyle.module.css"
import NewPost from "./newPost/NewPost"

const Posts = () => {

    let message1 = "bla-bla1"
    let message2 = "bla-bla2"

    return (
        <div className={postsStyle.posts}>
            <div>
                <NewPost/>
            </div>
            <div>
                <Post text={message1}/>
                <Post text={message2}/>
            </div>
        </div>
    );
}

export default Posts;