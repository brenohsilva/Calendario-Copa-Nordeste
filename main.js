function createGame(player1, hour, player2, titlefisrtteam, titlesecondteam) {
    return `
    
    <li>
        <img src="./assets/icon-${player1}.svg" title= "${titlefisrtteam}" alt="escudo do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" title= "${titlesecondteam}" alt="esudo do ${player2}">
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
    createCard('21/01', "sabado", createGame('fluminense', '15:30', 'csa', 'Fluminense do Piaui', 'CSA') 
    + createGame('vitoria', '17:30', 'santacruz', 'Vitoria-Ba', 'Santa Cruz'))
    
+
    createCard('21/01', "sabado", createGame('fortaleza', '17:30', 'campinense', 'Fortaleza', 'Campinense-PB')
    + createGame('sport', '19:30', 'abc', 'Sport Recife', 'ABC-RN' ))

+

    createCard('22/01', "domingo", createGame('atletico', '16:00', 'nautico', 'Atletico-BA', 'Nautico')
    + createGame('crb', '16:00', 'sergipe', 'CRB', 'Sergipe' ))

+

    createCard('22/01', "domingo", createGame('ferroviario', '18:00', 'ceara', 'Ferroviario', 'Ceara')
    + createGame('sampaio', '19:00', 'bahia', 'Sampaio Correa', 'Bahia' ))


