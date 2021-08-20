import React, { useState } from 'react';
import './heightAndwidth.css'
import { Button, Form, Image } from "semantic-ui-react"
export default function HeightAndWidth() {
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();
    // const getWidthAndHeight=()=>{
    //     return {
    //         width: width,
    //         height: height
    //     }
    // }
    const srcImage = `https://picsum.photos/${width}/${height}`
    return (
        // <div id="div">
        //     <form>
        //         <label>Width</label>
        //         <input type="number" value={width} onChange={e => setWidth(e.target.value)} />
        //         <label>Height</label>
        //         <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
        //         {/* <button id="button" onClick={() => { getWidthAndHeight() }}>Submit</button> */}
        //     </form>
        //     <div className="img-class">
        //         <img id="img" src={`https://picsum.photos/${width}/${height}`} />
        //     </div>
        // </div>
        <div className="sematic-container">
            <Form>
                <Form.Group>
                    <Form.Input
                        type="number"
                        placeholder='Width in px'
                        style={{ fontSize: "20px", margin: "1rem" }}
                        onChange={e => setWidth(e.target.value)}
                    />
                    <Form.Input
                        placeholder='Height in px'
                        style={{ fontSize: "20px", margin: "1rem" }}
                        type="number"
                        onChange={e => setHeight(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <div>
                <a href={srcImage} download><Button primary>Download</Button></a>
                <p style={{ width: "200px" }}><strong style={{ fontSize: "16px" }}>Note: </strong>When you download the image, you'll get different image due to randomness</p>
                <br />
            </div>

            <Image src={srcImage} />


        </div>
    )
}
