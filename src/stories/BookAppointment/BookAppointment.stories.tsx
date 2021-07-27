import React from "react";
import BookAppointmentTitleBar from "../../components/BookAppointment/BookAppointmentTitleBar";

export default {
  component: BookAppointmentTitleBar,
  title: "Components/BookAppointmentTitleBar",
};

export const Primary: React.VFC<{}> = () => (
  <BookAppointmentTitleBar cancelURL={"444"} />
);
