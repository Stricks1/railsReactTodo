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
    <div className="footer-info d-flex justify-content-between pl-4">
      <span className="align-self-center">{active} Items Left</span>
      <ul className="d-flex list-unstyled justify-content-between w-75 list-filter align-self-center" name="selOpt" id="selOpt" value={filter} >
        {
          FILTOPT.map(item => (
            <li className={`selectFilter ${ (filter === item) ? "selected-filter" : ""}`} key={item} onClick={e => changeFilterOpt(item)}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default FilterBar;
