var earnings, balance, expenses, totalbalance, picturesurl;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


earnings = [];
expenses = [];
balance = [];
let element_welcome = document.getElementById('welcome');
element_welcome.innerText = 'welcome to financial helper';
window.speechSynthesis.speak(new SpeechSynthesisUtterance('welcome to financial helper'));
picturesurl = ['https://i.ibb.co/xLqDhqZ/38-Motivational-Money-Quotes-for-Inspiration.png', 'https://i.ibb.co/TmFVC54/Financial-Freedom-Stickers-Zazzle-com.jpg', 'https://i.ibb.co/n8CNnt9/Life-Quotes.png', 'https://i.ibb.co/frvRLpS/Money-Quotes.png'];


document.getElementById('next').addEventListener('click', (event) => {
  if (!!picturesurl.length) {
    let element_imgcar = document.getElementById('imgcar');
    element_imgcar.setAttribute("src", picturesurl);
    picturesurl.push(picturesurl.shift());
  }

});

document.getElementById('addexpensesbtn').addEventListener('click', (event) => {
  let element_expenses = document.getElementById('expenses');
  expenses.push(getNumberOrString(document.getElementById('expensesinp').value));
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('expensesinp').value);

  element_expenses.appendChild(new_li);
  let element_totalexpenses = document.getElementById('totalexpenses');
  element_totalexpenses.innerText = expenses.reduce((a,b) => a+b, 0);

});

document.getElementById('addearningsbtn').addEventListener('click', (event) => {
  earnings.push(getNumberOrString(document.getElementById('earningsinp').value));
  let element_earning = document.getElementById('earning');
  let new_li2 = document.createElement('li');
  new_li2.innerText = getNumberOrString(document.getElementById('earningsinp').value);

  element_earning.appendChild(new_li2);
  let element_totalearning = document.getElementById('totalearning');
  element_totalearning.innerText = earnings.reduce((a,b) => a+b, 0);

});

document.getElementById('previous').addEventListener('click', (event) => {
  if (!!picturesurl.length) {
    let element_imgcar2 = document.getElementById('imgcar');
    element_imgcar2.setAttribute("src", picturesurl[0]);
    picturesurl.push(picturesurl.shift());
  }

});

document.getElementById('commentbtn').addEventListener('click', (event) => {
  let element_commentlist = document.getElementById('commentlist');
  let new_li3 = document.createElement('li');
  new_li3.innerText = getNumberOrString(document.getElementById('commentinp').value);

  element_commentlist.appendChild(new_li3);

});

document.getElementById('calculate').addEventListener('click', (event) => {
  balance = [earnings.reduce((a,b) => a+b, 0), expenses.reduce((a,b) => a+b, 0)];
  let element_totalbalance = document.getElementById('totalbalance');
  element_totalbalance.innerText = balance.reduce((a,b) => a+b, 0);
  totalbalance = balance.reduce((a,b) => a+b, 0);
  if (totalbalance > 0) {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance('You are rich hahaha'));
    let element_img = document.getElementById('img');
    element_img.setAttribute("src", 'https://i.ibb.co/8Xd03mZ/rich-people-poor-people.jpg');
  } else {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance('You need to work harder hahaha'));
    let element_img2 = document.getElementById('img');
    element_img2.setAttribute("src", 'https://i.ibb.co/jk7gmsX/100319-Poor-Audit-IRS.jpg');
  }

});