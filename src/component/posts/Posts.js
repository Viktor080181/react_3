import React from 'react';
import Post from '../post/Post.js';

class Posts extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = 
        {
            posts:props.posts
        }
    }
    render()
    {
        return(
            <div>
                {
                    this.state.posts.map
                      (
                        post =>
                        (
                            <Post key={post.id} title = {post.title} content={post.content}/>
                        )
                    )
                }
            </div>
        )
    }
}
export default Posts;