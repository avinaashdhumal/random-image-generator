import React, { useState, useEffect } from "react";
import "./heightAndwidth.css";
import {  Form, Image } from "semantic-ui-react";
export default function HeightAndWidth() {
  const [srcImage, setSrcImage] = useState(`https://picsum.photos/300/300`);
  const [imageDimension, setImageDimension] = useState({
    height: 100,
    width: 100,
  });
  const saveState = (e) => {
    e.preventDefault();
    setImageDimension({
      ...imageDimension,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setSrcImage(
      `https://picsum.photos/${imageDimension.width}/${imageDimension.height}`
    );
  }, [imageDimension]);


  return (
 
    <div className='sematic-container'>
      <Form>
        <Form.Group>
          <Form.Input
            type='number'
            placeholder='Width in px'
            name='width'
            style={{ fontSize: "20px", margin: "1rem" }}
            onChange={saveState}
          />
          <Form.Input
            placeholder='Height in px'
            style={{ fontSize: "20px", margin: "1rem" }}
            type='number'
            name='height'
            onChange={saveState}
          />
        </Form.Group>
      </Form>

      <Image src={srcImage} />
    </div>
  );
}
