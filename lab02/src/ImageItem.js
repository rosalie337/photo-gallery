import React, { Component } from "react";


export default class ImageItem extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="creature">{this.props.image.title}</h3>
                <p className="horns"># of Horns: {this.props.image.horns}</p>
            
                <img
                    alt={this.props.image.url}
                    src={this.props.image.url} />
            <p className="description">{this.props.image.description}</p>
            </div>
        )   
    }
}