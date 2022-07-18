import React from 'react'
import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar' 

const Setting = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form action="" className="settingsForm">
            <label className='settingsProfileHeading'>Your Profile</label>
            <div className='settingsPP'>
              <img src="https://cdn.wallpapersafari.com/24/13/Q6bneG.jpg" alt="" />
              <label htmlFor="fileInput">
                <i className='settingsPPIcon far fa-user-circle'></i>
              </label>
              <input type="file" id='fileInput' style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder='Lakshya'/>
            <label>Email</label>
            <input type="email" placeholder='lakshya@gmail.com'/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Setting