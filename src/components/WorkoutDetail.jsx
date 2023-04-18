import {useLocation, useParams} from 'react-router-dom';

const WorkoutDetail = () => {
  let {exercise} = useParams();

  const {state} = useLocation(); 
  const data = state.props;
  console.log(data);
  return (
    <div>
      <div className="flex flex-row p-16 justify-between">
        <div>
          <img
            src={data.gifUrl}
            alt="exercise gif"
            className="" />
        </div>
        <div className="flex flex-col text-end gap-2 max-w-[50%]">
          <h1 className="text-4xl capitalize">{data.name}</h1>
          <h2 className="text-xl capitalize">{data.bodyPart} / {data.target}</h2>
          <h2 className="text-xl capitalize">{data.equipment}</h2>
          <p className="mt-16">This exercise targets {data.bodyPart}, especially {data.target} effectively. <br/>Perform this exercise by using {data.equipment}. <br/>Try to focus on your {data.target} while performing this exercise in order to establish Mind-Muscle Connection.</p>
        </div>
      </div>
    </div>
  )
}

export default WorkoutDetail;