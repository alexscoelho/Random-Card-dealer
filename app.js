var card = document.querySelector(".card");
window.onload = function() {
    
    function randomSuite() {
        let suites = ['heart','spades','clubs','diamonds'];
        return suites[Math.floor(Math.random() * 4)];
    }

    function randomNumber() {
        let value = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
        return value[Math.floor(Math.random() * 13)];
    }
    
    let suiteRandom = randomSuite();
    let numberRandom = randomNumber();
    
    card.innerHTML= `<span class="top-suite ${suiteRandom}"></span><span class="number">${numberRandom}</span><span class="bottom-suite ${suiteRandom}"></span>`;

    card.addEventListener("click",flipTheCard);
    function flipTheCard() {
        
         if(card.classList.contains("card")) {
            card.className = "card-back";
            card.innerHTML = "";
        } else {
            card.className = "card";
            card.innerHTML = `<span class="top-suite ${suiteRandom}"></span><span class="number">${numberRandom}</span><span class="bottom-suite ${suiteRandom}"></span>`;
        }
    } 
} 

 


