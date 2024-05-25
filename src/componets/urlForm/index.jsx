import { Box } from "@mui/material";
import style from "./index.module.scss";
import Form from "./Form";

const UrlForm = () => {
  return (
    <>
      <div className={style.boxWrapper}>
        <Box className={style.BoxStyle}>
          <Form />
        </Box>
      </div>
    </>
  );
};
export default UrlForm;
