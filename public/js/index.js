// tax switch (filter)
let switchCheck = document.getElementById ('switchCheckReverse');
let tax = document.querySelectorAll ('.tax');
switchCheck.addEventListener ('click',()=>{
    if (switchCheck.checked) {
        tax.forEach ((lisTax)=>{
            lisTax.style.display = 'unset';
        });
      }
      else {
        tax.forEach ((lisTax)=>{
            lisTax.style.display = 'none';
        });
      }
});

// overflow-Detection & Arrow Navigation for categories
let overflown = (element)=>{
    return (element.scrollWidth>element.clientWidth);
}
let categoryContainer = document.getElementsByClassName ('filters');
let navigationArrows = document.querySelectorAll ('.scroll-btn');
if (overflown(categoryContainer[0])) {
    navigationArrows.forEach ((arrow)=>{
        arrow.style.display = 'unset';
    })
}
else {
    navigationArrows.forEach ((arrow)=>{
        arrow.style.display = 'none';
    })
}
window.addEventListener('resize', function(event){
    if (overflown(categoryContainer[0])) {
        navigationArrows.forEach ((arrow)=>{
            arrow.style.display = 'unset';
        })
    }
    else {
        navigationArrows.forEach ((arrow)=>{
            arrow.style.display = 'none';
        })
    }
  });

// functionality of category navigation arrow 
let filters = document.querySelector ('.filters');
let backArrow = document.querySelector ('.scroll-btn.left');
let frontArrow = document.querySelector ('.scroll-btn.right');
    if (window.screen.width>=550) {
        backArrow.addEventListener ('click', ()=>{
            filters.scrollBy({ left: -200, behavior: "smooth" });
        });
        frontArrow.addEventListener ('click', ()=>{
            filters.scrollBy({ left: 200, behavior: "smooth" });
        });
    }

    else if (window.screen.width >= 545) {
        backArrow.addEventListener ('click', ()=>{
            filters.scrollBy({ left: -150, behavior: "smooth" });
        });
        frontArrow.addEventListener ('click', ()=>{
            filters.scrollBy({ left: 150, behavior: "smooth" });
        });
    }

    else if (window.screen.width < 545) {
        backArrow.addEventListener ('click', ()=>{
            filters.scrollBy({ left: -100, behavior: "smooth" });
        });
        frontArrow.addEventListener ('click', ()=>{
            filters.scrollBy({ left: 100, behavior: "smooth" });
        });
    }

    else if (window.screen.width < 380) {
        backArrow.addEventListener ('click', ()=>{
            filters.scrollBy({ left: -70, behavior: "smooth" });
        });
        frontArrow.addEventListener ('click', ()=>{
            filters.scrollBy({ left: 70, behavior: "smooth" });
        });
    }