import "./topbar.css"

const Topbar = () => {
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src="https://naturalpod.com/wp-content/uploads/2016/02/Salt-Spring-Dina-Ottoni-Battistessa.jpg" alt="" />
            <i className="topSeachIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar