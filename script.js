const helplineData = [
  {
    heading: "National Emergency Number",
    subheading: "National Emergency",
    number: "999",
    extText: "All",
    icon: "icon_link_here"
  },
  {
    heading: "Ambulance Service",
    subheading: "Ambulance",
    number: "1994-999999",
    extText: "Health",
    icon: "icon_link_here"
  },
  {
    heading: "Electricity Helpline",
    subheading: "Electricity Outage",
    number: "16216",
    extText: "Electricity",
    icon: "icon_link_here"
  },
  {
    heading: "Police Helpline Number",
    subheading: "Police",
    number: "999",
    extText: "Police",
    icon: "icon_link_here"
  },
  {
    heading: "Women & Child Helpline",
    subheading: "Women & Child Helpline",
    number: "109",
    extText: "Help",
    icon: "icon_link_here"
  },
  {
    heading: "Brac Helpline",
    subheading: "Brac",
    number: "16445",
    extText: "NGO",
    icon: "icon_link_here"
  },
  {
    heading: "Fire Service Number",
    subheading: "Fire Service",
    number: "999",
    extText: "Fire",
    icon: "icon_link_here"
  },
  {
    heading: "Anti-Corruption Helpline",
    subheading: "Anti-Corruption",
    number: "106",
    extText: "Govt.",
    icon: "icon_link_here"
  },
  {
    heading: "Bangladesh Railway Helpline",
    subheading: "Bangladesh Railway",
    number: "163",
    extText: "Travel",
    icon: "icon_link_here"
  }
];

const mainCon = document.getElementById("main-lists");

helplineData.forEach((item, index)=> {
  mainCon.innerHTML += `
    <div class="flex flex-col px-5 py-5 rounded-xl bg-red-900">
      <div class="flex items-center justify-between">
          <img src="/assets/logo.png" class="w-8"/>

          <button class="fav-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
      </div>

      <h3 class="text-2xl text-black font-bold">${item.heading}</h3>
      <h4 class="text-md text-black font-normal">${item.subheading}</h4>
      <h4 class="text-3xl text-black font-bold pt-3">${item.number}</h4>
      <span class="block rounded-full bg-gray-200 px-3 py-2 w-max">${item.extText}</span>

      <div class="flex justify-between py-4">
          <button class="copy-button btn copy-text btn-outline" 
          data-number="${item.number}">
            Copy
          </button>
          
          <button class="call-num btn btn-active btn-success" data-index="${index}" 
          data-heading="${item.heading}" data-number="${item.number}">
            Call
          </button>
      </div>
    </div>
  `;
});


// Button Functionality
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
      window.alert(`Insufficient Coin to make call`);
      return;
    }
    
    window.alert('Making a call');
    coinCount = coinCount - 20;
    updateCoinCountInNav();


    const selectedButton = event.target;
    // Adding local Time
    const now = new Date();
    const localTime = now.toLocaleDateString([], { hour:'2-digit', minute:'2-digit' });

    const [heading, number] = [selectedButton.dataset.heading, selectedButton.dataset.number];
    const callEntry = {heading, number, localTime};
    // console.log(callEntry);
    callList.unshift(callEntry);

    // Removing prev Call History before rendering new History
    const prevHistory = document.querySelectorAll('.call-entry');
    prevHistory.forEach(el=>el.remove());
    
    callList.forEach((item,index)=>{
      secondCon.innerHTML += `
        <div class="call-entry flex items-center justify-between px-4 py-4">
          <span class="flex flex-col">
            <h6 class="text-xl text-black font-medium">${item.heading}</h6>
            <p class="text-md text-black">${item.number}</p>
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




// Upadating Value in Nav
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
    console.log('clicked');
    copyCount+=1;
    copyElement.innerText = `${copyCount}`;

    // Copying the number to ClipBoard
    const selectedButton = event.target;
    const numberToBeCopied = selectedButton.dataset.number;
    console.log(numberToBeCopied);

    navigator.clipboard.writeText(numberToBeCopied)
    .then(()=>{
      console.log("Copied to Clipboard : ", numberToBeCopied);
    })
    .catch(err => {
      console.error("Failed to copy : ", err);
    });
  });
});