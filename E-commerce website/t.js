//Main image
function adjustImageSize() {
  var container = document.querySelector('.main-img');
  var img = container.querySelector('img');
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;

  var imgRatio = img.naturalWidth / img.naturalHeight;
  var containerRatio = containerWidth / containerHeight;

  if (imgRatio > containerRatio) {
    img.style.width = 'auto';
    img.style.height = containerHeight + 'px';
    img.style.left = -(img.offsetWidth - containerWidth) / 2 + 'px';
  } else {
    img.style.width = containerWidth + 'px';
    img.style.height = 'auto';
    img.style.left = '0';
  }
}

window.addEventListener('load', adjustImageSize);
window.addEventListener('resize', adjustImageSize);



//Hide and display product details

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')  
}


// Open/close other windows

const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');


for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target , 
    targetEl = document.querySelector(`#${currentId}`)

    const openData = function() {
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };

    triggerOpen[i].addEventListener('click', function() {
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });

    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    overlay.addEventListener('click', openData);  
}




//Get form-crt data
document.getElementById("form").addEventListener("submit", function(event) {
    //event.preventDefault(); // Prevent form submission
  
    // Get the value of the "First name" input field
    const firstName = document.getElementById("first-name").value;
 
    document.getElementById("first-name-display").textContent = firstName + ", thank you for the order! ❤";  
    
    document.getElementById("form").reset();
  
});



//Get stars data

const ratingInputs = document.querySelectorAll('input[name="ratingg"]');
const selectedStars = document.getElementById('selected-stars');
let selectedRating = null;

ratingInputs.forEach(function(ratingInput) {
  ratingInput.addEventListener('change', function() {
    // Update the selected rating
    selectedRating = this.value;
  });
});

// Get review data
document.getElementById("form-review").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("username").value;
  const yourRev = document.getElementById("your-review").value;

  document.getElementById("username-got-data").textContent = name;
  document.getElementById("your-rev-got-data").textContent = yourRev;

  document.getElementById("form-review").reset();

  if (selectedRating !== null) {
    // Extract the number from the selected value
    const selectedNumber = parseInt(selectedRating.replace('star', ''));

    // Clear previous stars
    selectedStars.innerHTML = '';

    // Create the selected number of stars using <i> elements
    for (let i = 0; i < selectedNumber; i++) {
      const star = document.createElement('i');
      star.classList.add('fas', 'fa-star');
      selectedStars.appendChild(star);
    }
  }

  // Show the body-review element
  const bodyReview = document.getElementById("output");
  bodyReview.style.display = "block";
});





  
  











