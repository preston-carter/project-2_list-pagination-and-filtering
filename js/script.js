/******************************************
Treehouse Techdegree:
FSJS project 2 - List Pagination and Filtering
Developer: Preston Carter
https://github.com/preston-carter
******************************************/

//Wait to run the script until the content has fully loaded.
document.addEventListener('DOMContentLoaded', () => {

/***
   Global variables that store the DOM elements to reference and/or manipulate.
***/

  //Select the div that will be used to append the pagination div
  const pageDiv = document.querySelector('.page');
  //Select the ul element that holds all of the student data
  const studentList = document.querySelector('.student-list');
  //Select the individual student records from the parent above
  const students = studentList.children;
  //Create constants for the initial page data to display and max students to display per page
  const startPage = 1;
  const pageStudentCount = 10;

/***
   Create the `showPage` function to hide all of the items in the
   list except for the corresponding 10 for the appropriate page.
***/

  const showPage = (list, page) => {
    //Store the first/last index in order to locate where one page ends and next begins
    const firstIndex = (page * pageStudentCount) - pageStudentCount;
    const lastIndex = firstIndex + pageStudentCount - 1;
    //Only show the active page student list
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
    //Calculate the max required pagination links
    const maxPageNumber = Math.ceil(list.length / pageStudentCount);
    //Create/append the div element to hold the pagination links
    const paginationDiv = document.createElement('div');
    pageDiv.appendChild(paginationDiv);
    //Add the pagination class to style properly
    paginationDiv.className = 'pagination';
    //Create/append the ul element to hold the pagination links
    const paginationUL = document.createElement('ul');
    paginationDiv.appendChild(paginationUL);
    //Loop through required number of pagination links and create li/a tags and the necessary event listener
    for (let i = 1; i <= maxPageNumber; i += 1) {
      //Create/append the li element to hold the pagination links
      const paginationLI = document.createElement('li');
      paginationUL.appendChild(paginationLI);
      //Create/append the a element to hold the pagination links + assign required attributes
      const paginationLink = document.createElement('a');
      paginationLink.href = '#';
      paginationLink.textContent = i;
      paginationLI.appendChild(paginationLink);
      //Create event listener to run showPage when each link is clicked by the user
      paginationLink.addEventListener('click', (e) => {
        const pageNumber = e.target.textContent;
        showPage(students, pageNumber);
        //Loop through pagination links to remove 'active' class from each and then add to the clicked link
        for (let i = 0; i <= paginationLink.length; i += 1) {
          paginationLink[i].classList.remove('active');
        }
        e.target.className = 'active';
      })
    }
    return showPage(students, startPage);
  }

  //Append the appropriate number of pagination links based on our student list!
  appendPageLinks(students);

})
