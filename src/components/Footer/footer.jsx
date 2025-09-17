import React from "react";
import Bttn from "../Common/Button2/Bttn";
import {
  Footer1,
  Title,
  Tozih,
  Search,
  Holder1,
  Holder2,
  Top,
  HoldInput,
  Bottom,
  Hold,
  HoldImg,
  Mtn,
} from "./footer.style";
import {
  TbBrandTelegram,
  TbBrandWhatsapp,
  TbBrandYoutube,
  TbBrandInstagram,
} from "react-icons/tb";
import pict1 from "../../assets/img/footer/f1.png";
import pict2 from "../../assets/img/footer/f2.png";
import pict3 from "../../assets/img/footer/f3.png";

function footer() {
  return (
    <>
      <Footer1>
        <Top>
          <Holder1>
            <Title>درباره بامبو</Title>
            <Tozih>
              بامبو یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
              است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
              دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد
            </Tozih>
          </Holder1>
          <Holder2>
            <Title> خبر نامه</Title>
            <HoldInput>
              <Search type="text" placeholder="ایمیل خود را وارد کنید" />
              <Bttn
                height="45px"
                width="29%"
                backColor="#025763"
                customStyle="border-radius: 2px 0 0 2px;margin-right:0;"
                name="عضویت"
              />
            </HoldInput>
          </Holder2>
        </Top>

        <Bottom>
          <Hold className="contact">
            <Title>ارتباط با ما</Title>
            <Tozih>hadisehoseini6301 @gmail .com</Tozih>
            <Tozih className="iconFoo">
              <TbBrandInstagram />
              <TbBrandYoutube />
              <TbBrandWhatsapp />
              <TbBrandTelegram />
            </Tozih>
          </Hold>
          <Hold>
            <Title>همراه باشید</Title>
            <Tozih>سوالات رایج</Tozih>
            <Tozih>قوانین</Tozih>
            <Tozih>خدمات</Tozih>
          </Hold>
          <Holder2>
            <HoldImg>
              <img src={pict1} alt={pict1} />
            </HoldImg>
            <HoldImg>
              <img src={pict3} alt={pict3} />
            </HoldImg>
            <HoldImg>
              <img src={pict2} alt={pict2} />
            </HoldImg>
          </Holder2>
        </Bottom>
      </Footer1>
      <Mtn>
        کليه حقوق محصولات و محتوای اين سایت متعلق به بامبو می باشد و هر گونه کپی
        برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست
      </Mtn>
    </>
  );
}

export default footer;
