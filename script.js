window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  





function showContent(className) {
  
  const contentArea = document.getElementById('content-area');
  const buttons = document.querySelectorAll('.class-buttons button');

  buttons.forEach(button => button.classList.remove('active'));

  document.querySelector(`[onclick="showContent('${className}')"]`).classList.add('active');

  if (className === 'yoga') {
      contentArea.innerHTML = `
          <div class="yogap">
          <h3>Why are your Yoga?</h3>
          <br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Pariatur possimus voluptatum impedit odit perferendis <br> dolorum placeat. Lorem ipsum dolor sit amet, consectetur <br> adipisicing elit. Debitis, facilis!</p>
          <br>
          <h4>When comes Yoga Your Time.</h4>
          <br>
          <p>Saturday–Sunday: 8:00am – 10:00am</p>
          <br>
          <p>Monday–Tuesday: 10:00am – 12:00pm</p>
          <br>
          <p>Wednesday–Friday: 3:00pm – 6:00pm</p>
          </div>
          <img src="img/yoga.jpg" alt="Yoga" class="class-image">
      `;
  } else if (className === 'group') {
      contentArea.innerHTML = `
          <div class="yogap">
          <h3>Why choose Group Classes?</h3>
          <br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Pariatur possimus voluptatum impedit odit perferendis <br> dolorum placeat. Lorem ipsum dolor sit amet, consectetur <br> adipisicing elit. Debitis, facilis!</p>
          <br>
          <h4>When comes Group Your Time.</h4>
          <br>
          <p>Saturday–Sunday: 9:00am – 11:00am</p>
          <br>
          <p>Monday–Tuesday: 11:00am – 1:00pm</p>
          <br>
          <p>Wednesday–Friday: 4:00pm – 7:00pm</p>
          </div>
          <img src="img/group.webp" alt="Group" class="class-image">
      `;
  } else if (className === 'solo') {
      contentArea.innerHTML = `
          <div class="yogap">
          <h3>Why choose Solo Classes?</h3>
          <br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Pariatur possimus voluptatum impedit odit perferendis <br> dolorum placeat. Lorem ipsum dolor sit amet, consectetur <br> adipisicing elit. Debitis, facilis!</p>
          <br>
          <h4>When comes Solo Your Time.</h4>
          <br>
          <p>Saturday–Sunday: 10:00am – 12:00pm</p>
          <br>
          <p>Monday–Tuesday: 1:00pm – 3:00pm</p>
          <br>
          <p>Wednesday–Friday: 5:00pm – 7:00pm</p>
          </div>
          <img src="img/solo.jpg" alt="Solo" class="class-image">
      `;
  } else if (className === 'stretching') {
      contentArea.innerHTML = `
          <div class="yogap">
          <h3>Why choose Stretching Classes?</h3>
          <br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Pariatur possimus voluptatum impedit odit perferendis <br> dolorum placeat. Lorem ipsum dolor sit amet, consectetur <br> adipisicing elit. Debitis, facilis!</p>
          <br>
          <h4>When comes Stretching Your Time.</h4>
          <br>
          <p>Saturday–Sunday: 7:00am – 9:00am</p>
          <br>
          <p>Monday–Tuesday: 9:00am – 11:00am</p>
          <br>
          <p>Wednesday–Friday: 2:00pm – 4:00pm</p>
          </div>
          <img src="img/hero-man.jpg" alt="Stretching" class="class-image">
      `;
  }
}

function toggleDropdown() {
    const button = document.querySelector('.dropdown-btn');
    button.classList.toggle('active');
  }
  
  function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
  
    const bmi = weight / ((height/100) * (height/100));
    const resultElement = document.getElementById('result');
  
    resultElement.textContent = `BMI: ${bmi.toFixed(2)}`;
  
    // BMI değerine göre yorum ekleme
    if (bmi < 18.5) {
      resultElement.textContent += " (Zayıf)";
    } else if (bmi < 25) {
      resultElement.textContent += " (Normal)";
    } else if (bmi < 30) {
      resultElement.textContent += " (Kilolu)";
    } else {
      resultElement.textContent += " (Obez)";
    }
  }

  
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}