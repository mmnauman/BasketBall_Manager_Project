import React from 'react'
import {Spinner} from 'react-bootstrap';
import Styled from 'styled-components';

const LoaderStyled = Styled.div`
width: 200px;
margin: 0 auto;

`;

function Loader() {
    return (
        <LoaderStyled>
        <Spinner style={{width: "200px", height: "200px", fontSize: "5em", color: "#fff", marginTop: "100px", margin: "100px auto"}} animation="border" role="status">
            <span  className="visually-hidden">Loading...</span>
        </Spinner>
        </LoaderStyled>
    )
}

export default Loader
