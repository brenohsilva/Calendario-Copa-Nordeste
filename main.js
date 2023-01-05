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
    createCard('05/01', "quinta", createGame('vitoria', '19:30', 'cordino', 'Vitoria-BA', 'Cordino-MA') 
    + createGame('ferroviario', '20:00', 'asa', 'Ferroviario', 'ASA-AL') 
    + createGame('csa', '20:00', 'potiguar', 'Ferroviario', 'ASA-AL')
    + createGame('america', '20:00', 'motoclub', 'America-RN', 'Potiguar-RN'))
    
+
    createCard('05/01', "quinta", createGame('confianca', '20:00', 'sousa', 'Confiança', 'Sousa-PB')
    + createGame('jacuipense', '20:00', 'altos', 'Jacuipense-BA', 'Altos-PI' )
    + createGame('botafogo', '21:30', 'retro', 'Botafogo-PB', 'Retrô-PE')
    + createGame('santacruz', '21:30', 'caucaia', 'Santa Cruz', 'Caucaia-CE'))


