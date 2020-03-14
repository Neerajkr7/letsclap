/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share'
import './styles.css'
const SocialIcons = (props) => {
  return (
    <div className="row social-wrapper">
      <div className="col-md-2 offset-md-1 col">
        <FacebookShareButton quote="Facebook" hashtag="letsClap" url={`http://letsclap.now.sh/${props.url}`} >
          <FacebookIcon />
        </FacebookShareButton>
      </div>
      <div className="col-md-2 offset-md-1 col">
        <TwitterShareButton url={`http://letsclap.now.sh/${props.url}`} >
          <TwitterIcon />
        </TwitterShareButton>
      </div>
      <div className="col-md-2 offset-md-1 col">
        <WhatsappShareButton url={`http://letsclap.now.sh/${props.url}`} >
          <WhatsappIcon />
        </WhatsappShareButton>
      </div>
      <div className="col-md-2 offset-md-1 col">
        <LinkedinShareButton url={`http://letsclap.now.sh/${props.url}`} >
          <LinkedinIcon />
        </LinkedinShareButton>
      </div>
    </div>
  )
}


export default SocialIcons