// Player select area
let playerArray = [];

function display(playerCount) {

    const selectBody = document.getElementById('list');
    selectBody.innerHTML = '';

    for (let i = 0; i < playerCount.length; i++) {
        const name = playerArray[i].playerName;
        const ul = document.createElement('ul');
        ul.innerHTML = `
        <li>${i + 1, name}</li>        
                
        `;
        selectBody.appendChild(ul)
    }
}

function addPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerObject = {
        playerName: playerName
    }
    playerArray.push(playerObject)
    document.getElementById('total-added-player').innerText = playerArray.length;
    display(playerArray)

    // Validation
      if(playerArray.length >= 5){
        playerArray.length =5;
        alert('Only five player can add')
      }
      

}

// Calculate Button area 
document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerField = document.getElementById('per-player-field');
    const newPerPlayerAmountString = perPlayerField.value;
    const newPerPlayerAmount = parseFloat(newPerPlayerAmountString);
    perPlayerField.value = '';

    const totalAddedPlayer = document.getElementById('total-added-player');
    const previousTotalAddedPlayerString = totalAddedPlayer.innerText;
    const previousTotalAddedPlayer = parseFloat(previousTotalAddedPlayerString);

    const playerExpenses = document.getElementById('player-expenses');
    const previousPlayerExpensesString = playerExpenses.innerText;
    const previousPlayerExpenses = parseFloat(previousPlayerExpensesString);

    const playerExpensesTotal = newPerPlayerAmount * previousTotalAddedPlayer;
    playerExpenses.innerText = playerExpensesTotal;

    // Calculate Total Button area 
    document.getElementById('calculate-total-btn').addEventListener('click', function () {
        const managerField = document.getElementById('manager');
        const newManagerAmountString = managerField.value;
        const newManagerAmount = parseFloat(newManagerAmountString);
        managerField.value = '';

        const coachField = document.getElementById('coach');
        const newCoachAmountString = coachField.value;
        const newCoachAmount = parseFloat(newCoachAmountString);
        coachField.value = '';

        const newTotalExpenses = document.getElementById('total-expenses');
        const previousTotalExpensesString = newTotalExpenses.innerText;
        const previousTotalExpenses = parseFloat(previousTotalExpensesString);

        const totalExpenses = playerExpensesTotal + previousTotalExpenses + newManagerAmount + newCoachAmount;
        newTotalExpenses.innerText = totalExpenses;

    })
})

// Button disabled function
const buttons = document.getElementsByClassName('select-button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}
