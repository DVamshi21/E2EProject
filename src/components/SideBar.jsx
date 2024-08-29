import React, { useState } from 'react'
import { FaCommentAlt, FaRegChartBar, FaShoppingBag, FaUserAlt,FaThList,FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './SideBar.css';
import Header from './Header.jsx';

const Sidebar =  ({children}) => {
    const [isOpen, setIsopen] = useState(false);
    const toggle = () => {
        setIsopen(!isOpen)
    }

    const menuItem = [
       
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comments",
            name:"Comments",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        },
    ]

    return (
        <div className='container'>
            <Header/>
            <div style={{ width: isOpen ? "240px" : "50px" }} className="sidebar">
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ marginLeft: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            <div className="bars">
                    <FaBars onClick={toggle} />
            </div>
                
            </div>
            
            <main>{children}</main>
            

        </div>
        
    );
};

export default Sidebar;
