import React from "react";
import Title from "../Title/Title";
import "./FormDidgah.css";
import { Form } from "react-bootstrap";
export default function FormDidgah() {
  return (
    <>
      <Title firstT="نقد و بررسی" secT="از دیدگاه بینندگان" />
      <hr />
      <div className="form-didgah">
        <span className="title-form">دیدگاهتان را بنویسید</span>
        <p className="desc-form">
          نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند
          *
        </p>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>دیدگاه *</Form.Label>
            <Form.Control as="textarea" rows={8} />
          </Form.Group>
          <div className="wrapper-inputs">
            <input type="text" placeholder="نام * " />
            <input type="text" placeholder="ایمیل *" />
            <input type="text" placeholder="وبگاه" />
          </div>
          <button className="btn-2 my-4">فرستادن دیدگاه</button>
        </Form>
        <hr />
      </div>
    </>
  );
}
