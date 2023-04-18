import {TextField} from '@mui/material'; 
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {getExercises} from '../util/getData';

const Hero = () => {

  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate  = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await getExercises(search);
    setResult(data);
    navigate(`/search/${search}`, { state: data });
  }

  function handleImageLoad() {
    setImageLoaded(true);
  }
  
  return (
    <section className="relative min-h-[620px] flex p-16 justify-center">
      <img
        //사진: Unsplash의Jonathan Borba
            src='image.jpg'
            alt='main img'
            onLoad={handleImageLoad}
            className="absolute z-[-1] w-full top-[0] opacity-[.85] bg-cover top-[0] left-[0]" />
      <div className="flex h-max items-center gap-16 w-full max-w-[1200px] justify-center">
{/*         <div>
          <Player
            autoplay
            loop
            src="https://assets5.lottiefiles.com/packages/lf20_b9xaAN.json"
            style={{ height: '300px', width: '300px' }}
          />
        </div> */}
        <div className="flex flex-col gap-8 w-[70%] items-center">
          
          <h1 className="text-5xl font-bold text-center leading-tight text-white">Workout Database</h1>
          <h2 className="text-white">Search for more than 100+ workouts, with GIFs of each exercises</h2>
          {imageLoaded && <form onSubmit={handleSearch} className="bg-slate-100 rounded-md">
            <TextField id="filled-basic" label="Search by exercise name..." variant="filled"
              value={search} 
              onChange={(event) => setSearch(event.target.value)} 
              className="w-[400px]"
            />
          </form>}
        </div>
      </div>
      
    </section>
  )
}

export default Hero;
