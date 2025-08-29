const helplineData = [
  {
    heading: "National Emergency Number",
    subheading: "National Emergency",
    number: "999",
    extText: "All",
    icon: `./assets/emergency.png`,
  },
  {
    heading: "Ambulance Service",
    subheading: "Ambulance",
    number: "1994-999999",
    extText: "Health",
    icon: `./assets/ambulance.png`,
  },
  {
    heading: "Electricity Helpline",
    subheading: "Electricity Outage",
    number: "16216",
    extText: "Electricity",
    icon:`./assets/emergency.png`,
  },
  {
    heading: "Police Helpline Number",
    subheading: "Police",
    number: "999",
    extText: "Police",
    icon: `./assets/police.png`,
  },
  {
    heading: "Women & Child Helpline",
    subheading: "Women & Child Helpline",
    number: "109",
    extText: "Help",
    icon: `./assets/police.png`,
  },
  {
    heading: "Brac Helpline",
    subheading: "Brac",
    number: "16445",
    extText: "NGO",
    icon: `./assets/brac.png`,
  },
  {
    heading: "Fire Service Number",
    subheading: "Fire Service",
    number: "999",
    extText: "Fire",
    icon: `./assets/fire-service.png`,
  },
  {
    heading: "Anti-Corruption Helpline",
    subheading: "Anti-Corruption",
    number: "106",
    extText: "Govt.",
    icon: `./assets/ambulance.png`,
  },
  {
    heading: "Bangladesh Railway Helpline",
    subheading: "Bangladesh Railway",
    number: "163",
    extText: "Travel",
    icon: `./assets/Bangladesh-Railway.png`,
  }
];

const mainCon = document.getElementById("main-lists");

helplineData.forEach((item, index)=> {
  mainCon.innerHTML += `
    <div class="flex flex-col px-5 py-5 rounded-xl bg-white shadow-md h-full justify-between">
      <div class="flex items-center justify-between">

          <div class="bg-red-100 p-2 rounded-lg">
            <img src="${item.icon}" class="w-8"/>
          </div>

          <button class="fav-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-red-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
      </div>

      <h3 class="text-xl text-black font-bold md:py-1">${item.heading}</h3>
      <h4 class="text-lg text-gray-700 font-light">${item.subheading}</h4>

      <div class="flex flex-col gap-2">
        <h4 class="text-3xl text-black font-bold pt-3">${item.number}</h4>
        <span class="block rounded-full bg-gray-100 px-4 py-2 w-max">${item.extText}</span>
      </div>
      

      <div class="flex gap-3 py-4">
          <button class="copy-button btn copy-text btn-outline w-max flex-1 rounded-lg" 
            data-number="${item.number}"
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
              </svg>
            </span>
            <span>
              Copy
            </span>
            
          </button>
          
          <button class="call-num btn btn-active bg-green-500 w-max flex-1 rounded-lg text-white" data-index="${index}" 
            data-heading="${item.heading}" data-number="${item.number}"
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </span>
            <span>
              Call
            </span>
            
          </button>
      </div>
    </div>
  `;
});


// Button Functionality ---
// Adding to Call List
const secondCon = document.getElementById("call-entries");
const callButons = document.querySelectorAll('.call-num');
let callList = [];

// Coin Element
const coinElement = document.getElementById('coin-count');
let coinCount = 100;

callButons.forEach(button=> {
  button.addEventListener('click', (event)=> {
    event.preventDefault();

    // Checking for Coins First
    const canMakeCall = coinCount >=20 ? true : false;
    if (!canMakeCall) {
      window.alert(`Insufficient Coin to make call. Need minimum 20 coins to make a call.`);
      return;
    }

    // If there's enough coin (coin>20) then make call
    const selectedButton = event.currentTarget;
    const [heading, number] = [selectedButton.dataset.heading, selectedButton.dataset.number];

    // Show Alert Window
    window.alert(`Calling ${heading} at ${number}...`);

    // Update Coin Count
    coinCount = coinCount - 20;
    updateCoinCountInNav();

    // Adding local Time
    const now = new Date();
    const localTime = now.toLocaleString('en-US', { hour:'numeric', minute:'numeric', hour12:true });

    // Add the call to Call History
    const callEntry = {heading, number, localTime};
    callList.unshift(callEntry);

    // Removing prev Call History before rendering new History
    const prevHistory = document.querySelectorAll('.call-entry');
    prevHistory.forEach(el=>el.remove());
    
    callList.forEach((item,index)=>{
      secondCon.innerHTML += `
        <div class="call-entry flex items-center justify-between px-4 py-2 bg-gray-100 rounded-xl shadow-sm">
          <span class="flex flex-col">
            <h6 class="text-lg text-black font-medium">${item.heading}</h6>
            <p class="text-md text-gray-700">${item.number}</p>
          </span>
                
          <span class="block text-sm text-black font-thin">${item.localTime}</span>

        </div>
      `
    });
    
  });
});


// Clearing History
const clearButton = document.querySelector('.call-clear');
clearButton.addEventListener('click', (event)=> {
  event.preventDefault();
  callList.length = 0;
  secondCon.innerHTML = "";
});

// Upadating Value in Nav -----
// 1) Upadting Coin Count
const updateCoinCountInNav = () => {
  coinElement.innerText = `${coinCount}`;
}

// 2) Upadting Fav Count
const favButtons = document.querySelectorAll('.fav-button');
const favElement = document.getElementById('fav-count');
let favCount = 0;
favButtons.forEach(button=> {
  button.addEventListener('click', ()=> {
    favCount+=1;
    favElement.innerText = `${favCount}`;
  });
});

// 3) Upadating Copy Count
const copyButtons = document.querySelectorAll('.copy-button');
const copyElement = document.getElementById('copy-count');
let copyCount = 0;
copyButtons.forEach(button=> {
  button.addEventListener('click', (event)=> {
    event.preventDefault();

    // Getting the number
    const selectedButton = event.currentTarget;
    const numberToBeCopied = selectedButton.dataset.number;
    
    // Show Alert Window
    window.alert(`Number successfully copied: ${numberToBeCopied}`);

    // Updating the count
    copyCount+=1;
    copyElement.innerText = `${copyCount}`;

    // Copying the number to ClipBoard --
    // console.log(numberToBeCopied);
    navigator.clipboard.writeText(numberToBeCopied)
    .then(()=>{
      console.log("Copied to Clipboard : ", numberToBeCopied);
    })
    .catch(err => {
      console.error("Failed to copy : ", err);
    });
  });
});