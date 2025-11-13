// // Chat GPT solution
// const hourHand = document.querySelector(".handle__hour");
// const minuteHand = document.querySelector(".handle__minute");
// const secondHand = document.querySelector(".handle__second");

// function updateClock() {
//   const now = new Date();
//   const seconds = now.getSeconds();
//   const minutes = now.getMinutes();
//   const hours = now.getHours();

//   // calculate degrees
//   const secondDeg = seconds * 6; // 360/60
//   const minuteDeg = minutes * 6 + seconds * 0.1; // 6 per min + smooth move
//   const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 30 per hr + half per min

//   // apply transforms — keep your CSS base transforms and only add rotation
//   secondHand.style.transform = `translateX(-50%) rotate(${secondDeg + 90}deg)`;
//   minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg + 90}deg)`;
//   hourHand.style.transform = `translateX(-50%) rotate(${hourDeg + 90}deg)`;
// }

// // run immediately and update every second
// updateClock();
// setInterval(updateClock, 1000);





// David's solution 


// 