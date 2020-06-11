import React from "react";
import Image from "./image.js";

function ImageContainer(props) {
    const { title, date, url, explanation } = props;

    return (
        <>
            <h2>{title}</h2>
            <p>{date}</p>
            <Image url={url}/>
            <p>{explanation}</p>
        </>
    )
}

export default ImageContainer;