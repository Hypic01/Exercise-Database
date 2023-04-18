import ExploreBodyPart from './ExploreBodyPart'
import React, {useState, useEffect} from 'react';
import {getBodyParts} from '../util/getData';

const Explore = () => {

  const [bodyPart, setBodyPart] = useState([]);


  useEffect(() => {
    async function fetchData(){
      const data = await getBodyParts();
      setBodyPart(data);
    }
    fetchData();
  }, []);
  
  return (
    
    <div className="bg-gray-600 h-max w-full pt-16 flex flex-col justify-center items-center gap-8 ">
      <h1 className="text-white text-2xl">Explore by body parts</h1>
      <div className="grid grid-flow-col auto-cols-[20%] overflow-x-auto w-full py-8 justify-items-center overscroll-contain snap-x">
        {bodyPart.map((part) => (
            <ExploreBodyPart 
              key={part} 
              part={part} 
            />
        ))}
        
      </div>
    </div>
  )
}

export default Explore;