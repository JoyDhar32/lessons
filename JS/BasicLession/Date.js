const date= new Date();
const year = date.getFullYear(); //
const month = date.getMonth(); 
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const time = date.getTime();
const dateStr = date.toString();
const utc = date.toUTCString();
const iso = date.toISOString();
const locale = date.toLocaleString();
const localeDate = date.toLocaleDateString();
const localeTime = date.toLocaleTimeString();
const dateJSON = date.toJSON();
const dateValue = date.valueOf();
const dateUTC = date.getUTCDate();
const monthUTC = date.getUTCMonth();
const yearUTC = date.getUTCFullYear();
const hoursUTC = date.getUTCHours();
const minutesUTC = date.getUTCMinutes();
const secondsUTC = date.getUTCSeconds(); 
const monthString= date.toLocaleString('default', { month: 'long' }); // 
const stringMonth= date.getMonth().toString();

// ⭐ Date Function ⭐