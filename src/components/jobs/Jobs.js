import React from 'react'
import SingleJob from './SingleJob'

const Jobs = ({ jobs, isLoading, isError, error } = {}) => {

    let content;
    if (isLoading) content = <p>Loading...</p>
    if (!isLoading && isError) content = <p>{error}</p>
    if (!isLoading && !isError && jobs.length <= 0) content = <p>No Job Found</p>
    if (!isLoading && !isError && jobs.length > 0) content = jobs.map((job) => <SingleJob key={job.id} job={job} />)
    return (
        <div className="jobs-list">
            {content}
        </div>
    )
}
export default Jobs