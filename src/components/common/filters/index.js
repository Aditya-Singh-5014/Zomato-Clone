import React from 'react';
import "./filters.css";
import FilterItem from './filteritem';

const Filters = ( {filterLists} ) => {
  return (
    <div className='filters'>
      {filterLists && filterLists.map((filter)=>{
        return(
            <FilterItem filter={filter} key={filter.id}/>
        )
      })}
    </div>
  )
}

export default Filters;