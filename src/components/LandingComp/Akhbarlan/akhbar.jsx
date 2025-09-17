import React, { useState, useEffect } from "react";
import {
  Matn,
  Bordr,
  Holder,
  Left,
  Right,
  Slider,
  SliderMatn,
  Text,
} from "./akhbar.style";
import Bttn from "../../Common/Button2/Bttn";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import { GetTopNews } from "../../../core/servises/api/getTopNews";
import Loading2 from "../../Loading2/Loading2";

const Akhbar = () => {
  const [Newses, setNews] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const GetNewses = async () => {
      setLoad(true);
      setNews(await GetTopNews());
      setLoad(false);
    };
    GetNewses();
  }, []);

  return (
    <Holder>
      <Right>
        <Bordr>
          <h2> اخبار و مقالات </h2>
          <Matn>
            دسترسی به جدید ترین و مفیدترین مقالات تالیف شده توسط معتبرترین
            روزنامه ها و رسانه ها در دسته بندی های گوناگون همچون طراحی ، هنر
            برنامه نویسی ،اقتصاد، فلسفه، فیزیک، شیمی و ...
          </Matn>
          <Link to="/articleAndNews">
            <Bttn
              name="مشاهده مقالات"
              width="35%"
              height="60px"
              customStyle="position:absolute;right:50%;top:370px;"
            />
          </Link>
        </Bordr>
      </Right>
      <Left>
        <Slider>
          {load ? (
            <Loading2 />
          ) : (
            <Carousel fade indicators={false}>
              {Newses.length > 0 ? (
                Newses.map((news) => (
                  <Carousel.Item key={news._id}>
                    <img
                      className="d-block w-100"
                      src={news.image}
                      alt={news.title}
                    />
                    <SliderMatn>
                      {news.title.length <= 20
                        ? news.title
                        : news.title.slice(0, 20) + "..."}
                    </SliderMatn>
                  </Carousel.Item>
                ))
              ) : (
                <Text>موردی یافت نشد</Text>
              )}
            </Carousel>
          )}
        </Slider>
      </Left>
    </Holder>
  );
};

export default Akhbar;
