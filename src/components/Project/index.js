import React, { Component } from "react";
import "./style.css";

class Project extends Component {
  displayTechLogos = () => {
    return (
      <p className="tech">
        {this.props.tech.map((technology, i) => {
          return (
            <img
              key={i}
              className="tech"
              src={technology.src}
              alt={technology.alt}
            />
          );
        })}
      </p>
    );
  }

  render() {
    return (
      <div className="project">
        <a
          href={this.props.siteURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="img-container">
            <img
              className="project-img"
              src={this.props.imgSrc}
              alt={this.props.name}
            />
          </div>
        </a>
        <section className="info">
          <p className="name">
            <a
              href={this.props.repoURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.name}
            </a>
          </p>
            <p className="description">
              {this.props.description}
            </p>
            {this.displayTechLogos()}
        </section>
      </div>
    );
  }
}

export default Project;
