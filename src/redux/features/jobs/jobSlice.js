import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJob, deleteJob, editJob, getJobs } from "./jobAPI"

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: '',
    sortKey: 'default',
    searchKey: ''
}

//async thunk
export const fetchJobs = createAsyncThunk("job/fetchJobs", async (type) => {
    const jobs = await getJobs(type);
    return jobs;
})

export const setJob = createAsyncThunk("job/addJob", async (data) => {
    const job = await addJob(data);
    return job;
})

export const updateJob = createAsyncThunk("job/editJob", async ({ id, data }) => {
    const job = await editJob({ id, data });
    return job;
})

export const removeJob = createAsyncThunk("job/deleteJob", async (id) => {
    const job = await deleteJob(id);
    return job;
})

//manage reducer

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        sort: (state, action) => {
            state.sortKey = action.payload
        },
        search: (state, action) => {
            state.searchKey = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.jobs = action.payload
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isLoading = false
                state.fulfilled = []
                state.isError = true
                state.error = action.error?.message
            })
            //add
            .addCase(setJob.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(setJob.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.jobs.push(action.payload)
            })
            .addCase(setJob.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error?.message
            })
            //edit
            .addCase(updateJob.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(updateJob.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                const indexToEdit = state.jobs?.findIndex((element) => element.id === action.payload.id)
                state.jobs[indexToEdit] = action.payload
            })
            .addCase(updateJob.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error?.message
            })
            //delete
            .addCase(removeJob.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(removeJob.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.jobs = state.jobs.filter((element) => element.id !== action.meta.arg)
            })
            .addCase(removeJob.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error?.message
            })
    }
})

export default jobSlice.reducer;
export const { sort, search } = jobSlice.actions;
