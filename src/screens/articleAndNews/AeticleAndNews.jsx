import React, { useState, useEffect } from "react";
import {
  Header,
  Holder,
  HolderOption,
  MenuHolder,
  Option,
  Text,
  ImageHeader,
  SelecPageSize,
  Count,
} from "./AeticleAndNews.style";
import NewsArticleComp from "../../components/NewsArticleComp/NewsArticleComp";
import PaginationStyle from "../../components/Common/pagination/pagination";
import { Paginate } from "../../core/utills/paginate";
import HeadAx from "../../assets/img/article/head.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "../../components/Common/Search/Search";

import { GetNews } from "../../core/servises/api/getNews";
import Loading from "../../components/Loading/Loading";

const ArticleAndNews = () => {
  const [Newses, setNews] = useState([]);
  const [TypeItems, setTypeItems] = useState([
    { category: "article", name: "مقالات" },
    { category: "news", name: "اخبار" },
  ]);
  const [seleted, setSeleted] = useState(TypeItems[0]);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setcurrentPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [searchNews, setSearchNews] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const GetNewses = async () => {
      setLoad(true);
      setNews(await GetNews());
      setLoad(false);
    };
    GetNewses();
  }, []);

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };
  const onSelect = (item) => {
    setcurrentPage(1);
    setSeleted(item);
  };
  const filtered = (
    seleted && seleted.category
      ? Newses.filter((m) => m.category === seleted.category)
      : Newses
  ).filter((val) => {
    if (searchNews == "") {
      return val;
    } else if (val.title.includes(searchNews)) {
      return val;
    }
  });
  const NewsItem = Paginate(filtered, currentPage, pageSize);
  return (
    <Holder>
      <ImageHeader src={HeadAx} alt={HeadAx} />
      {load ? (
        <Loading />
      ) : (
        <>
          <Container dir="rtl" className="mt-2" fluid style={{ width: "95%" }}>
            <Row>
              <Header>اخبار و مقالات</Header>
            </Row>
            <Row>
              <Col className="mt-2" sm={6}>
                <Search
                  onChange={(e) => setSearchNews(e.target.value)}
                ></Search>
              </Col>
              <Col sm={3}></Col>
              <Col className="mt-2" sm={3}></Col>
            </Row>
          </Container>

          <MenuHolder>
            {TypeItems.map((items) => (
              <Option
                key={items.category}
                onClick={() => onSelect(items)}
                className={items === seleted ? "select" : null}
              >
                {items.name}
              </Option>
            ))}
          </MenuHolder>
          <HolderOption>
            {NewsItem.length > 0 ? (
              NewsItem.map((news) => (
                <NewsArticleComp
                  key={news._id}
                  TopicType={news.category === "article" ? "مقالات" : "اخبار"}
                  _id={news._id}
                  title={news.title}
                  pic={news.image}
                />
              ))
            ) : (
              <Text>موردی یافت نشد</Text>
            )}
          </HolderOption>

          <Container
            className="mt-2"
            fluid
            style={{ textAlign: "center", width: "95%" }}
          >
            <Row>
              <Col className="mt-2" sm={4}>
                <SelecPageSize
                  onChange={(e) => {
                    setPageSize(e.target.value);
                    setcurrentPage(1);
                  }}
                >
                  <option value="4">4</option>
                  <option value="8">8</option>
                  <option value="16">16</option>
                </SelecPageSize>
              </Col>
              <Col className="mt-2" sm={4}>
                {NewsItem.length > 0 ? (
                  <PaginationStyle
                    itemsCount={filtered.length}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                  />
                ) : (
                  ""
                )}
              </Col>
              <Col className="mt-2" sm={4}>
                <Count>
                  <span>{filtered.length}</span> :تعداد
                </Count>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Holder>
  );
};

export default ArticleAndNews;
