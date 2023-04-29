/* eslint-disable react/jsx-no-undef */
import React from "react";
import {Button} from 'react-bootstrap'
import "./PageNotFound.css";
function PageNotFound(){
    return(
   <div className="hide-navbar">
    <h1 className="p-2">Page you are looking for does not exist!</h1>
    <button type="button" className="btn btn-primary">Normal Bootstrap</button>
    <Button className="m-1" variant="primary">React Bootstrap</Button>
    <a href="/home">Home</a>
   </div>
    )
}
export default PageNotFound;