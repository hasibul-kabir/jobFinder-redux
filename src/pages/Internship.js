import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import JobContainer from '../components/jobs/JobContainer'
import { fetchJobs } from '../redux/features/jobs/jobSlice';

const Internship = () => {
    const dispatch = useDispatch();
    const { jobs, isLoading, isError, error } = useSelector((state) => state.job);
    useEffect(() => {
        const type = "Internship"
        dispatch(fetchJobs(type))
    }, [dispatch]);

    return (
        <JobContainer jobs={jobs} isLoading={isLoading} isError={isError} error={error} />
    )
}

export default Internship