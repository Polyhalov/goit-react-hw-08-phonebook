import { setFilter } from 'components/Redux/contacts/filterSlice';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const onInputChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };
    return (
      <div>
        <label className={css.filterLabel}>Find contacts by Name </label>
        <input
          className={css.filterName}
          type="text"
          name="filter"
          placeholder="Enter filter"
          onChange={onInputChange}
        />
      </div>
    );
  }


