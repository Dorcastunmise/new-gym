export const exerciseOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': promise.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options); //fetching url and providing additional options
  const data = await res.json(); //extract the data
  
  return data;
}