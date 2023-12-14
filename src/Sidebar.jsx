import React from 'react'
import {BsApp, BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside
            id="sidebar"
            className={openSidebarToggle ? "sidebar-responsive" : ""}
            style={{ backgroundImage: `url('../images/sun-tornado.svg')` }}
        >
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    Super Admin Dashboard
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item active'>
                    <a href="">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon' /> Master Admin Management
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGrid3X3GapFill className='icon' /> UI and Components
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsApp className='icon' /> Apps and Widgets
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsListCheck className='icon' /> E-Commerce
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' /> System Settings
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
