import React from 'react';
import { useDispatch } from 'react-redux';
import { ChangeFilter } from '../actions/changeFilter';

const FilterBar = ({ filter, active }) => {
  const FILTOPT = ['All',
    'Active',
    'Completed',
  ];

  const dispatch = useDispatch();

  function changeFilterOpt(filter) {
    dispatch(ChangeFilter(filter));
  };

  return (
    <div>
      <span>{active} Items Left</span>
      <ul name="selOpt" id="selOpt" value={filter} >
        {
          FILTOPT.map(item => (
            <li key={item} onClick={e => changeFilterOpt(item)}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default FilterBar;
