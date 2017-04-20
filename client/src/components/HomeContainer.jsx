import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Section from './UI/Section';
import Banner from './UI/Banner';
import Footer from './UI/Footer';

export default class HomeContainer extends PureComponent {
  render() {
    return(
      <div>
        <Banner />

        <Section id="first" type="content" title="About Me" textContent="Hello there. I'm a computer science graduate from King's College London. I developed web apps my entire life.
          I am very proeficient in Javascript | Node.JS | React."
          classnames="spotlight color1 invert style1 orient-right content-align-left image-position-center"
          image="https://source.unsplash.com/category/people/1600x900" />

        <Section id="second" type="projects" title="Projects" textContent="This is my list of projects. I developed these applications during my time at university."
          classnames="wrapper style1 align-center" />

        <Footer />
      </div>

    )
  }
};
