import React from 'react'
import "./singlePost.css"

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className='singlePostImg' src="https://cdn.wallpapersafari.com/24/13/Q6bneG.jpg" alt="" />
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i class="singlePostIcon fa-solid fa-trash-can"></i>
                    <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Lakshya</b>
                </span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, reiciendis ea doloremque recusandae, voluptatum accusantium beatae ut possimus accusamus ab omnis sit excepturi laudantium voluptate maxime in nisi aut exercitationem nam laboriosam quod tempore mollitia itaque! Natus fugiat, in adipisci dolores incidunt quia porro fugit tempora vel. Nihil ad nobis soluta ea aspernatur ipsum esse quaerat velit, iste cumque culpa numquam vitae amet voluptatum deserunt. Vel quibusdam quidem debitis quos. Officiis aliquam, aspernatur rerum tenetur nulla id sunt, sed eligendi similique nemo possimus! Nam eveniet qui sapiente eligendi hic, dolore voluptas ipsa cumque adipisci id assumenda repellendus exercitationem labore ipsam!
                in adipisci dolores incidunt quia porro fugit tempora vel. Nihil ad nobis soluta ea aspernatur ipsum esse quaerat velit, iste cumque culpa numquam vitae amet voluptatum deserunt. Vel quibusdam quidem debitis quos. Officiis aliquam, aspernatur rerum tenetur nulla id sunt, sed eligendi similique nemo possimus! Nam eveniet qui sapiente eligendi hic, dolore voluptas ipsa cumque adipisci id assumenda repellendus exercitationem labore ipsam!
            </p>
        </div>
    </div>
  )
}

export default SinglePost