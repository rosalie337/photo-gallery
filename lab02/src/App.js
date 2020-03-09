import React, { Component } from "react";
import Cup from "./Cup";
import cupData from "./data.js";
import "./App.css";

export default class App extends Component {
  state = { selected: null };

  render() {
    const cupNodes = cupData
      .filter(cup => {
        if (!this.state.selected) return true;

        return cup.type === this.state.selected;
      })
      .map(cup => <Cup up={cup} />);

    const handleChange = e => {
      this.setState({ selected: e.target.value });
    };

    return (
      <div>
        <header>
          <img src="logo192.png" alt="Alchemy Code Lab Logo" />
          <h1>Ceramic Mugs</h1>
        </header>

        <main>
          <section className="options">
            <select className="cup-type-filter" onChange={handleChange}>
              <option value="" defaultValue>
                All Types
              </option>
              <option value="Jesus">Jesus</option>
              <option value="Inspiration">Inspirational</option>
              <option value="Solid">Solid Color</option>
              <option value="Hurmor">Humorous</option>
            </select>
          </section>

          <section className="list-section">
            <ul className="cup">{cupNodes}</ul>
          </section>
        </main>
      </div>
    );
  }
}
