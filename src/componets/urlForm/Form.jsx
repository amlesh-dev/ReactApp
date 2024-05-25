import { useState } from "react";
import style from "./index.module.scss";

const Form = () => {
  const [longURL, setLongURL] = useState();
  const handleClick = () => {
    console.log("longURL", longURL);
  };
  return (
    <>
      <div className={style.firstWrap}>
        <h3>Paste the URL to be shortened</h3>
      </div>
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
      <div className={style.textWrap}>
        <div>
          <h5>
            ShortURL is a free tool to shorten URLs and generate short links URL
          </h5>
          <h5>
            shortener allows to create a shortened link making it easy to share
          </h5>
        </div>
      </div>
    </>
  );
};
export default Form;
