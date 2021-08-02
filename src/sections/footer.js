import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from 'react-share';
import {
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';

const Footer = () => {
  	const urlShare = 'https://nascis.fr'

    return (<div id="Footer">
    	<FacebookShareButton url={urlShare}><FacebookIcon size={32}/></FacebookShareButton>
    	<LinkedinShareButton url={urlShare}><LinkedinIcon size={32}/></LinkedinShareButton>
		<WhatsappShareButton url={urlShare}><WhatsappIcon size={32}/></WhatsappShareButton>
		<EmailShareButton url={urlShare}><EmailIcon size={32}/></EmailShareButton>
    	Nascis - {new Date().getFullYear()} - contact (at) nascis.fr
    </div>)
};

export default Footer;
