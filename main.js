function createGame(player1, hour, player2, titlefisrtteam, titlesecondteam) {
    return `
    
    <li>
        <img src="./assets/icon-${player1}.svg" title= "${titlefisrtteam}" alt="escudo do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" title= "${titlesecondteam}" alt="escudo do ${player2}">
    </li>
    
    `
}


let delay = 0;

function createCard(date, day, games) {
    delay += 0.3;
    return `
    <div class="card" style='animation-delay: ${delay}s' >
        
    <h2>${date} <span>${day}</span></h2>
        
        <ul>
            ${games}                
        </ul>

    </div>
    
    `
}

document.querySelector("#cards").innerHTML =     
    createCard('22/03', "quarta-feira", createGame('bahia', '21:30', 'crb', 'Bahia', 'CRB') 
    + createGame('abc', '21:30', 'fluminense', 'ABC-RN', 'Fluminense do Piaui'))
    
+
    createCard('22/03', "quarta-feira", createGame('csa', '21:30', 'sport', 'CSA', 'Sport Recife')
    + createGame('sergipe', '21:30', 'sampaio', 'Sergipe', 'Sampaio Correa' ))

+

    createCard('22/03', "quarta-feira", createGame('campinense', '21:30', 'vitoria', 'Campinense-PB', 'Vitória-BA')
    + createGame('santacruz', '21:30', 'fortaleza', 'Santa Cruz', 'Fortaleza' ))

+

    createCard('22/03', "quarta-feira", createGame('ceara', '21:30', 'atletico', 'Ceará', 'Atletico - BA')
    + createGame('nautico', '21:30', 'ferroviario', 'Náutico', 'Ferroviário' ))


