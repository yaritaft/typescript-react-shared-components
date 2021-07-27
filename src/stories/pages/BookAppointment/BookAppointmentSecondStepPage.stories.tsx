import React from "react";
import { I18nextProvider } from "react-i18next";
import BookAppointmentSecondStepPage from "../../../pages/BookAppointmentSecondStepPage";
import i18n from "../../../../i18n"

export default {
  component: BookAppointmentSecondStepPage,
  title: "Components/BookAppointmentSecondStepPage",
};

export const Primary: React.VFC<{}> = () => (
  <I18nextProvider i18n={i18n}>
    <BookAppointmentSecondStepPage cancelURL={"444"} />
  </I18nextProvider>
);
