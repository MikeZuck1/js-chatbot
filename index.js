// Import stylesheets
import './style.css';

const chatbox = document.getElementById('chatbox'); 
    const tabs = document.getElementsByClassName('tab'); 
    const apiKey = 'duffel_live_8c7IGwY5zLynTKISd2oLFLMRBw6Utce1u_kMpbccRRy';  

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function() {  
        const tabText = this.textContent;
        let message = '';  

        if (tabText === 'Vols') { 
          message = "Quelle est votre ville de départ ?";
          displayMessage(message);  
          displayDestinationCities(); 
        } else if (tabText === 'Hôtels') {  
          
          message = "Quel est votre hôtel ?";  
          displayMessage(message); 
        } else if (tabText === 'Villas') { 
        
          message = "Quel villa choisissez-vous ?";
          displayMessage(message);
        } else if (tabText === 'Appartement') {
          
          message = "Quel type appartement choisissez-vous ?";
          displayMessage(message);  
        }
      });
    }

    function displayMessage(message) { 
      const messageElement = document.createElement('p');
      messageElement.textContent = message;
      chatbox.appendChild(messageElement);
    }

    function displayDestinationCities() { 
      const cities = ["Paris", "Barcelone", "Dubaï", "New York", "Londres", "Tokyo", "Rome"];
      const destinationMessage = "Voici quelques villes de destination : "; 

      for (let i = 0; i < cities.length; i++) {
        destinationMessage += cities[i]; 

        if (i !== cities.length - 1) {
          destinationMessage += ", "; 
        }
      }

      displayMessage(destinationMessage);
    }

    displayMessage("Bonjour, je suis un assistant virtuel. Je suis là pour vous aider à planifier parfaitement votre prochain voyage ! Chattez avec moi ou cliquez sur l'une des options ci-dessous :");
  






