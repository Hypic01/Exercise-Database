const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ffe1c78f77msh599ff8ac5485eeap1943e7jsne7a7bcd92ac1',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

const fetchData = async (url) => {
  const res = await fetch(url, options);

  const data = await res.json(); // wait for the promise to resolve with JSON data

  return data;
}

export async function getExercises(search){
    const url = 'https://exercisedb.p.rapidapi.com/exercises/name/' + search;

    return fetchData(url);
  }

export async function getBodyParts(){
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

    return fetchData(url);
  }

export async function getExercisesByBodyParts(bodyPart){
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + bodyPart;

  return fetchData(url);
}