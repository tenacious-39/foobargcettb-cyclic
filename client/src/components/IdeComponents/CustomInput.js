import React from "react";
import { classnames } from "./utils/general";
import "bootstrap/dist/css/bootstrap.css";
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';



const CustomInput = ({ customInput, setCustomInput }) => {
    return (
        <>
            <div className="container" style={{ display: "flex" }}>
                <h3>Custom input</h3>
                <button className="btn btn-light me-2 ms-auto"
                    onClick={() => { navigator.clipboard.writeText(customInput) }}
                ><ContentCopyRoundedIcon color="primary" /></button>
                <button className="btn btn-light me-2"
                    onClick={(e) => setCustomInput("")}
                ><RotateLeftRoundedIcon color="primary" /></button>

            </div>
            {" "}
            <textarea
                rows="7"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder={`Custom input`}
                className={classnames(
                    "container rounded bg-white"
                )}
            ></textarea>
        </>
    );
};

export default CustomInput;