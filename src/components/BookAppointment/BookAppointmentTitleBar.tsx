import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookAppointmentTitleBar.module.scss";
import i18n from "../../../i18n"

import { Button } from "@material-ui/core";
import { I18nextProvider, useTranslation } from "react-i18next";

interface Properties {
  cancelURL: string;
}

export default function BookAppointmentTitleBar(props: Properties) {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  );
}
