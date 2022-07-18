import React from 'react'
import "./write.css"

const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg' src="https://cdn.wallpapersafari.com/24/13/Q6bneG.jpg" alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className='writeIcon fas fa-plus'></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                
            </div>
            <div className="writeFormGroup">
                <textarea className='writeInput writeText' type="text" placeholder='Tell your story...' cols="30" rows="10"></textarea>
            </div>
            <button className='writeSubmit'>PUBLISH</button>
        </form>
    </div>
  )
}

export default Write