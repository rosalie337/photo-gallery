import React, { Component } from "react";
import ImageItem from './ImageItem.js';
import './App.css';

export default class ImageList extends Component {

    render() {

      const images = this.props.images;
      const imageList = images.map((item , index) => {
        return <ImageItem image={item} key={index}/>
      })      
      return (
        <div>
        
          <ul>
          
          {imageList}

         </ul>
         </div>
      )  
  }
}