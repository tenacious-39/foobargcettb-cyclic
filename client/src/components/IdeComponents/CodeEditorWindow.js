import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme, fontSizeOption }) => {
    const [value, setValue] = useState(code || "");
    let obj = { fontSize: "15px" };
    switch (fontSizeOption) {
        case "12px": obj = { fontSize: "12px" }; break;
        case "15px": obj = { fontSize: "15px" }; break;
        case "18px": obj = { fontSize: "18px" }; break;
        case "21px": obj = { fontSize: "21px" }; break;
        case "24px": obj = { fontSize: "24px" }; break;
        case "27px": obj = { fontSize: "27px" }; break;
        case "30px": obj = { fontSize: "30px" }; break;
        case "32px": obj = { fontSize: "32px" }; break;
        case "34px": obj = { fontSize: "34px" }; break;
        default: obj = { fontSize: "15px" }; break;
    }
    const handleEditorChange = (value) => {
        setValue(value);
        onChange("code", value);
    };

    return (
        <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
            <Editor
                height="84vh"
                width={`100%`}
                language={language || "c++"}
                value={value}
                theme={theme || "vs-dark"}
                defaultValue="// GCETTB Editor"
                options={obj}
                onChange={handleEditorChange}
            />
        </div>
    );
};
export default CodeEditorWindow;