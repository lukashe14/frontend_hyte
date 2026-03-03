import {fetchData} from './fetch.js';


const renderFruitList = (items) => {
  console.log('Teen kohta listan');

  const list = document.querySelector('.fruitlist');
  list.innerHTML = "";


  items.forEach(item => {
    console.log(item.name);
    let li = document.createElement('li');
    li.textContent = `Hedelmän id ${item.id} nimi ${item.name}`;
    list.appendChild(li);
  })

};
const getItems = async () => {

  const items = await fetchData('http://localhost:3000/api/items');

  if (items.error){
    console.log(items.error);
    return;
  }
renderFruitList(items);

};

const getItemById = async (event) => {

  event.preventDefault();

  const idInput = document.getElementById('itemId');
  const itemId = idInput.value;
  console.log(itemId);

  const url = `http://localhost:3000/api/items/${itemId}`;

  const options = {
    method: 'Get',
  }

  const item = await fetchData(url, options);

  if (item.error){
    console.log(item.error);
    return;
  }

  console.log(item);
  alert(`Item found :) ${item.name}`);

};

const deleteItemById = async (event) => {

  event.preventDefault();

  const idInput = document.getElementById('itemId');
  const itemId = idInput.value;
  console.log(itemId);

  if(!itemId) {
    console.log('Item ID missing, fill in the details!')
    return;
  }

  const confirmed = confirm(`Oletko varma etä haluat poistaa itemin: ${itemId}`);

  //jos käyttäjä painaa cancel niin palautuu
  if(!confirmed) return;

  const url = `http://localhost:3000/api/items/${itemId}`;

  const options = {
    method: 'DELETE',
  }

  const item = await fetchData(url, options);

  if (item.error){
    console.log(item.error);
    return;
  }

  console.log(item);
  alert(`${item.message}`);

  //päivitä UI niin käyttäjä tietää että item poistui
  await getItems();

};

const addItem = async (event) => {

  event.preventDefault();

  const form = document.querySelector('ad-item-form');
  const fruitName = document.querySelector('#newItemName').value.trim();
  const fruitWeight = document.querySelector('#newItemWeight').value.trim();


  if(!fruitName) {
    alert('Nimi puuttuu!');
    return;
  }



  //jos käyttäjä painaa cancel niin palautuu


  const url = `http://localhost:3000/api/items`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        name: fruitName,
        weight: fruitWeight,
      }
    ),
  };

  const item = await fetchData(url, options);

  if (item.error){
    console.log(item.error);
    return;
  }

  console.log(item);
  alert(`${item.message}`);

  //päivitä UI niin käyttäjä tietää että item poistui
  await getItems();

};



export {getItems,getItemById,deleteItemById, addItem};
