/*****************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/********
Remon Tewodros
*****/

// .page
const pageClass = document.querySelector('.page');


// Students 
const studentList = document.getElementsByClassName('student-item');
const studentDetails = document.getElementsByClassName('student-details');

let itemsPerPage = 10;
let numberOfPages = 1; // calculates the total number of pages


// show only 10 students per page, and 'display none' the rest.
const showPage = (studentList, page) => {
   for (let i = 0; i < studentList.length; i++) {
      let firstItem = ((page * itemsPerPage) - 10);
      let lastItem = ((firstItem + itemsPerPage) - 1);
      let students = studentList[i];

      if (i >= firstItem && i <= lastItem) {
         students.style.display = 'block';
      } else {
         students.style.display = 'none';
      }
   }
}

//creates all the pagination buttons, adds them to the DOM, and adds their functionality.
const appendPageLinks = (list) => {

   //clalculate how many pages are needed for the list
   numberOfPages = Math.ceil(studentList.length / itemsPerPage);

   const div = document.createElement('div'); //Create a div, give it the “pagination” class
   const ul = document.createElement('ul'); //Create ul element

   div.className = 'pagination'; // give the div the “pagination” class
   pageClass.appendChild(div); // append the div to .page 
   div.appendChild(ul); //Add a ul to the “pagination” div to store the pagination links

   //add li and a tags with the page number text for every page
   for (let i = 0; i < numberOfPages; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      a.textContent = 1 + i;
      a.href = '#';
      li.appendChild(a);

      // Loop over pagination links to remove active class from all links
      a.addEventListener('click', (e) => {
         e.preventDefault()
         const links = document.getElementsByTagName('a');
         showPage(studentList, i + 1);
         for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active');
         }
         e.target.className = 'active';
      });
   }
}


// search form to search students 
const searchStudents = () => {
   const pageHeader = document.getElementsByClassName('page-header')[0];
   const ul = document.querySelector('.student-list');
   const li = ul.children;

   // create searchDiv to store input and button
   const searchDiv = document.createElement('div');
   const button = document.createElement('button');
   const input = document.createElement('input');

   searchDiv.className = 'student-search'; // searchDiv
   pageHeader.appendChild(searchDiv);

   input.className = 'input'; // input
   input.placeholder = 'Search for students...';
   searchDiv.appendChild(input);

   button.textContent = 'Search'; // button
   searchDiv.appendChild(button);

   //test
   // const studentDiv = li.children[0];
   // const name = studentDiv.children[1].textContent;
   // console.log(name);
   //test

   const filter = () => {
      let results = [];
      // loop over list and cheks if input value matches
      for (let i = 0; i < li.length; i++) {
         const search = input.value.toLowerCase();
         const studentDiv = li[i].children[0];
         const name = studentDiv.children[1].textContent;

         if (name.includes(search)) {
            li[i].style.display = 'block';
            results.push(li[i]);
         } else {
            li[i].style.display = 'none';
         }
      }
      console.log(results);
      if (results.length <= 10) {
         showPage(results, 1);

      }
   }
   const removeLinks = () => {
      const links = document.getElementsByClassName('pagination');
      links.parentNode.removeChild(links);
   }




   input.addEventListener('keyup', () => {
      filter();
      removeLinks();

   });
   button.addEventListener('click', () => {
      filter();
   });
}


// call the functions
showPage(studentList, 1);
appendPageLinks(studentList);
searchStudents();