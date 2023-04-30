import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sort } from '../../redux/features/jobs/jobSlice';

const Sort = () => {
    const { sortKey } = useSelector((state) => state.job)
    const [sortOrder, setSortOrder] = useState(sortKey);
    const dispatch = useDispatch();

    dispatch(sort(sortOrder))
    return (
        <select id="lws-sort" name="sort" autocomplete="sort" className="flex-1" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="default">Default</option>
            <option value="lowToHigh">Salary (Low to High)</option>
            <option value="highToLow">Salary (High to Low)</option>
        </select>
    )
}

export default Sort