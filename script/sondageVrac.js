const responses = [
  { user: "Corrine", message: "Je déteste Breaking Bad !", timestamp: "10:30" },
  {
    user: "Christophe",
    message: "Ferme ta gueule Corrine, Breaking Bad c'est une base !",
    timestamp: "10:32"
  },
  {
    user: "Marc",
    message: "Christophe, un peu de respect, chacun ses goûts.",
    timestamp: "10:35"
  },
  {
    user: "Corrine",
    message: "Merci Marc, mais je suis habituée à ce genre de commentaires...",
    timestamp: "10:37"
  },
  {
    user: "Christophe",
    message: "OK, désolé Corrine, mais Breaking Bad est vraiment incroyable.",
    timestamp: "10:40"
  },
  {
    user: "Sophie",
    message: "Moi, j'aime bien Breaking Bad, mais ce n'est pas ma série préférée.",
    timestamp: "10:45"
  },
  {
    user: "Marc",
    message: "Et toi, Sophie, c'est quoi ta série préférée ?",
    timestamp: "10:47"
  },
  {
    user: "Sophie",
    message: "Je dirais The Crown. J'adore l'histoire et les acteurs sont excellents !",
    timestamp: "10:50"
  },
  {
    user: "Corrine",
    message: "Oh, The Crown, je suis d'accord, c'est une excellente série.",
    timestamp: "10:52"
  },
  {
    user: "Christophe",
    message: "OK, The Crown c'est bien, mais ça n'atteindra jamais Breaking Bad 😜.",
    timestamp: "10:55"
  },
];


let commentsDisplays = false;

function displayResponses(data) {
  if(commentsDisplays == false) {
    // Create a new card for responses
    const mainElement = document.querySelector('main');
    const responseCard = document.createElement('div');
    responseCard.className = 'responses-card';
    
    // Create header for responses card
    const responseHeader = document.createElement('div');
    responseHeader.className = 'response-header';
    responseHeader.innerHTML = `
      <h3>Commentaires (${data.length})</h3>
    `;
    
    // Create responses container
    const responsesContainer = document.createElement('div');
    responsesContainer.className = 'responses-container';
    
    // Add each response
    data.forEach((item) => {
      const responseElement = document.createElement('div');
      responseElement.className = 'response-item';
      responseElement.innerHTML = `
        <div class="response-user">
          <div class="user-avatar">
            ${item.user.charAt(0).toUpperCase()}
          </div>
          <div class="user-info">
            <span class="username">${item.user}</span>
            <span class="timestamp">${item.timestamp}</span>
          </div>
        </div>
        <div class="response-content">
          <p>${item.message}</p>
        </div>
        <div class="response-actions">
          <button class="action-btn">
            <i class="fas fa-reply"></i>
            Répondre
          </button>
          <button class="action-btn">
            <i class="fas fa-heart"></i>
            J'aime
          </button>
        </div>
      `;
      responsesContainer.appendChild(responseElement);
    });

    const responseFooter = document.createElement('div');
    responseFooter.className = 'response-footer';
    responseFooter.innerHTML = `
      <button class="new-comment-btn">
        <i class="fas fa-plus"></i> Nouveau commentaire
      </button>
    `;
    
    // Assemble the response card
    responseCard.appendChild(responseHeader);
    responseCard.appendChild(responsesContainer);
    responseCard.appendChild(responseFooter);
    
    // Add the response card after the original card
    const mainCard = document.querySelector('.main-conteneur');
    mainCard.after(responseCard);

    let icons = document.querySelectorAll('.fa-circle-chevron-down');
    icons.forEach(icone => {
      icone.style.transform = "rotate(180deg)";
    });
    
	
    window.scrollTo({
      top: 200,
      behavior: 'smooth' // Animation fluide
    });

    commentsDisplays = true;
  } else {
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
    }, 400);


  }
}


