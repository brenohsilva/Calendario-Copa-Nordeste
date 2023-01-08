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
    createCard('08/01', "domingo", createGame('csa', '16:00', 'america', 'CSA', 'America-RN') 
    + createGame('confianca', '16:00', 'ferroviario', 'Confiança', 'Ferroviario'))
    
+
    createCard('08/01', "domingo", createGame('vitoria', '16:00', 'jacuipense', 'Vitoria-BA', 'Jacuipense-BA')
    + createGame('santacruz', '19:15', 'botafogo', 'Santa Cruz', 'Botafogo-PB' ))


