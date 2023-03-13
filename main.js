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
    createCard('04/03', "sabado", createGame('campinense', '17:30', 'ferroviario', 'Campinense-PB', 'Ferroviário') 
    + createGame('nautico', '17:30', 'sport', 'Nautico', 'Sport Recife'))
    
+
    createCard('04/03', "sabado", createGame('csa', '17:30', 'crb', 'CSA', 'CRB')
    + createGame('abc', '20:00', 'atletico', 'ABC-RN', 'Atletico-BA' ))

+

    createCard('05/03', "domingo", createGame('sergipe', '16:00', 'fluminense', 'Sergipe', 'Fluminense do Piaui')
    + createGame('bahia', '16:00', 'vitoria', 'Bahia', 'Vitoria-BA' ))

+

    createCard('05/03', "domingo", createGame('ceara', '18:30', 'fortaleza', 'Ceará', 'Fortaleza')
    + createGame('santacruz', '18:30', 'sampaio', 'Santa Cruz', 'Sampaio Correa' ))


