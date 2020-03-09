import React, { Component } from 'react'

export default class Cup extends Component {
    render() {
        return <li>
            <div className="info-container">
                <h2>{this.props.cup.name}</h2>
                <p className="cup-type">{this.props.cup.theme}</p>
            </div>

            <div className="image-container">
                <img
                    alt={this.props.cup.url}
                    src={this.props.cup.url} />
            </div>
            <p className="year">{this.props.cup.color}</p>
        </li>
    }
}