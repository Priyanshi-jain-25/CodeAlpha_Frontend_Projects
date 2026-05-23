// FILTER

const buttons =
document.querySelectorAll(".buttons button");

const cards =
document.querySelectorAll(".card");

buttons.forEach(button=>{

  button.addEventListener("click",()=>{

    document.querySelector(".active")
    .classList.remove("active");

    button.classList.add("active");

    const filter = button.dataset.name;

    cards.forEach(card=>{

      if(filter === "all" ||
      card.classList.contains(filter)){

        card.style.display = "block";

      }

      else{

        card.style.display = "none";

      }

    });

  });

});


// SEARCH

const search =
document.getElementById("search");

search.addEventListener("keyup",()=>{

  const value =
  search.value.toLowerCase();

  cards.forEach(card=>{

    const text =
    card.innerText.toLowerCase();

    if(text.includes(value)){

      card.style.display = "block";

    }

    else{

      card.style.display = "none";

    }

  });

});


// LIGHTBOX

const images =
document.querySelectorAll(".card img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.querySelector(".lightbox-img");

const closeBtn =
document.querySelector(".close");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

let current = 0;


// OPEN IMAGE

images.forEach((img,index)=>{

  img.addEventListener("click",()=>{

    current = index;

    showImage();

    lightbox.style.display = "flex";

  });

});


// SHOW IMAGE

function showImage(){

  lightboxImg.src =
  images[current].src;

}


// NEXT

nextBtn.addEventListener("click",()=>{

  current++;

  if(current >= images.length){

    current = 0;

  }

  showImage();

});


// PREVIOUS

prevBtn.addEventListener("click",()=>{

  current--;

  if(current < 0){

    current = images.length - 1;

  }

  showImage();

});


// CLOSE

closeBtn.addEventListener("click",()=>{

  lightbox.style.display = "none";

});


// CLOSE OUTSIDE

lightbox.addEventListener("click",(e)=>{

  if(e.target === lightbox){

    lightbox.style.display = "none";

  }

});