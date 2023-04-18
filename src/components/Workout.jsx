import {useNavigate} from 'react-router-dom';

const Workout = (props) => {

  const navigate  = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate(`/${props.name}`, {state: {props}});
  }
  
  return (
    <div 
      onClick={clickHandler}
      className="h-[200px] w-[400px] p-6 bg-cyan-200 shadow-md rounded-md mb-[20px] flex flex-row justify-center items-start gap-8 cursor-pointer transition-all hover:translate-y-2 ">
      <div className="w-full h-full basis-1/2">
        <img 
          src={props.gifUrl}
          alt="workout picture"
          loading="lazy"
          className="w-full h-full rounded-md bg-contain"/>
      </div>
      <div className="flex flex-col basis-1/2">
        <h1 className="font-bold capitalize">{props.name}</h1>
        <h2 className="capitalize">{props.bodyPart}</h2>
      </div>
    </div>
  )
}

export default Workout;