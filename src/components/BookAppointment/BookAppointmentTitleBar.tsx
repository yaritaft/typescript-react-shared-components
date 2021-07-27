import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookAppointmentTitleBar.module.scss";

import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

interface Properties {
  cancelURL: string;
}

export default function BookAppointmentTitleBar(props: Properties) {
  const { t } = useTranslation();

  return (
    <div className="row-book-appointment-title">
      <div className="row-book-appointment-title-row-left">
        {t("bookAppointment")}
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
