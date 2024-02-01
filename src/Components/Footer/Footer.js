import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsVolumeUp } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { RiSettings4Line } from "react-icons/ri";

export default function Footer() {
  return (
    <footer>
      <Container>
        <hr />
        <Row className="">
          <Col className="col-12 col-md-12 col-lg-6 p-3">
            <img
              src="https://presite.ir/Film/wp-content/uploads/2023/04/logo.svg"
              alt="logo"
            />
            <p className="footer-info">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپگرها و
              متون متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
              شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
              می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
              علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در
              این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
              راهکارها، و شرایط سخت تایپ به پایان رسد.
            </p>
          </Col>
          <Col className="col-6 col-md-6 col-lg-3 p-3">
            <h3>دسترسی سریع</h3>
            <ul className="list-footer">
              <li>فیلم‌های برتر</li>
              <li>سریال ها</li>
              <li>دسته بندی ها</li>
              <li>خرید اشتراک</li>
              <li>همکاری</li>
              <li>هاستینگ</li>
            </ul>
          </Col>
          <Col className="col-6 col-md-6 col-lg-3 p-3">
            <h3>اطلاعات تماس</h3>
            <ul className="conrtact-list">
              <li>
                <IoIosArrowBack size="15px" />
                تهران ، خیابان طراحان وب، کوچه ریکت
              </li>
              <li>
                <IoIosArrowBack size="15px" />
                info@movie.com
              </li>
              <li>
                <IoIosArrowBack size="15px" />
                021-8254410
              </li>
            </ul>
            <hr />
            <button className="btn-1 order-movies-btn">
              درخواست فیلم <IoIosArrowBack size="15px" />
            </button>
          </Col>
        </Row>
        <hr />
        <div className="box-bottom-footer">
          <div className="items-box-footer">
            <MdOutlineSlowMotionVideo size="60px" />
            <div className="text-box-icon">
              <h6 className="c-pink fs-5">نرم افزارهای پلیر</h6>
              <span>مشاهده و دانلود</span>
            </div>
          </div>
          <div className="items-box-footer">
            <BiMessageSquareDetail size="60px" />
            <div className="text-box-icon">
              <h6 className="c-pink fs-5">مدیریت زیرنویس</h6>
              <span>مشاهده و دانلود</span>
            </div>
          </div>
          <div className="items-box-footer">
            <BsVolumeUp size="60px" />
            <div className="text-box-icon">
              <h6 className="c-pink fs-5">روش تنظیم صدا</h6>
              <span>شاهده آموزش ویدیویی</span>
            </div>
          </div>
          <div className="items-box-footer">
            <IoIosTimer size="60px" />
            <div className="text-box-icon">
              <h6 className="c-pink fs-5">آموزش دوبله</h6>
              <span>ورود و مشاهده</span>
            </div>
          </div>
          <div className="items-box-footer">
            <RiSettings4Line size="60px" />
            <div className="text-box-icon">
              <h6 className="c-pink fs-5">تنظیم پلیر</h6>
              <span>مشاهده آموزش تصویری</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="copy-right">
          <p>
            این وبسایت متعلق به گروه فیلمینو می باشد و تمام حقوق آن محفوظ است.
          </p>
        </div>
      </Container>
    </footer>
  );
}
