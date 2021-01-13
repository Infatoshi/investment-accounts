// Investment Accounts Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");

let acc1 = Math.random() * 5000;
let acc2 = Math.random() * 5000;
let acc3 = Math.random() * 5000;
let acc4 = Math.random() * 5000;

// Global Variable
let accounts = [acc1, acc2, acc3, acc4];
let maxAmount = 5000; // account values should be b/t 0 and max

// Display Data
drawArray();

function drawArray() {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < accounts.length; i++) {
    divHeight = (accounts[i] / maxAmount) * 600; // Scale accounts to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "count-range") {
    countRange();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "hacker") {
    hackerAttack();
  } else if (selection === "stats") {
    investmentStats();
  } else if (selection === "add") {
    addAccount();
  } else if (selection === "remove-low") {
    removeLow();
  } else if (selection === "robin-hood") {
    robinHood();
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function countRange() {
  // Output the number of accounts with amounts between $2,000 and $4,000, inclusive

  outputEl.innerHTML = "Count Range";

  let count = 0;
  for (i = 0; i < accounts.length; i++) {
    if (accounts[i] >= 2000 & accounts[i] <= 4000) {
      count++;
      console.log(count);
    }
  }
}

function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000. 
  // Modify the investment account array to apply this donation.
  // Output the total amount of money that was donated.

  outputEl.innerHTML = "Generous Donor";
  let count = 0
  for (i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      accounts[i] += 500;
      count++;
      let totalDonated = count * 500
      console.log(totalDonated);


    }
  }
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the investment account array to apply this theft.
  // Output the total amount that was stolen.

  outputEl.innerHTML = "Hacker Attack";
  let fivePercent = maxAmount / 20;
  let totalStolen = 0;
  let allAccounts = (acc1 + acc2 + acc3 + acc4)
  for (let i = 0; i < accounts.length; i++) {
    accounts[i] -= fivePercent;
    totalStolen = allAccounts * 0.95;
    console.log(totalStolen);

  }
}

function investmentStats() {
  // Output the minimum account amount, the maximum account amount
  // and the average account amount.

  outputEl.innerHTML = "Investment Stats";
  let max = Math.max(...accounts);
  let min = Math.min(...accounts);
  console.log(max);
  console.log(min);
  let avg = (acc1 + acc2 + acc3 + acc4) / accounts.length;
  console.log(avg);

}

function addAccount() {
  // Prompt for a new account amount and add this to the investment account
  // array. Output a confirmation that a new account was added with an
  // opening amount of _______.

  outputEl.innerHTML = "Add Account";

  let newAmount = Math.floor(Math.random() * 5000);
  console.log(newAmount);
  accounts.push(newAmount);

  alert('New account added with an opening amount of $' + newAmount);
}

function removeLow() {
  // Remove all accounts that are below $500.
  // Output how many accounts were removed.

  outputEl.innerHTML = "Remove Low Accounts";

  for (i = 0; i < accounts.length; i++) {
    if (accounts[i] < 500) {
      accounts.splice(i, 1);
    }
  }
}

function robinHood() {
  // Steal from the rich and give to the poor.
  // Take $400 from every account that has over $4000.
  // Then evenly distribute the total amount taken between all the
  // accounts that have less than $1000.
  // Output how many accounts received money and 
  // how much each account received.
  // 

  outputEl.innerHTML = "Robin Hood";


  let richCount = 0;
  let poorCount = 0;
  let final = 0; // final is the amount disributed to each poor account
  
  for (i = 0; i < accounts.length; i++) {
    if (accounts[i] > 4000) {
      richCount += 1;
    } else if (accounts[i] < 1000) {
      poorCount += 1;
      console.log(poorCount);
    }
  }
  // defines # of poor & rich accounts

  final = (richCount * 400) / poorCount;
  if (richCount != 0 && poorCount != 0) {
    for (i = 0; i < accounts.length; i++) {
      if (accounts[i] > 4000) {
        accounts[i] -= 400;
        // removes 400 from rich accounts
      } else if (accounts[i] < 1000) {
        accounts[i] += final;
        console.log(final);
      } 
    }

  }
}