// IMPORT useState
import React, {useState} from 'react';
import './styles.css';
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from './imageData.js'

export default function App() {

  // USE useState TO CREATE  [bigImage, setBigImage] 
  const [bigImage, setBigImage] = useState(imagesArr[0].img)
  // console.log(bigImage)
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // const [style, setStyle] = useState('thumb')


  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  const handleClick = (img) => {
    setBigImage(img)
    style(clicked)
  }
 
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  const images = imagesArr.map((ele, index) => {

    return (
    <img className='thumb' 
    src={ele.img} 
    key={index} 
    alt={ele.city} 
    onClick={() => handleClick(ele.img)} 
    // style={ bigImage === img ? border: '5px solid hotpink' }
    />
    )
  })
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {images}

        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <img src={bigImage} id="bigimage" alt='bigImage' />
        {/* <img src="" id="bigimage" alt='bigImage'/> */}
      </div>
    </div>
  );
}
