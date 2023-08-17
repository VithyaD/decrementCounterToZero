import React, { useEffect, useRef, useState } from "react";
import "./DecrementCounter.css";

export default function DecrementCounter() {
  const [input, setInput] = useState();
  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(false);
  const [enable, setEnable] = useState(false);
  let intervalId = useRef();

  const handleChange = (e) => {
    setEnable(true);
    setInput(e.target.value);
    setTimer(e.target.value);
  };

  useEffect(() => {
    if (active) {
      intervalId.current = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      if (timer === 0) {
        setEnable(false);
        clearInterval(intervalId.current);
        setActive(!active);
      }
    } else {
      clearInterval(intervalId.current);
    }
    return () => {
      if (intervalId.current != 0) clearInterval(intervalId.current);
    };
  }, [active, timer]);

  return (
    <div className="DecrementCounter">
      <div id="display-timer">
        <strong>{timer}</strong>
      </div>
      <input
        type="number"
        className="form-control"
        value={input}
        placeholder="Enter a number"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <div className="form-group row">
        <div className="col-sm-10">
          <button
            type="button"
            className={`btn btn-primary btn-${active ? `stop` : `start`} ${
              !enable ? `disabled` : ``
            }`}
            id="button"
            onClick={() => setActive(!active)}
          >
            {active ? `Stop` : `Start`}
          </button>
        </div>
      </div>
    </div>
  );
}
