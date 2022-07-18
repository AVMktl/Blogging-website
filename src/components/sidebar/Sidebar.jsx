import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://th.bing.com/th/id/R.7bbfc6eb592cf82d4fb0ca9cc343335d?rik=iucwKo8kWdm0FA&riu=http%3a%2f%2fwww.sentinigroup.com%2fwp-content%2fuploads%2f2019%2f08%2fabout-us.png&ehk=ir7BmwuV9cIFS%2bQqhJyzRhpMng6Kns%2bWMJQLWXCsqYo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum numquam
          quam expedita placeat quas atque distinctio inventore! Sit incidunt
          veniaCorrupti repellat facere, deleniti!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Fashion</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
