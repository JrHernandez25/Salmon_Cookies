const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tableElement = document.getElementById('sales-table');
// TODO:  create a comment below describing how this Constructor function works
// - what makes it a constructor function?
// - what do you think the CookieStand.all.push(all) method is doing?
// This constructor function is using an array to insert the this. and the properties that were put for them. But in this function there are two properties that are using empty arrays which will be filled in with different variables.
//Then finally the this will be pushed into the CookieStand with all its properties. A constructor function will alway have an array and its properties and it also starts with the word function.
// I think that the CookieStand.all.push(all) is going to grab all the this properties and insert them into the specific spots or put them all the way in the front of the array.
function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
 this.locationName = locationName;
 this.minCustomersPerHour = minCustomersPerHour;
 this.maxCustomersPerHour = maxCustomersPerHour;
 this.avgCookiesPerSale = avgCookiesPerSale;
 this.customersEachHour = [];
 this.cookiesEachHour = [];
 this.totalDailyCookies = 0;
 CookieStand.all.push(this);
}
// TODO: create a comment describing the method below
// - what does prototype mean?
// The method below is going to start to count a certain array starting from zero to its last one and it will go up by one each time.
// A prototype means that it is a mechcanism that inherits featurs from one another.
CookieStand.prototype.calcCustomersEachHour = function() {
 for (let i = 0; i < hours.length; i++) {
   this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
 }
};
CookieStand.prototype.calcCookiesEachHour = function() {
 this.calcCustomersEachHour();
 for (let i = 0; i < hours.length; i++) {
   const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
   this.cookiesEachHour.push(oneHour);
   this.totalDailyCookies += oneHour;
 }
};
CookieStand.prototype.render = function() {
 this.calcCookiesEachHour();
 const tableRow = document.createElement('tr');
 let tableDataElement = document.createElement('td');
 tableDataElement.textContent = this.locationName;
 tableRow.appendChild(tableDataElement);
 for (let i = 0; i < hours.length; i++) {
   tableDataElement = document.createElement('td');
   tableDataElement.textContent = this.cookiesEachHour[i];
   tableRow.appendChild(tableDataElement);
 }
 const tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = this.totalDailyCookies;
 tableRow.appendChild(tableHeaderElement);
 tableElement.appendChild(tableRow);
};
CookieStand.all = [];
// TODO: instantiate a new CookieStand object (with sample data) for Dubai, Paris, and Lima
new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 17, 78, 12.6);
new CookieStand('Dubai', 23, 65, 6.3);
new CookieStand('Paris', 23, 65, 6.3);
new CookieStand('Lima', 23, 65, 6.3);
function random(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makeHeaderRow() {
 const tableRow = document.createElement('tr');
 let tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = 'Locations';
 tableRow.appendChild(tableHeaderElement);
 for (let i = 0; i < hours.length; i++) {
   tableHeaderElement = document.createElement('th');
   tableHeaderElement.textContent = hours[i];
   tableRow.appendChild(tableHeaderElement);
 }
 tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = 'Location Totals';
 tableRow.appendChild(tableHeaderElement);
 tableElement.appendChild(tableRow);
}
// TODO: create a series of comments in this function where you are confused with what's happening
// - what about the code is confusing?
// - can you guess what it does?
function makeFooterRow() {
 const tableRow = document.createElement('tr');
 let tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = 'Hourly Totals for All Locations';
 tableRow.appendChild(tableHeaderElement);
 let totalOfTotals = 0;
 for (let i = 0; i < hours.length; i++) {
   let hourlyTotal = 0;
   for (let j = 0; j < CookieStand.all.length; j++){
     hourlyTotal += CookieStand.all[j].cookiesEachHour[i];
     totalOfTotals += CookieStand.all[j].cookiesEachHour[i];
   }
   tableHeaderElement = document.createElement('th');
   tableHeaderElement.textContent = hourlyTotal;
   tableRow.appendChild(tableHeaderElement);
 }
 tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = totalOfTotals;
 tableRow.appendChild(tableHeaderElement);
 tableElement.appendChild(tableRow);
}
(function renderTable() {
 makeHeaderRow();
 for(let i = 0; i < CookieStand.all.length; i++){
   CookieStand.all[i].render();
 }
 makeFooterRow();
})();
const ocean = document.getElementById('ocean'),
 waveWidth = 10,
 waveCount = Math.floor(window.innerWidth/waveWidth),
 docFrag = document.createDocumentFragment();
for(let i = 0; i < waveCount; i++){
 const wave = document.createElement('div');
 wave.className += ' wave';
 docFrag.appendChild(wave);
 wave.style.left = i * waveWidth + 'px';
 wave.style.webkitAnimationDelay = (i/100) + 's';
}
ocean.appendChild(docFrag);