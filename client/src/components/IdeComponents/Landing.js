import React, { useEffect, useState } from "react";

import CodeEditorWindow from "./CodeEditorWindow";
import "bootstrap/dist/css/bootstrap.css";
import LanguagesDropdown from "./LanguagesDropdown";
import ThemeDropdown from "./ThemeDropdown";

import axios from "axios";
import { classnames } from "./utils/general";
import { languageOptions } from "./constants/languageOptions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { defineTheme } from "./lib/defineTheme";
import useKeyPress from "./hooks/useKeyPress";
import FontSizeDropdown from "./FontSizeDropdown";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
// import OutputDetails from "./OutputDetails";

// mui icons
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';


function Landing() {
    const initialCode = `#include<bits/stdc++.h>
using namespace std;

int main(){
    //Write your code here. 
    return 0;
}
`
    const [code, setCode] = useState(initialCode);
    const [customInput, setCustomInput] = useState("");
    const [outputDetails, setOutputDetails] = useState(null);
    const [processing, setProcessing] = useState(null);
    const [theme, setTheme] = useState("vs-dark");
    const [language, setLanguage] = useState(languageOptions[0]);
    const [textSize, setFontSize] = useState("15px");

    const enterPress = useKeyPress("Enter");
    const ctrlPress = useKeyPress("Control");

    const onSelectChange = (sl) => {
        // console.log("selected Option...", sl);
        setLanguage(sl);
    };

    const onSelectChangeFont = (sf) => {
        setFontSize(sf);
    };

    useEffect(() => {
        if (enterPress && ctrlPress) {
            console.log("enterPress", enterPress);
            console.log("ctrlPress", ctrlPress);
            handleCompile();
        }
    }, [ctrlPress, enterPress]);
    const onChange = (action, data) => {
        switch (action) {
            case "code": {
                setCode(data);
                break;
            }
            default: {
                console.warn("case not handled!", action, data);
            }
        }
    };

    const handleCompile = () => {
        setProcessing(true);
        const formData = {
            language_id: language.id,
            // encode source code in base64
            source_code: btoa(code),
            stdin: btoa(customInput),
        };
        const options = {
            method: "POST",
            url: "https://judge0-ce.p.rapidapi.com/submissions",
            params: { base64_encoded: "true", fields: "*" },
            headers: {
                "content-type": "application/json",
                "Content-Type": "application/json",
                "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
                "X-RapidAPI-Key": '07d6a643a9msh4e4a9848846cb30p1fdfd1jsn986cb58b17b1',
            },
            data: formData,
        };

        axios
            .request(options)
            .then(function (response) {
                console.log("res.data", response.data);
                const token = response.data.token;
                checkStatus(token);
            })
            .catch((err) => {
                let error = err.response ? err.response.data : err;
                // get error status
                let status = err.response.status;
                console.log("status", status);
                if (status === 429) {
                    console.log("too many requests", status);

                    showErrorToast(
                        `Quota of 50 requests exceeded for the Day!`,
                        10000
                    );
                }
                setProcessing(false);
                console.log("catch block...", error);
            });
    };

    const checkStatus = async (token) => {
        const options = {
            method: "GET",
            url: "https://judge0-ce.p.rapidapi.com/submissions" + "/" + token,
            params: { base64_encoded: "true", fields: "*" },
            headers: {
                "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
                "X-RapidAPI-Key": '07d6a643a9msh4e4a9848846cb30p1fdfd1jsn986cb58b17b1',
            },
        };
        try {
            let response = await axios.request(options);
            let statusId = response.data.status?.id;

            // Processed - we have a result
            if (statusId === 1 || statusId === 2) {
                // still processing
                setTimeout(() => {
                    checkStatus(token);
                }, 2000);
                return;
            } else {
                setProcessing(false);
                setOutputDetails(response.data);
                showSuccessToast(`Compiled Successfully!`);
                console.log("response.data", response.data);
                return;
            }
        } catch (err) {
            console.log("err", err);
            setProcessing(false);
            showErrorToast();
        }
    };

    function handleThemeChange(th) {
        const theme = th;
        console.log("theme...", theme);

        if (["light", "vs-dark"].includes(theme.value)) {
            setTheme(theme);
        } else {
            defineTheme(theme.value).then((_) => setTheme(theme));
        }
    }
    useEffect(() => {
        defineTheme("oceanic-next").then((_) =>
            setTheme({ value: "oceanic-next", label: "Oceanic Next" })
        );
    }, []);

    const showSuccessToast = (msg) => {
        toast.success(msg || `Compiled Successfully!`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const showErrorToast = (msg, timer) => {
        toast.error(msg || `Something went wrong! Please try again.`, {
            position: "top-right",
            autoClose: timer ? timer : 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    function handleResetClick() {
        setCode(initialCode);
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="row">
                <div className="col-lg-9 col-md-9 col-sm">
                    <div className="ide-header row ms-auto" style={{ display: "flex" }}>
                        <div className="col mb-2 me-auto" style={{ display: "flex" }}>
                            <div className="me-2"><LanguagesDropdown onSelectChange={onSelectChange} /></div>
                            <div className="me-2"><ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} /></div>
                            <div className="me-2"><FontSizeDropdown onSelectChangeFont={onSelectChangeFont} dvalue={textSize} /></div>
                        </div>
                        <div className="col mb-2 ms-auto" style={{ display: "flex" }}>
                            <button className="btn btn-light me-2 ms-auto"
                                onClick={() => { navigator.clipboard.writeText(code) }}
                            ><ContentCopyRoundedIcon color="primary" fontSize="large" /></button>
                            <button
                                className="btn btn-primary me-2 "
                                onClick={handleCompile}
                                disabled={!code}
                            >
                                {processing ? "Running.." : "Run"}
                            </button>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <CodeEditorWindow
                            code={code}
                            onChange={onChange}
                            language={language?.value}
                            theme={theme.value}
                            fontSizeOption={textSize}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm">
                    <div className="row mb-4">
                        <CustomInput
                            customInput={customInput}
                            setCustomInput={setCustomInput}
                        />
                    </div>
                    <div className="row">
                        <div className="container" style={{ display: "flex" }}>
                            <h3 className="">
                                Output
                            </h3>

                            <button className="btn btn-light me-2 ms-auto"
                                onClick={(e) => setOutputDetails("")}
                            ><RotateLeftRoundedIcon color="primary" /></button>
                        </div>
                        <OutputWindow outputDetails={outputDetails} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;