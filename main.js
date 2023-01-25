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
    createCard('04/02', "sabado", createGame('ceara', '17:30', 'sampaio', 'Ceará', 'Sampaio Correa') 
    + createGame('nautico', '17:30', 'crb', 'Nautico', 'CRB'))
    
+
    createCard('04/02', "sabado", createGame('abc', '18:30', 'fortaleza', 'ABC-RN', 'Fortaleza')
    + createGame('bahia', '20:30', 'ferroviario', 'Bahia', 'Ferroviário' ))

+

    createCard('05/02', "domingo", createGame('sergipe', '16:00', 'atletico', 'Sergipe', 'Atletico-BA')
    + createGame('csa', '16:00', 'vitoria', 'CSA', 'Vitoria-BA' ))

+

    createCard('05/02', "domingo", createGame('campinense', '18:00', 'sport', 'Campinense-PB', 'Sport Recife')
    + createGame('santacruz', '20:00', 'fluminense', 'Santa Cruz', 'Fluminense do Piaui' ))


