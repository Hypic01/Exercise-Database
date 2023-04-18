import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {getExercisesByBodyParts} from '../util/getData';

const ExploreBodyPart = ({part}) => {

  const [result, setResult] = useState([]);
  
  const navigate  = useNavigate();
  
  const clickHandler = async (e) => {
    e.preventDefault();
    const data = await getExercisesByBodyParts(part);
    setResult(data);
    navigate(`/explore/${part}`, { state: data })
  }
  
  return (
    <div 
      onClick={clickHandler}
      className="w-[100px] h-[100px] bg-gray-400 rounded-md flex justify-center items-center text-white snap-center cursor-pointer">
      <h1 className="capitalize">{part}</h1>
    </div>
  )
}

export default ExploreBodyPart;