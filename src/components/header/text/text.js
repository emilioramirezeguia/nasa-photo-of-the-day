import React from "react";
import styled from "styled-components";

const StyledText = styled.h1`
    font-size: ${props => {
        if (props.big) return "100px";
        if (props.medium) return "20px";
        if (props.small) return "10px";
        return "12px";
    }};
`

function Text(props) {
    const { children, big, medium, small } = props;

    return (
        <StyledText big={big} medium={medium} small={small}>{children}</StyledText>
    )
}

export default Text;