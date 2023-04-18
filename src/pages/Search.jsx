import {Link, useLocation, useParams} from 'react-router-dom';
import { Pagination } from '@mui/material';
import {useState} from 'react';
import {Workout} from '../components'

const Search = () => {

  let {id} = useParams();
  let {search} = useParams();
  const {state} = useLocation();

  const itemsPerPage = 10;
  const pageLength = state && Math.ceil(state.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentWorkouts, setCurrentWorkouts] = useState([]);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  
  return (
    <section className="p-12 justify-items-center flex flex-col gap-8">
      <h1 className="font-bold text-4xl normal-case ">{id == 'search' ? `Searched: ${search}` : `${search} exercises`}</h1>
       
      <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 justify-items-center min-h-[500px]">
        {state && state.length ? state.slice(itemsPerPage * (currentPage - 1), itemsPerPage * currentPage).map((workout) => (
        
          <Workout key={workout.id} {...workout}/>
        
        )) : <div className="col-span-2 flex items-center"><h1 className="text-center font-bold text-2xl">No result!</h1></div>}
      </div>
      <Pagination 
        count={pageLength} 
        color="primary" 
        page={currentPage} 
        onChange={handleChange}
        className="self-center"/>
    </section>
  )
}

export default Search;