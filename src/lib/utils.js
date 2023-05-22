let API_URL = process.env.REACT_APP_BASE_URL;
let ts = Date.now().toString();
ts = 1;
let apiKey = process.env.REACT_APP_API_KEY;
let privateKey = process.env.REACT_APP_PRIVATE_KEY;
// let hash = getHash(ts, privateKey, apiKey);
let hash = "4c7a458f59c931c6627356767a316946";

const fetchHeroes = async (value) => {
  let heroUrl = `${API_URL}/v1/public/characters`;
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data.data.results);
    return data.data.results;
  } catch (err) {
    console.error(err);
    return;
  }
};

const fetchHero = async (id) => {
  let heroUrl = `${API_URL}/v1/public/characters/${id}`;
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  // let ts = Date.now().toString();
  // ts = 1;
  // let apiKey = process.env.REACT_APP_API_KEY;
  // let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  // let hash = getHash(ts, privateKey, apiKey);
  //let hash = "537c2064669d48bf12807cc16f272b3b";

  try {
    let response = await fetch(url);
    let data = await response.json();
    return data.data.results;
  } catch (err) {
    console.error(err);
    return;
  }
};

//export default fetchHeroes;
export { fetchHeroes, fetchHero };
