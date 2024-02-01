import React, { useState } from "react";
import "./FilterBox.css";
import { Col, Row } from "react-bootstrap";
export default function FilterBox() {
  const changed = (e)=> {
    console.log(e.target.value.se);
  }

  return (
    <div className="conteiner-filter-box">
      <Row className="box-filter d.flex align-items-center justify-content-between">
        <Col className="col-12 col-md-12 col-lg-2">
          <div className="title-section">
            <h4 className="fs-8">جستجوی پیشرفته</h4>
          </div>
        </Col>
        <Col className="col-12 col-md-12 col-lg-7">
          <div className="wrapper-select-box">
            <div className="item-select-box">
              <select
                name="drinks"
                required
                onChange={changed}
                id="language-select"
                onfocus="this.size=6;"
                onblur="this.size=0;"
        
              >
                <option value="" disabled selected hidden>
                  ژانر
                </option>
                <option value="coffee">اکشن</option>
                <option value="tea">ترسناک</option>
                <option value="milk">جنایی</option>
                <option value="milk">درام</option>
                <option value="milk">جنایی</option>
                <option value="milk">کمدی</option>
                <option value="milk">هیحان انگیز</option>
              </select>
            </div>
            <div className="item-select-box">
              <select name="drinks" required>
                <option value="" disabled selected hidden>
                  کارگردان
                </option>
                <option value="coffee">ابراهیم ایرج زاده</option>
                <option value="tea">جاناتان مک فرسون</option>
                <option value="milk">جیمز کامرون</option>
                <option value="milk">سهیل احمدی</option>
                <option value="milk">سید مسعود اطیایی</option>
                <option value="milk">سیروس مقدم</option>
                <option value="milk">شین هاگدورن</option>
                <option value="milk">فرناندو آرابال</option>
                <option value="milk">کیریستوفر نولان </option>
                <option value="milk">مهران مدیری</option>
              </select>
            </div>
            <div className="item-select-box">
              <select name="drinks" required>
                <option value="" disabled selected hidden>
                  بازیگران
                </option>
                <option value="coffee">Coffee</option>
                <option value="tea">Tea</option>
                <option value="milk">Milk</option>
              </select>
            </div>
            <div className="item-select-box">
              <select name="drinks" required>
                <option value="" disabled selected hidden>
                  کشور
                </option>
                <option value="coffee">آلمان</option>
                <option value="tea">آمریکا</option>
                <option value="milk">انگلستان</option>
                <option value="milk">ایران</option>
                <option value="milk">فرانسه</option>
                <option value="milk">هند</option>
              </select>
            </div>
            <div className="item-select-box">
              <select name="drinks" required>
                <option value="" disabled selected hidden>
                  ترجمه
                </option>
                <option value="coffee">دوبله فارسی</option>
                <option value="tea">زیرنویس فارسی</option>
                <option value="milk">Milk</option>
              </select>
            </div>
            <div className="item-select-box">
              <select name="drinks" required>
                <option value="" disabled selected hidden>
                  نوع
                </option>
                <option value="coffee">انیمیشن</option>
                <option value="tea">سریال ایرانی</option>
                <option value="milk">سریال خارجی</option>
                <option value="milk">فیلم ایرانی</option>
                <option value="milk">فیلم خارجی</option>
              </select>
            </div>
          </div>
        </Col>
        <Col className="col-12 col-md-12 col-lg-2">
          <button className="btn-1">اعمال فیلتر</button>
        </Col>
      </Row>
    </div>
  );
}
