import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { search } from '../../redux/features/jobs/jobSlice';

const Search = () => {
    const [searchWith, setSearchWith] = useState('');
    const dispatch = useDispatch();

    dispatch(search(searchWith));

    return (
        <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" value={searchWith} onChange={(e) => setSearchWith(e.target.value)} />
        </div>
    )
}

export default Search