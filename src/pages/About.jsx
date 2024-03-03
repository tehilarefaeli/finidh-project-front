import React from 'react';
import BasicButton from '../components/basic/BasicButton';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 style={{ marginBottom: "20px", fontSize: "6rem", fontWeight: "bold", fontFamily: "cursive" }}>
        SWEETIME
      </h1>
      <h3>Welcome to Our Recipe Site</h3>
      <p>
        For desserts, our site is an advanced recipe site. There are many recipe apps and websites on the market today, including those of famous chefs.
        <br />
        We came up with a brilliant solution that will give users a different level of experience on the site.
        <br />
        When people enter the kitchen to prepare something, they often encounter a frustrating situation: "whoops, I don't have all the materials!" Then, either the grocery store is far away or it's late. Here's a user who abandons the recipe with a bitter taste in their mouth.
        <br />
        And a mother of an allergic child who builds on some irritating recipe and in the end finds out that it contains a component that is dangerous for the girl.
        <br />
        Our site enters exactly this niche and offers a solution: First of all, let us know what your available supplies are/are not relevant - and according to this, we will give you the recipes that suit you.
        <br />
        No more surfing and flipping through dozens of irrelevant recipes and feeling hungry pangs. From today, you receive only relevant and practical recipes!
        <br />
        In addition, we offer the user to receive an indication of the rating of the recipe. When a user sees a high rating, it gives them confidence and certainty about choosing the recipe.
        <br />
        There will be additional filter options in order to make the adjustment of the recipe more accurate to the seeker.
        <br />
        And of course, a personal area that will be the cache of all the recipes you liked.
        <br />
        We set a goal before our eyes to give our user an efficient, effective, and of course, tasty browsing experience.
      </p>
      <BasicButton size='large' text='Learn More' />
    </div>
  );
}

export default About;
