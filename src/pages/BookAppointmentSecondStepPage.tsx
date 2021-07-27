import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookAppointmentSecondStepPage.module.scss";
import BookAppointmentTitleBar from "../components/BookAppointment/BookAppointmentTitleBar";
import BookAppointmentTaskBar from "../components/BookAppointment/BookAppointmentTaskBar";

interface Properties {
  cancelURL: string;
}

export default function BookAppointmentSecondStepPage(props: Properties) {
  return (
    <div>
      <BookAppointmentTitleBar cancelURL="" />
      <div className="separator"></div>
      <BookAppointmentTaskBar cancelURL="" />
      <div className="separator-radio"></div>
    </div>
  );
}
