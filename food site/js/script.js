// INDEX HTML
//SIDEBAR
let hamBar = document.getElementById('hambar');
let resMenu = document.querySelector('#res-menu');

hamBar.addEventListener('click', ()=>{
      resMenu.classList.toggle('activ');
})

let resPage = document.querySelector('#res-block-page');
let resBlog = document.querySelector('#res-block-blog');
let resPages = document.querySelector('#res-pages');
let resBlogs = document.querySelector('#res-blog');

resPages.addEventListener('click', ()=>{
           resPage.style.display = 'block';         

})
resPages.addEventListener('mouseleave', ()=>{
  resPage.style.display = 'none';
})
resPage.addEventListener('mouseleave', ()=>{
  resPage.style.display = 'none';
})

resBlogs.addEventListener('click', ()=>{
 resBlog.style.display = 'block'         

})
resBlogs.addEventListener('mouseleave', ()=>{
resBlog.style.display = 'none';
})
resBlog.addEventListener('mouseleave', ()=>{
resBlog.style.display = 'none';
})



//SUB MENU DISPLAY BLOCK
let page = document.querySelector('#block-page');
let blog = document.querySelector('#block-blog');
let pages = document.querySelector('#pages');
let blogs = document.querySelector('#blog');

pages.addEventListener('mouseenter', ()=>{
           page.style.display = 'block';         

})
pages.addEventListener('mouseleave', ()=>{
  page.style.display = 'none';
})
page.addEventListener('mouseleave', ()=>{
  page.style.display = 'none';
})

blogs.addEventListener('mouseenter', ()=>{
 blog.style.display = 'block'         

})
blogs.addEventListener('mouseleave', ()=>{
blog.style.display = 'none';
})
blog.addEventListener('mouseleave', ()=>{
blog.style.display = 'none';
})



// Home Slider

let slide = document.querySelectorAll(".slide");
let pass =  document.querySelectorAll(".pass");
let slideNumber = 0;

let nextIcon = document.querySelector(".next");
let lastIcon = document.querySelector(".last");

let line = document.querySelector(".line");
let a = 0;

nextIcon.addEventListener("click", () => {
  nextSlide(); 
  a = 0;
});

lastIcon.addEventListener("click", () => {
  lastSlide();
  a = 0;
});

function updateSlide() {
  for (let item of slide) {
    item.classList.remove("active");
    item.classList.add("slide-hidden");
  }

  slide[slideNumber].classList.add("active");

  for (let item of pass) {
    item.classList.remove("circle-active");
    item.classList.add("pass-clear");
  }
  pass[slideNumber].classList.add("circle-active");
}

function nextSlide() {
  if (slideNumber == slide.length - 1) {
    slideNumber = 0;
  } else {
    slideNumber++;
  }
  updateSlide();
}

function lastSlide() {
  if (slideNumber == 0) {
    slideNumber = slide.length - 1;
  } else {
    slideNumber--;
  }
  updateSlide();
}

setInterval(nextSlide,4000);

//Menu drink lunch dinner
let all = document.querySelector('#all');
let drink = document.querySelector('#drink');
let lunch = document.querySelector('#lunch');
let dinner = document.querySelector('#dinner');

let drinkImg = document.getElementsByClassName('drink');
let lunchImg = document.getElementsByClassName('lunch');
let dinnerImg = document.getElementsByClassName('dinner');

all.addEventListener('click', ()=>{
 for(let i=0; i< dinnerImg.length; i++){
  drinkImg[i].classList.remove("passiv");
 }
 for(let i=0; i< dinnerImg.length; i++){
  lunchImg[i].classList.remove("passiv");
 }
 for(let i=0; i< dinnerImg.length; i++){
  dinnerImg[i].classList.remove("passiv");
 }
});

drink.addEventListener('click', ()=>{
  for(let i=0; i< dinnerImg.length; i++){
    drinkImg[i].classList.remove("passiv");
   }
   for(let i=0; i< dinnerImg.length; i++){
    lunchImg[i].classList.add("passiv");
   }
   for(let i=0; i< dinnerImg.length; i++){
    dinnerImg[i].classList.add("passiv");
   }
});

lunch.addEventListener('click', ()=>{
  for(let i=0; i< dinnerImg.length; i++){
    drinkImg[i].classList.add("passiv");
   }
   for(let i=0; i< dinnerImg.length; i++){
    lunchImg[i].classList.remove("passiv");
   }
   for(let i=0; i< dinnerImg.length; i++){
    dinnerImg[i].classList.add("passiv");
   }
});
dinner.addEventListener('click', ()=>{
  for(let i=0; i< dinnerImg.length; i++){
    drinkImg[i].classList.add("passiv");
   }
   for(let i=0; i< dinnerImg.length; i++){
    lunchImg[i].classList.add("passiv");
   }
   for(let i=0; i< dinnerImg.length; i++){
    dinnerImg[i].classList.remove("passiv");
   }
})