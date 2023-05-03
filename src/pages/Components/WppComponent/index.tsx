import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

import "./styles.css"

const WppComponent = () => (
  <OverlayTrigger
    placement="left"
    overlay={<Tooltip>Precisando de ajuda?</Tooltip>}
  >
    <a
      href="https://api.whatsapp.com/send?phone=5518996289341"
      target="_blank"
      className="icon-wpp-button"
      rel="noreferrer"
    >
      <FaWhatsapp className="wpp-icon" />
    </a>
  </OverlayTrigger>

);

export default WppComponent;