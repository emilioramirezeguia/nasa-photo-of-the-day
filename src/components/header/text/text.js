import React from "react";

function Text(props) {
    const { text } = props;

    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

export default Text;