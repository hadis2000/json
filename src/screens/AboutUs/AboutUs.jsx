import React from "react";

import {
  Circle,
  HeaderMatn,
  HolderBody,
  HolderMap,
  HoldHeader,
  Items,
  Matn,
  Text,
} from "./AboutUs.style";

import HeadAx from "../../assets/img/aboutUs/about1_2.jpg";
import ax3 from "../../assets/img/aboutUs/1.jpg";
import ax4 from "../../assets/img/aboutUs/2.jpg";
import { Col, Row } from "react-bootstrap";

import { IoLocationOutline, IoLogoPinterest } from "react-icons/io5";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const AboutUs = () => {
  return (
    <>
      <HoldHeader>
        <img src={HeadAx} alt={HeadAx} />
      </HoldHeader>
      <HolderBody>
        <Text>
          <h3>چرا بامبو؟؟</h3>
          <p>
            آموزشگاه بامبو بیش از دو دهه پیش به عنوان مرکزی پیشرو در زمینه ارایه
            آموزش‌های تخصصی در حوزه فناوری اطلاعات، ارتباطات کار خود را آغاز
            کرده است. بامبو در حال حاضر با بهره‌گیری از اساتیدی مجرب، اتوماسیون
            آموزشی پیشرفته، دوره‌های تخصصی متعددی ، را برگزار می‌کند.
          </p>
        </Text>
        <HolderMap>
          <Row>
            <Col md={5}>
              <Row>
                <Col lg={6} style={{ padding: "50px 0" }}>
                  <Circle>
                    <IoLocationOutline className="aboutIco" />
                  </Circle>
                  <HeaderMatn> : آدرس</HeaderMatn>
                  <Matn>ساری بلوار خزر نرسیده به روزبهان</Matn>
                </Col>
                <Col lg={6} style={{ padding: "50px 0" }}>
                  <Circle>
                    <AiOutlineMail className="aboutIco" />
                  </Circle>
                  <HeaderMatn> : ایمیل</HeaderMatn>
                  <Matn>hadisehoseini6301@gmail.com</Matn>
                </Col>
              </Row>
              <Row>
                <Col lg={6} style={{ padding: "50px 0" }}>
                  <Circle>
                    <AiOutlinePhone className="aboutIco" />
                  </Circle>
                  <HeaderMatn> : شماره تماس</HeaderMatn>
                  <Matn>09111111111</Matn>
                </Col>
                <Col lg={6} style={{ padding: "50px 0" }}>
                  <HeaderMatn> ارتباط با ما </HeaderMatn>
                  <Matn>
                    راه های ارتباطی ما برای کمک به شما یا پیوستن به تیم
                  </Matn>
                  <Matn>
                    <AiOutlineFacebook className="MatnIco" />
                    <AiOutlineTwitter className="MatnIco" />
                    <AiOutlineInstagram className="MatnIco" />
                    <IoLogoPinterest className="MatnIco" />
                  </Matn>
                </Col>
              </Row>
            </Col>
            <Col md={7}>
              <MapContainer
                center={[36.59777495511621, 53.06460885282418]}
                zoom={16}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  position={[36.59777495511621, 53.06460885282418]}
                  icon={
                    new Icon({
                      iconUrl: markerIconPng,
                      iconSize: [25, 41],
                      iconAnchor: [12, 41],
                    })
                  }
                >
                  <Popup>آموزشگاه بامبو</Popup>
                </Marker>
              </MapContainer>
            </Col>
          </Row>
        </HolderMap>
      </HolderBody>
    </>
  );
};

export default AboutUs;
