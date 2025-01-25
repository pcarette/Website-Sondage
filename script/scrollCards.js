// Manage SCROLLING
isCooldown = false;
let nCards = 3;
let actualCard = 0;
let mooveX = 2500;

function scrollCards(side) {
        

    if(!isCooldown) {

        isCooldown = true;
        
        
        const respCards = document.querySelectorAll('.responses-card');
        if (respCards.length > 0) {
        	  let icons = document.querySelectorAll('.fa-circle-chevron-down');
			  icons.forEach(icone => {
				icone.style.transform = "rotate(0deg)";
			  });

			  window.scrollTo({
				top: 0,
				behavior: 'smooth' // Animation fluide
			  });

			  setTimeout(function() {
				let myDivs = document.querySelectorAll('.responses-card');
				myDivs.forEach(divv => {
				    divv.remove();
				});
				commentsDisplays = false;
				scrolling(side);
				
			}, 400);
        } else {   
        	scrolling(side);
        }
        
    }
    
}
function scrolling(side) {

	function getTranslateX(elementt) {
        const style = window.getComputedStyle(elementt);
        const matrix = new DOMMatrix(style.transform);
        return matrix.m41;
    }
    
	const cartes = document.querySelectorAll('.card-movement-x');
	if ( side == 'left' && actualCard > 0 ) {
            actualCard -= 1;
            cartes.forEach(function(carte) {
                const currentTranslateXCard = getTranslateX(carte);
                const newTranslateXCard = currentTranslateXCard + mooveX;
                carte.style.transform = `translateX(${newTranslateXCard}px)`;
                carte.style.transition = 'transform 0.5s ease-in-out';
            });
        } else if ( side == 'right' && actualCard < nCards - 1 ) {
            actualCard += 1;
            cartes.forEach(function(carte) {
                const currentTranslateXCard = getTranslateX(carte);
                const newTranslateXCard = currentTranslateXCard - mooveX;
                carte.style.transform = `translateX(${newTranslateXCard}px)`;
                carte.style.transition = 'transform 0.5s ease-in-out';
            });
        }

        setTimeout(function() {
            isCooldown = false;
        }, 710)
}



