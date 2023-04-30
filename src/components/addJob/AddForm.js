import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setJob } from '../../redux/features/jobs/jobSlice';

const AddForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector((state) => state.job)
    const [jobTitle, setJobTitle] = useState('');
    const [jobType, setJobType] = useState('');
    const [jobSalary, setJobSalary] = useState('');
    const [deadline, setDeadline] = useState('');

    const reset = () => {
        setJobTitle('')
        setJobType('')
        setJobSalary('')
        setDeadline('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setJob({
            title: jobTitle,
            type: jobType,
            salary: jobSalary,
            deadline
        }));

        reset();
        navigate('/')
    }

    return (
        <div className="max-w-3xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="fieldContainer">
                    <label for="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                    <select id="lws-JobTitle" name="lwsJobTitle" required value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}>
                        <option value="" hidden selected>Select Job</option>
                        <option>Software Engineer</option>
                        <option>Software Developer</option>
                        <option>Full Stack Developer</option>
                        <option>MERN Stack Developer</option>
                        <option>DevOps Engineer</option>
                        <option>QA Engineer</option>
                        <option>Product Manager</option>
                        <option>Social Media Manager</option>
                        <option>Senior Executive</option>
                        <option>Junior Executive</option>
                        <option>Android App Developer</option>
                        <option>IOS App Developer</option>
                        <option>Frontend Developer</option>
                        <option>Frontend Engineer</option>
                    </select>
                </div>

                <div className="fieldContainer">
                    <label for="lws-JobType">Job Type</label>
                    <select id="lws-JobType" name="lwsJobType" required value={jobType} onChange={(e) => setJobType(e.target.value)}>
                        <option value="" hidden selected>Select Job Type</option>
                        <option>Full Time</option>
                        <option>Internship</option>
                        <option>Remote</option>
                    </select>
                </div>

                <div className="fieldContainer">
                    <label for="lws-JobSalary">Salary</label>
                    <div className="flex border rounded-md shadow-sm border-slate-600">
                        <span className="input-tag">BDT</span>
                        <input type="number" name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                            placeholder="20,00,000" value={jobSalary} onChange={(e) => setJobSalary(e.target.value)} />
                    </div>
                </div>

                <div className="fieldContainer">
                    <label for="lws-JobDeadline">Deadline</label>
                    <input type="date" name="lwsJobDeadline" id="lws-JobDeadline" required value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                </div>

                <div className="text-right">
                    <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit" disabled={isLoading}>
                        ADD
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddForm