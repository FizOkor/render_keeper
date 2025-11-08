import axios from 'axios';

const url = 'https://d-arena.onrender.com'
const interval = 1200000;
(function () {
  setInterval(()=>{
    console.log(`[${new Date().toISOString()}] Pinging: ${url}`);

    axios.get(url)
    .then(response => console.log("✅ Response:", response.status))
    .catch(err => console.log("❌ Error:", err.message))
  }, interval)
  console.log('\n')
})();