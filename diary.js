import '/diary.css';
import { getEntries } from './entries.js';

const getEntriesBtn = document.querySelector('.get_entries');
getEntriesBtn.addEventListener('click', getEntries)


