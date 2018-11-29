/******************************************
Treehouse Techdegree:
FSJS project 2 - List Pagination and Filtering
Developer: Preston Carter
https://github.com/preston-carter
******************************************/

//
document.addEventListener('DOMContentLoaded', () => {

/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

  const pageDiv = document.querySelector('.page');
  const list = document.querySelector('.student-list');

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

  const showPage = (list, page) => {

    page.addEventListener('click', () => {
      if (page === 1) {
        for (let i = 0; i < 10; i += 1) {
          list[i].style.display = 'block';
        }
      }
      else if (page === 2) {
        for (let i = 10; i < 20; i += 1) {
          list[i].style.display = 'block';
        }
      }
      else if (page === 3) {
        for (let i = 20; i < 30; i += 1) {
          list[i].style.display = 'block';
        }
      }
      else if (page === 4) {
        for (let i = 30; i < 40; i += 1) {
          list[i].style.display = 'block';
        }
      }
      else if (page === 5) {
        for (let i = 40; i < 50; i += 1) {
          list[i].style.display = 'block';
        }
      }
      else if (page === 6) {
        for (let i = 50; i < 55; i += 1) {
          list[i].style.display = 'block';
        }
      }
      else {
        list.style.display = 'none';
      }
    })
  }

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

  const appendPageLinks = (list) => {
    let paginationDiv = document.createElement('div');
    pageDiv.appendChild(paginationDiv);
    let paginationUL = document.createElement('ul');
    paginationDiv.appendChild(paginationUL);

    let maxPageNumber = Math.ceil(list.children.length / 10);
    for (let i = 1; i <= maxPageNumber; i += 1) {
      let paginationLI = document.createElement('li');
      paginationUL.appendChild(paginationLI);
      let paginationLink = document.createElement('a');
      paginationLI.appendChild(paginationLink);
      let paginationHREF = document.createAttribute('href');
      paginationHREF.value = i;
      paginationLink.setAttributeNode(paginationHREF);
    }

  }

  let page = 1;
  appendPageLinks(list);
  showPage(list, page);


})
// Remember to delete the comments that came with this file, and replace them with your own code comments.
