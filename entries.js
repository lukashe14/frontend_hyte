import {fetchData} from './fetch.js';

const diaryContainer = document.querySelector('diary-card-area');

const getEntries = async (event) => {
	const url = 'http://localhost:3000/api/entries';
	let headers = {};
	let token = localStorage.getItem('token');
	console.log(token);
	if (token) {
		headers = { Authorization: `Bearer ${token}` };
	}
	const options = {
		headers: headers,
	};

	const response = await fetchData(url, options);

	if (response.error) {
		console.error('Error login in:', response.error);
		return;
	}

	if (response.message) {
		console.log(response.message, 'success');

	}

	console.log(response);

  diaryContainer.innerHTML = '';
  response.forEach(entry => {
    //luodaan aina yksittäinen entry
    console.log(entry);

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = <span>${entry.notes}</span>

    diaryContainer.appendChild(card);

  });
};




export {getEntries}
