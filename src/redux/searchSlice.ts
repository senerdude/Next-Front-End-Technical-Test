import { createSlice } from '@reduxjs/toolkit'
import type { AppThunk } from './store'
import { encodeQuery } from '../utils/url'
import itunesAPI from '../api/itunesAPI'
import config from '../config'

// Initial state
const initialState =  {
    term: '',
    entity: config.api.itunes.defaultEntity,
    page: 0,
    resultCount: 0,
    results: [],
    loading: false,
    error: null,
    end: false
}

// Search Slice
const searchSlice = createSlice({ 
    name:'search',
    initialState,
    reducers: {
        firstPage: (state, action) => {
            state.term = action.payload.term
            state.entity = action.payload.entity
            state.resultCount = action.payload.resultCount
            state.results = action.payload.results
            state.end = action.payload.end
            state.page = 0
            state.error = null
            state.loading = false
        },
        nextPages:(state, action) => {
            state.resultCount = action.payload.resultCount
            state.results = state.results.concat(action.payload.results)
            state.end = action.payload.end
            state.page = action.payload.page
            state.error = null
            state.loading = false
        },
        noResult: (state, action) => {
            state.term = action.payload.term
            state.entity = action.payload.entity
            state.resultCount = 0
            state.results = []
            state.error = null
            state.loading = false
        },
        error : (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        loading: (state, action) => {
            state.loading = action.payload
        },
        term: (state, action) => {
            state.term = action.payload
        },
        end: (state) => {
            state.end = true
        }
    }
})

// Export Actions
export const { firstPage, nextPages, noResult, error, loading, term, end } = searchSlice.actions

    // Search
    export const searchAsync = (query:string, page:number = 0, entity:string): AppThunk => async dispatch => {

        // Set loading indicator active
        dispatch(loading(true))
        
        try {
            // Search parameters object
            const params:object = {
                media : config.api.itunes.mediaType,
                limit : config.api.itunes.limit.toString(),
                offset: page.toString(),
                entity,
                term : query,
            }

            // Convert parameters object to query string
            const searchParams:string = encodeQuery(params)

            // Query to endpoint
            const { data } = await itunesAPI.get('/search?' + searchParams)

            // If result returns
            if(data?.resultCount > 0) {

                if(page === 0) {
                    // First Load
                    data.entity = entity
                    data.term = query

                    // If items less then limit it means end of results
                    if(config.api.itunes.limit + 1 < data.resultCount) data.end = true

                    dispatch(firstPage(data))
                } else {
                    // Load More
                    data.page = page

                    // If items less then limit it means end of results
                    if(config.api.itunes.limit + 1 < data.resultCount) data.end = true

                    dispatch(nextPages(data))
                }

            } else if(data?.resultCount === 0 && page === 0) {

                // No Result
                dispatch(noResult({ term:query, entity}))

            } else if(data?.resultCount === 0) {

                // End of results
                dispatch(end())

            } else {

                // Set Loading
                dispatch(loading(false))
            }

        } catch (err) {

            // Error
            dispatch(error(err.message))
        }
    }

export default searchSlice.reducer
