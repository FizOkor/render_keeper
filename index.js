import axios from 'axios';

const url = 'https://d-arena.onrender.com'
const interval = 1200000;
(function () {
  setInterval(()=>{
    console.log('Pinging: ', url, "Interval: ", interval, 'ms')

    axios.get(url)
    .then(response => console.log("Response:", response.status))
    .catch(err => console.log("Error:", err))
  }, interval)
})();