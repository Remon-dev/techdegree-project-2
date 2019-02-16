/*****************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/





//page
const pageDiv = document.getElementsByClassName('page');

//search students
const pageHeader = document.getElementsByClassName('page-header');
const studentSearch = document.getElementsByClassName('student-search');

// Students 
const studentList = document.getElementsByClassName('student-item');
const studentDetails = document.getElementsByClassName('student-details');
const avatar = document.getElementsByClassName('avatar');
const email = document.getElementsByClassName('email');

let currentPage = 1;
let itemsPerPage = 10;
let pageList = new Array();
let numberOfPages = 1; // calculates the total number of pages

function load() {
   studentList;
   numberOfPages = getNumberOfPages();
}

function getNumberOfPages() {
   return Math.ceil(studentList.length / itemsPerPage);
}


// show only 10 students per page, and 'display none' the rest.
const showPage = (studentList, page) => {
   for (let i = 0; i < studentList.length; i++) {
      let firstItem = ((page * itemsPerPage) - 10);
      let lastItem = ((firstItem - itemsPerPage) - 1);
      let students = studentList[i];
      if (i >= firstItem && i <= lastItem) {
         students.style.display = 'block';
      } else {
         students.style.display = 'none';
      }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   numberOfPages;
   const div = document.createElement('div');
   const ul = document.createElement('ul');

   div.className = 'pagination';
   pageDiv.appendChild(div);
   div.appendChild(ul);

   for (let i = 0; i < numberOfPages.length; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = i + 1;
      nuberOfPages[i] = ul.appendChild(a);

      a.addEventListener('click', (e) => {
         e.preventDefault();
         for (let i = 0; i < a.length; i++) {
            const links = links[i];
            a.classList.remove('active');
         }
         const aLink = document.getElementsByTagName('a');
         for (let i = 0; i < array.length; i++) {

            if (aLink[i] = e.target) {
               e.target.className = 'active';
            } else {
               aLink.classList.remove = 'active';
            }
         }

         showPage(studentList, i + 1);
      });
   }

}

function loadList() {
   let begin = ((currentPage - 1) * itemsPerPage);
   let end = begin + itemsPerPage;

   pageList = studentList.slice(begin, end);
   drawList();
   check();
}

function drawList() {
   pageDiv.innerHTML = "";

   for (i = 0; i < pageList.length; i++) {
      pageDiv.innerHTML += pageList[i] + "";
   }
}
window.onload = showPage(studentList, 1);
window.onload = appendPageLinks(studentList);