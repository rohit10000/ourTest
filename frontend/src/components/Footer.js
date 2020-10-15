import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

function Footer(){
    return(
        <div className="footer">
            <div className="footer__button">
                <Link to="/" className="footer__link">
                    <span className="footer__option">Home</span>
                </Link>
                <Link to="/about" className="footer__link">
                    <span className="footer__option">About</span>
                </Link>
                <Link to="/blogs" className="footer__link">
                    <span className="footer__option">Blogs</span>
                </Link>
                <Link to="/contact" className="footer__link">
                    <span className="footer__option">Contact</span>
                </Link>
            </div>
            <div className="footer__quote">
                <FormatQuoteIcon style={{fontWeight: "lighter", fontSize: "larger", color: "grey"}}/>
                <p> Don’t watch the clock.<br/> Do what it does. <br/>Keep going.</p>
            </div>

        </div>
    );
}
export default Footer;
