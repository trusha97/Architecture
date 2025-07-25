import React from 'react';
import './VipCustomer.css'; // Import the CSS file
import { motion } from "framer-motion"

import {
  arciteh,
  creativebuildurs,
  gactur,
  modern,
  thedesign,
  thespacegactur,
} from '../../utils/images';

const VipCustomer = () => {
  return (
    <div className='vip-customer-main'>
      <div className='vip-customer'>
        <div className='vip-customer-our'>
          <h2>
            Our Website <span>75000+</span> VIP Customer
          </h2>
        </div>
        <div className='vip-website-main'>
          <div className='vip-inner-website'>
            <a href="#"><img src={modern} alt="modern logo" className="vip-logo" /></a>
            <a href="#"><img src={gactur} alt="gactur logo" className="vip-logo" /></a>
            <a href="#"><img src={arciteh} alt="arciteh logo" className="vip-logo" /></a>
            <a href="#"><img src={creativebuildurs} alt="creativebuildurs logo" className="vip-logo" /></a>
            <a href="#"><img src={thedesign} alt="thedesign logo" className="vip-logo" /></a>
            <a href="#"><img src={thespacegactur} alt="thespacegactur logo" className="vip-logo" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipCustomer;
