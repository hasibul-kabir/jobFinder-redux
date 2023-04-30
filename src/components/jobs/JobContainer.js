import React from 'react'
import Jobs from './Jobs'
import Search from '../customizeView/Search';
import Sort from '../customizeView/Sort';
import { useSelector } from 'react-redux';

const JobContainer = ({ jobs, isLoading, isError, error }) => {
    const { sortKey, searchKey } = useSelector((state) => state.job);

    let sorted;
    if (sortKey === "default") {
        sorted = jobs
    }
    if (sortKey === "lowToHigh") {
        sorted = [...jobs].sort((a, b) => {
            return Number(a.salary) - Number(b.salary)
        })
    }

    if (sortKey === "highToLow") {
        sorted = [...jobs].sort((a, b) => {
            return Number(b.salary) - Number(a.salary)
        })
    }
    const search = (sorted) => {
        return sorted.filter((item) => item.title.toLowerCase().includes(searchKey.toLowerCase()))
    }


    return (
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                    <h1 className="lws-section-title">All Available Jobs</h1>
                    <div className="flex gap-4">
                        <Search />
                        <Sort />
                    </div>
                </div>

                <Jobs jobs={search(sorted)} isLoading={isLoading} isError={isError} error={error} />

            </main>
        </div>
    )
}

export default JobContainer