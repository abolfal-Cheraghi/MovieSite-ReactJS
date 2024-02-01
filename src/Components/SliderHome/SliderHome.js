import React, { memo, useEffect } from "react";
import "./SliderHome.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import { CiMicrophoneOn } from "react-icons/ci";
import { Container } from "react-bootstrap";
import { PiPlayCircleThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

 function SliderHome() {

   useEffect(() => {
     Aos.init();
   });
  return (
    <div className="con-slider-home">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        effect={"fade"}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://presite.ir/Film/wp-content/uploads/2023/04/film-poster-min.jpg"
            alt=""
          />
          <Container>
            <div className="content">
              <div className="info-slide" data-aos="fade-left">
                <div>
                  <h2 className="titel-slider fs-3 lalezar">
                    فیلم از گور برخواسته
                  </h2>
                  <div className="imdb-box">IMDB :</div>
                  <div className="language-movie-box">
                    <span>
                      <CiMicrophoneOn size="34px" />
                      دوبله فارسی
                    </span>
                  </div>
                </div>
                <p className="desc-slider">
                  داستان فیلم درباره شکارچی پوستی به نام هیو گلس (لئوناردو
                  دیکاپریو) است که در حین شکار مورد حمله ی یک خرس قهوه ای قرار
                  گرفته و دو مرد که در این شکار همراه او بودند، وسایلش را دزدیده
                  و او را نیمه جان رها می کنند؛ او جان سالم به در می‌برد و ۳۵۰
                  مایل را در طبیعت وحشی می پیماید تا از کسانی که به او خی...
                </p>
              </div>

              <div className="box-show">
                <Link to="/" className="nav-link ">
                  <PiPlayCircleThin size="180px" />
                  <div className="link-slider">
                    دانلود و مشاهده <IoIosArrowBack />
                  </div>
                </Link>
              </div>
            </div>
          </Container>
          <div className="overlay-to-slide"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://presite.ir/Film/wp-content/uploads/2023/04/avatr-min.png"
            alt=""
          />
          <Container>
            <div className="content" data-aos="fade-left">
              <div className="info-slide">
                <div>
                  <h2 className="titel-slider fs-3 lalezar">
                    فیلم آوارتار   
                  </h2>
                  <div className="imdb-box">IMDB :</div>
                  <div className="language-movie-box">
                    <span>
                      <CiMicrophoneOn size="34px" /> دوبله فارسی
                    </span>
                  </div>
                </div>
                <p className="desc-slider">
                  در فیلم آواتار 2 : جیک سالی با خانواده جدید خود که در سیاره
                  پاندورا تشکیل شده اند، زندگی می کند. اما هنگامی که یک تهدید
                  آشنا که برای پایان دادن به آنچه قبلاً شروع شده بود، بازمی
                  گردد، جیک باید با نیتیری و ارتش نژاد ناوی برای محافظت از سیاره
                  خود، همکاری کند.
                </p>
              </div>

              <div className="box-show">
                <Link to="/" className="nav-link ">
                  <PiPlayCircleThin size="180px" />
                  <div className="link-slider">
                    دانلود و مشاهده <IoIosArrowBack />
                  </div>
                </Link>
              </div>
            </div>
          </Container>
          <div className="overlay-to-slide"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://presite.ir/Film/wp-content/uploads/2023/04/cold-min.jpg"
            alt=""
          />
          <Container>
            <div className="content" data-aos="fade-left">
              <div className="info-slide">
                <div>
                  <h2 className="titel-slider fs-3 lalezar">سریال خون سرد</h2>
                  <div className="imdb-box">IMDB :</div>
                  <div className="language-movie-box">
                    <span>
                      <CiMicrophoneOn size="34px" /> فارسی
                    </span>
                  </div>
                </div>
                <p className="desc-slider">
                  سرگرد امیرعلی طلوعی (شهرام حقیقت‌دوست) در حال پیگیری پرونده
                  گروهی از قاچاقچیان اعضای بدن است که به اسم امیر شهسواری
                  (امیررضا دلاوری) می‌رسد و از دوستش دکتر کسری کیا (امیر آقایی)
                  که در پزشکی قانونی کار می‌کند کمک می‌گیرد، اما دکتر کیا روش
                  خاص خود را برای برخورد با جنایت‌کاران دارد…
                </p>
              </div>

              <div className="box-show">
                <Link to="/" className="nav-link ">
                  <PiPlayCircleThin size="180px" />
                  <div className="link-slider">
                    دانلود و مشاهده <IoIosArrowBack />
                  </div>
                </Link>
              </div>
            </div>
          </Container>
          <div className="overlay-to-slide"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default memo(SliderHome);
