import React from 'react';
import Facebook from '../../assets/Social/Facebook.svg';
import Instagram from '../../assets/Social/Instagram.svg';
import LinkedIn from '../../assets/Social/LinkedIn.svg';
import Telegram from '../../assets/Social/Telegram.svg';
import Twitter from '../../assets/Social/X(Twitter).svg';
import './SocialLink.css';

const SocialLink = () => {
  return (
    <div className="d-flex gap-3 SocialLink">
      <a href="#"><img src={Facebook}/></a>
      <a href="#"><img src={LinkedIn}/></a>
      <a href="#"><img src={Telegram}/></a>
      <a href="#"><img src={Instagram}/></a>
      <a href="#"><img src={Twitter}/></a>
    </div>
  );
};

export default SocialLink;