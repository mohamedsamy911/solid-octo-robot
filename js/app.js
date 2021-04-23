/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sectionsNum = document.querySelectorAll('section').length;
let parentList = document.querySelector('#navbar__list');
let sectionItems = document.querySelectorAll('section');
const windowHeight = window.innerHeight;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//see if section in viewPort
function isInViewport(element){
    let sectionPosition = element.getBoundingClientRect().top;
    //returns the section that in the viewport
    return(sectionPosition < windowHeight * 0.4 && sectionPosition > windowHeight * -0.6);
}
//This function add active class to the section in the viewport
function toggleActiveClass() {
    for(section of sectionItems){
        if(isInViewport(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
            }else{
                section.classList.remove('your-active-class');
            }
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
const buildNavBar = function(){
    const fragment = document.createDocumentFragment();
for(let count = 1; count <= sectionsNum; count++){
    const newElement = document.createElement('li');
    newElement.innerHTML = '<a href="#section' + count + '" class = "menu__link" data-nav="Section ' + count + '">Section ' + count + '</a>';
    fragment.appendChild(newElement);
}
parentList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
//This function add an active class to the list item to be able to change it's style
const activMenuItem = function()  {
	for (const section of sectionItems) {
		// Section Id
		const sectionId = section.getAttribute('id');
		// The nav item that links to the section id
		const navItem = document.querySelector(`a[href="#${sectionId}"]`);
		if (isInViewport(section)) {
	    // Add style to the nav item correspond to the section in the viewport
        navItem.classList.add('active-item');
	  } else {
       navItem.classList.remove('active-item');
	  }
	}
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavBar();
// Scroll to section on link click

// Set sections as active
setTimeout( function() {
	document.addEventListener('scroll', function()  {
  	// Set sections as active
      activMenuItem();
      toggleActiveClass();
  });
}, 10);
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
let collapsible = function (){
const headNum = document.querySelectorAll('h2').length;
const collapButton = document.querySelectorAll('h2');
for (let i = 0; i < headNum; i++) {
    collapButton[i].addEventListener("click", function() {
      this.classList.toggle("hidden-active");
      var content1 = this.nextElementSibling;
      var content2 = this.nextElementSibling.nextElementSibling;
      if (content1.style.display === "block" && content2.style.display === "block") {
        content1.style.display = "none";
        content2.style.display = "none";
      } else {
        content1.style.display = "block";
        content2.style.display = "block";
      }
    });
  }
}
setTimeout(collapsible(), 10);
