import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookAppointmentSecondStep.module.scss";

import { Button } from "@material-ui/core";

interface Properties {
  cancelURL: string;
}

export default function BookAppointmentTitleBar(props: Properties) {
  return (
    <div className="row-book-appointment-title">
      <div className="row-book-appointment-title-row-left">
        Book Appointment
      </div>
      <div className="row-book-appointment-title-row-right">
        <Button
          style={{
            borderRadius: 16,
            backgroundColor: "#DAE0E6",
            color: "#000",
          }}
        >
          Cancel
        </Button>
      </div>
      <div className="row-book-appointment-title-row-right">
        <Button
          style={{
            borderRadius: 16,
            backgroundColor: "#0063FF",
            color: "#FFFFFF",
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
