import React, { useState, useEffect, useContext } from "react";
import pic1 from "../../assets/img/article/h.png";
import {
  Mask,
  Back,
  Contetnt,
  Detalis,
  Cudets,
  Namedore,
  MOshakhsat,
  Esmdore,
  Grid,
  HoldHeader,
  HoldDtail,
  Like,
  Matn,
  Comments,
} from "./article.style";
import { useParams } from "react-router-dom";
import NewsArticleComp from "../../components/NewsArticleComp/NewsArticleComp";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { GetTopArticle } from "../../core/servises/api/getTopArticle";
import { GetNewsById } from "../../core/servises/api/getNewsById";
import Loading2 from "../../components/Loading2/Loading2";

import { GetAllComment } from "../../core/servises/api/getAllComment";
import Comment from "../../components/Common/Comment/Comment";
import SendCommentComp from "../../components/Common/sendCommentComp/sendCommentComp";

const Article = () => {
  const params = useParams();
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState([]);
  const [comment, setComment] = useState([]);
  const [load, setLoad] = useState(false);

  const GetNewById = async () => {
    const get = await GetNewsById(params.id);
    setNews(get);
  };
  const GetArticles = async () => {
    setLoad(true);
    setArticle(await GetTopArticle());
    setLoad(false);
  };
  const GetComment = async () => {
    const get = await GetAllComment();
    setComment(get);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    GetNewById();
    GetArticles();
    GetComment();
  }, [params.id]);

  const FilterComment = comment?.filter(
    (val) => val.postId == params.id && val.verified
  );

  return (
    <>
      <Back
        src={news.image?.length > 20 ? news.image : pic1}
        alt={news.title}
      />
      <Mask></Mask>
      <HoldHeader>
        <HoldDtail>
          <Esmdore>{news.title}</Esmdore>
          <Grid>{news.category == "article" ? "مقاله" : "خبر"}#</Grid>
          <Like>
            <AiFillLike /> <AiFillDislike />
          </Like>
        </HoldDtail>
      </HoldHeader>

      <Contetnt>
        <Detalis>
          <Tabs
            defaultActiveKey="Desc"
            id="justify-tab-example"
            className="mb-3"
            justify
            dir="rtl"
          >
            <Tab tabClassName="tozih" eventKey="Desc" title="توضیحات">
              <Cudets>{news.text}</Cudets>
            </Tab>
            <Tab tabClassName="tozih" eventKey="comment" title="نظرات">
              <Comments>
                {FilterComment?.length > 0 ? (
                  FilterComment.map((coment) => (
                    <Comment
                      key={coment._id}
                      date={coment.createDate}
                      username={coment.username}
                      comment={coment.comment}
                      answer={coment.answer}
                      id={coment._id}
                      handleComment={GetComment}
                    />
                  ))
                ) : (
                  <Matn>موردی یافت نشد</Matn>
                )}
              </Comments>
              <SendCommentComp id={params.id} />
            </Tab>
          </Tabs>
        </Detalis>

        <MOshakhsat>
          <Namedore> مقالات پیشنهادی </Namedore>
          {load ? (
            <Loading2 />
          ) : article.length > 0 ? (
            article
              .map((artic) => (
                <NewsArticleComp
                  key={artic._id}
                  width="100%"
                  TopicType={artic.category === "article" ? "مقالات" : "اخبار"}
                  _id={artic._id}
                  title={artic.title}
                  pic={artic.image}
                />
              ))
              .slice(0, 3)
          ) : (
            <p>موردی یافت نشد</p>
          )}
        </MOshakhsat>
      </Contetnt>
    </>
  );
};

export default Article;
