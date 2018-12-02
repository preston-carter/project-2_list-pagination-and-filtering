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
  const studentList = document.querySelector('.student-list');
  const students = studentList.children;
  const startPage = 1;
  const pageStudentCount = 10;

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
    const firstIndex = (page * pageStudentCount) - pageStudentCount;
    const lastIndex = firstIndex + pageStudentCount - 1;
    for (let i = 0; i < list.length; i += 1) {
      if (i >= firstIndex && i <= lastIndex) {
        list[i].style.display = 'block';
      }
      else {
        list[i].style.display = 'none';
      }
    }
    return list;
  }

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

  const appendPageLinks = (list) => {

    const maxPageNumber = Math.ceil(list.length / pageStudentCount);
    const paginationDiv = document.createElement('div');
    pageDiv.appendChild(paginationDiv);
    paginationDiv.className = 'pagination';
    const paginationUL = document.createElement('ul');
    paginationDiv.appendChild(paginationUL);

    for (let i = 1; i <= maxPageNumber; i += 1) {
      const paginationLI = document.createElement('li');
      paginationUL.appendChild(paginationLI);
      const paginationLink = document.createElement('a');
      paginationLink.href = '#';
      paginationLink.textContent = i;
      paginationLI.appendChild(paginationLink);
      paginationLink.addEventListener('click', (e) => {
        const pageNumber = e.target.textContent;
        const activeLinks = paginationLI.children;
        showPage(students, pageNumber);
        for (let i = 0; i <= paginationLI.length; i += 1) {
          activeLinks[i].className = '';
        }
        e.target.className = 'active';
      })
    }
    return showPage(students, startPage);
  }

  appendPageLinks(students);

})
// Remember to delete the comments that came with this file, and replace them with your own code comments.
