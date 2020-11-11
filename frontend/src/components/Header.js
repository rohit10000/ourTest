import React, {useState} from "react";
import "./Header.css";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {useHistory} from "react-router-dom";
import {DropdownMenu, DropdownToggle, Dropdown, DropdownItem} from "reactstrap";
import {baseUrl} from "../shared/config";

function Header({user, userLoading}){

    const history = useHistory();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    return (
        <div className={"navbar__container"}>
            <Navbar className="header fixed-top" expand="md" variant={"dark"}>
                <Navbar.Brand href={"/home"}>
                    <img className="header__logo"
                         src={require("../images/logo.png")}
                         alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={"navbar-light"}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto header__button__group">
                        <Nav.Link href="/">
                            <span className="header__option">Home</span>
                        </Nav.Link>
                        <Nav.Link href="/about">
                            <span className="header__option">About</span>
                        </Nav.Link>
                        <Nav.Link href="/blogs">
                            <span className="header__option">Blogs</span>
                        </Nav.Link>
                        <Nav.Link href="/contact">
                            <span className="header__option">Contact</span>
                        </Nav.Link>
                    </Nav>
                    <div className={"header__auth__button"}>
                        <div style={{flex:1}}>
                        </div>
                        {
                            user.authorizedUserDetail ? (
                                <div className={"header__login"}>
                                    <div className={"header__auth__avatar"}>

                                        <img src={
                                            user.authorizedUserDetail.googleId ?
                                                (user.authorizedUserDetail.imageUrl):
                                                (baseUrl+user.authorizedUserDetail.imageUrl)

                                        }
                                             className={"header__auth__avatar__image"} alt={"Your Avatar"}/>
                                        <div className="dropdown-content">
                                            <a style={{color: "white"}} onClick={() => {history.push('/logs')}}>Your Logs</a>
                                            <a style={{color: "white"}} onClick={() => userLoading()}>Logout</a>
                                        </div>
                                    </div>
                                </div>
                            ):(
                                <div className={"header__login"}>
                                    <a style={{color: "white"}} onClick={()=>{history.push('/login')}}>Login</a>
                                    <MeetingRoomIcon style={{color: "white", fontSize:"x-large"}}/>
                                </div>
                            )
                        }

                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>


    )
}
export default Header;
