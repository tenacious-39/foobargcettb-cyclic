import React from "react";
import "bootstrap/dist/css/bootstrap.css";


const OutputWindow = ({ outputDetails }) => {
    const getOutput = () => {
        let statusId = outputDetails?.status?.id;

        if (statusId === 6) {
            // compilation error
            return (
                <pre className="text-danger">
                    {atob(outputDetails?.compile_output)}
                </pre>
            );
        } else if (statusId === 3) {
            return (
                <pre className="text-white">
                    {atob(outputDetails.stdout) !== null
                        ? `${atob(outputDetails.stdout)}`
                        : null}
                </pre>
            );
        } else if (statusId === 5) {
            return (
                <pre className="text-danger">
                    {`Time Limit Exceeded`}
                </pre>
            );
        } else {
            return (
                <pre className="text-danger">
                    {atob(outputDetails?.stderr)}
                </pre>
            );
        }
    };
    return (
        <>
            <div className="container rounded" style={{
                backgroundColor: "#040f13",
                height: "14rem", width: "100%",
                overflowY: "auto"
            }}>
                {outputDetails ? <>{getOutput()}</> : null}
            </div>
        </>
    );
};

export default OutputWindow;