import React, { Component } from 'react';
import Header from './Header.js'
import ImageList from './ImageList.js'

//data file
import images from './data.js';

//stylesheet
import './App.css';


export default class App extends Component {
  state = { selected: null };


  render() {
    const allImages = images
    const filteredImages = allImages.filter(creature => {
      if (!this.state.selected) return true;
      return creature.keyword === this.state.selected;

    })
    
    const handleChange = e => {
      this.setState({ selected: e.target.value });

    };

    return (

      <div>

        <Header />

        <p>Filter through the images below</p>

        <section className="choices">
          <select onChange={handleChange}>
            <option value="" defaultValue>All Monsters</option>
            <option value="narwhal">Narwol</option>
            <option value="rhino">Rhino</option>
            <option value="unicorn">Unicorn</option>
            <option value="unilego">Unilego</option>
            <option value="markhor">Markhor</option>
            <option value="addax">Addax</option>
            <option value="lizard">Lizard</option>
            <option value="dragon">Dragon</option>
            <option value="chameleon">Chameleon</option>
            <option value="mouflon">Mouflon</option>
            <option value="triceratops">Triceratops</option>
          </select>

        </section>

        <ImageList images={filteredImages} />

      </div >


    );

  }

}