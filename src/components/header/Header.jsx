import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>Read & Write</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src="https://th.bing.com/th/id/R.bc8244059dd28105b94f4356418fb7d9?rik=jQYQZADLatOotQ&riu=http%3a%2f%2fcrevisio.com%2fphotos%2f101-vOIDtN8rT%2fCrevisio-101-vOIDtN8rT.jpg&ehk=dbC1jCkm3Qya09ZFQnSdn6UV56WedTubDliS1%2f%2fsteI%3d&risl=&pid=ImgRaw&r=0" alt="" />
    </div>
  )
}

export default Header
