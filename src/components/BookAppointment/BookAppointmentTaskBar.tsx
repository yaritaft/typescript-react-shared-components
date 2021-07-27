import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookAppointmentTaskBar.module.scss";

import { Button } from "@material-ui/core";

interface Properties {
  cancelURL: string;
}

enum Option {
  Details = "Details",
  Price = "Price",
  Time = "Time",
}

export default function BookAppointmentTaskBar(props: Properties) {
  const [selectedOption, setSelectedOption] = useState<Option>(Option.Details);
  const btnSelected = (option: Option) =>
    selectedOption === option ? "btn-selected" : "";
  const handleClick = (event: any) => {
    setSelectedOption(event.target.value);
  };
  return (
    // <div className="d-flex flex-row">
    //   <div className="p-2">
    //     <Button style={{ textTransform: "none" }}>
    //       <div className="text">{"Details"}</div>
    //     </Button>
    //   </div>
    //   <div className="p-2">
    //     <Button style={{ textTransform: "none" }}>
    //       <div className="text">{"Price"}</div>
    //     </Button>
    //   </div>
    //   <div className="p-2">
    //     <Button style={{ textTransform: "none" }}>
    //       <div className="text">{"Time"}</div>
    //     </Button>
    //   </div>
    // {/* </div> */}
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label
        className={`btn ${btnSelected(Option.Details)}`}
        onClick={handleClick}
      >
        {/* <label className={`btn ${btnSelected(Option.Details)}`} onClick={handleClick}> */}
        <input
          type="radio"
          className="radio-button"
          name="options"
          id={Option.Details}
          value={Option.Details}
          autoComplete="off"
        />
        {Option.Details}
      </label>
      <label
        className={`btn ${btnSelected(Option.Price)}`}
        onClick={handleClick}
      >
        <input
          className="radio-button"
          type="radio"
          name="options"
          id={Option.Price}
          value={Option.Price}
          autoComplete="off"
        />
        {Option.Price}
      </label>
      <label
        className={`btn ${btnSelected(Option.Time)}`}
        onClick={handleClick}
      >
        <input
          type="radio"
          className="radio-button"
          name="options"
          id={Option.Time}
          value={Option.Time}
          autoComplete="off"
        />
        {Option.Time}
      </label>
    </div>
  );
}
