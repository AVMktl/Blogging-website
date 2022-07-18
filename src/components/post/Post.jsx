import React from 'react'
import "./post.css"

const Post = () => {
  return (
    <div className='post'>
        <img className='postImg' src="https://cdn.wallpapersafari.com/24/13/Q6bneG.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>Lorem ipsum dolor sit amet.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit deserunt totam, incidunt est quia aliquid magni minima, debitis inventore tempora aut,  non eaque obcaecati labore provident illo sit ullam! Officiis, reiciendis ullam? Illo, iste animi est consequuntur expedita assumenda! non eaque obcaecati labore provident illo sit ullam! Officiis, reiciendis ullam? Illo, iste animi est consequuntur expedita assumenda!</p>
    </div>
  )
}

export default Post