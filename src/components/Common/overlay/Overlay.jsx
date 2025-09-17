import React, { useState } from "react";
import { useEffect } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { ErrorBtn } from "./Overlay.style";

const Overlay = (props) => {
  const [show, setShow] = useState(false);
  const renderTooltip = (prop) => (
    <Popover id="button-tooltip" body {...prop}>
      {props.children}
    </Popover>
  );
  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);
  return (
    <OverlayTrigger
      placement="top"
      show={show}
      //   delay={{ show: 100, hide: 400 }}
      overlay={renderTooltip}
      onToggle={() => setShow(!show)}
    >
      <ErrorBtn>!</ErrorBtn>
    </OverlayTrigger>
  );
};

export default Overlay;
