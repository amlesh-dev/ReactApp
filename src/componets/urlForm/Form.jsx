import { useState } from "react";
import style from "./index.module.scss";

const Form = () => {
  const [longURL, setLongURL] = useState();
  const handleClick = () => {
    console.log("longURL", longURL);
  };
  return (
    <>
      <h3>Paste the URL to be shortened</h3>
      <div className={style.inputButtonWrap}>
        <input
          className={style.inputfield}
          onChange={(e) => {
            setLongURL(e.target.value);
          }}
        />
        <button
          className={`${style.buttonfield} btn btn-primary`}
          onClick={() => {
            handleClick();
          }}
        >
          Shorten URL
        </button>
      </div>
    </>
  );
};
export default Form;
