import React, { Fragment } from "react";

const Weather = (props) => {
  return (
    <Fragment>
      <div className="container text-light">
        <div className="cards pt-4">
          <h1>{props.city}</h1>
          {props.temp_celsius ? (
            <h1 className="py-2">{props.temp_celsius}&deg;</h1>
          ) : null}
        </div>
        {minMaxTemp(props.temp_min, props.temp_max)}
        <h5 className="py-3">{props.description}</h5>
      </div>
    </Fragment>
  );
};

function minMaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}

export default Weather;
