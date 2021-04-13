// const axios = require('axios');
// const CryptoJS = require("crypto-js");
//
// const main = async () => {
//     let ts = '1';
//     const publicKey = '366d13c242e7d58e1b048b5a8a52bd03';
//     const privateKey = '1522dd1e5cad26374167cff4ff8c10240d9caa56';
//     const hash = CryptoJS.MD5(ts+privateKey+publicKey).toString();
//
//     try {
//         const characterId = '1009148';
//         const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
//         console.dir(res.data.data.results[0].name);
//     } catch (err) {
//         console.log(err);
//     }
// }
//
// main()
