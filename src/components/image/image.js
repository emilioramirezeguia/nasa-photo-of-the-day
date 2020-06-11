import React from "react";

function Image(props) {
    const { url } = props;

    return (
        <div>
            <img src={url} alt="nasa image"></img>
        </div>
    )
}

export default Image;