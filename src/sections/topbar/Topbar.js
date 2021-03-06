import React from 'react';
import './topbar.scss';

function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#area01" className="logo"> </a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen)}}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
              </div>
            </div>    
        </div>
    )
}

export default Topbar
