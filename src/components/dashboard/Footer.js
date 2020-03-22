import React from "react";
import Logo from "../../assets/images/loguna.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<div className='footer-wrapper'>
			<div className='footer-container'>
				<div className='footer-content'>
					<div className='social-media'>
						<Link to=''>
							<FaFacebookF size={28} className='facebook-icon' />
						</Link>
						<Link to='/'>
							<FaInstagram size={28} className='instagram-icon' />
						</Link>
						<Link to='/'>
							<FaTwitter size={28} className='twitter-icon' />
						</Link>
					</div>
					<div>
						<p>© 2020 All Rights Reserved</p>
					</div>
					<div>
						<img className='Logo' src={Logo} alt='logo' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
