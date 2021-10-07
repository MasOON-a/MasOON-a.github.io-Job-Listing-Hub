# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenges

Users should be able to:

- site styles should be dependent on screen size
- filter by tags that listings have
- use as few lines of JS as possible by making reusable functions

### Links

- Live page is at MasOOn-a GitHub under repository name MasOON-a.github.io-Job-Listing-Hub

## My process

- i used a mobile first process
- built basic html with no css and js fetch api to test if listings retreival worked
- after testing fetch api with retreiving info from json file, i added more html elements with listing specific information for each listing. 
- when all basic html generation was working in script, i finalised css styles
- after this i worked on interactive parts, first :hover elements and then the search functions

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- vanila Javascript

### What I learned

i am happy with how my search function turned out, i went through many different versions, all of them had logic errors, i just slowly fixed logic errors or scrapped
the entire idea and started with a different way of doing it

i am happy with the array way of finding matches and the indexOf was able to be used instead of a for loop which removed some lines of code

i had to make sure it not only makes non matches invisible but also matches visible so that it can function properly

```js
const listingContainer = document.getElementById('listings-container');
const tagSearch = document.querySelector('.tag-search');
for(let x = 0; x < listingContainer.children.length; x++){ // loop through listings on page
    let tagMatch = [];
      for(let z = 0; z < tagSearch.children.length; z++){ // loop through tags in tagSearch
          const tagContainer = listingContainer.children[x].querySelector('.tag-container');
          for(let y = 0; y < tagContainer.children.length; y++){ // loop through tags in specific listing
              if(tagContainer.children[y].innerText === tagSearch.children[z].innerText){
                  tagMatch.push(true);
                  break;
              }else if (y + 1 === tagContainer.children.length){
                  tagMatch.push(false);
              }
          }
      }
      if(tagMatch.indexOf(false) != -1){
          listingContainer.children[x].style.display = 'none';
      }else{
          listingContainer.children[x].removeAttribute('style');
      }
}
```

### Useful resources

- [Mozzila Dev](https://www.example.com) - great for when i wanted to research the details behind how a js or css element worked
- [W3 schools](https://www.example.com) - 
- [stack overflow](https://stackoverflow.com) - very good for community suggestions for harder to define problems
- 

## Author

- [Mason Matich](https://github.com/masoon-a)

## Acknowledgments

thanks frontendmentor for having all of these templates for free!!