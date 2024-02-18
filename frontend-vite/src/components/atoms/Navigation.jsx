
import React from 'react'
import logo from '../../assets/logo.png';
import menu from '../../data/menu';
import Menu from './Menu';



export default function Navigation() {
    return (
        <div>
            <nav className="navbar  is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={logo} width="112" height="28" />
                    </a>    

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu">
                    <Menu menu={menu}/>
                </div>

                <div className="navbar-menu">
                    

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Enlist</strong>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
