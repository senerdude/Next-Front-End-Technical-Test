import './SearchResults.scss'

import { useAppSelector, useAppDispatch } from '../../../redux/hook'
import { LoadingIndicator } from '../../atoms/loadingIndicator/LoadingIndicator'
import { NoResults } from '../../molecules/noResults/NoResults'
import { Artist } from '../../molecules/artist/Artist'
import { Album } from '../../molecules/album/Album'
import { Track } from '../../molecules/track/Track'
import { ErrorInfo } from '../../molecules/errorInfo/ErrorInfo'
import { useEffect } from 'react'
import { searchAsync } from '../../../redux/searchSlice'
import { ResultsEnd } from '../../molecules/resultsEnd/ResultsEnd'
import { ScrollTop } from '../../atoms/scrollTop/ScrollTop'

export const SearchResults = () => {

    // Search Result State
    const data = useAppSelector(state => state.search)

    const dispatch = useAppDispatch()

    // Render items depending on wrapper type
    const renderSwitch = (data:any) => {
        switch (data?.wrapperType) {
            case 'artist': 
                return <Artist data={data} />
            case 'collection':
                return <Album data={data} />
            case 'track': 
                return <Track data={data} />
            default:
                return null
        }
    }

    // Add Scroll Event Listener
    useEffect(() => {
            const onScroll = (event:any) => {
                if(!data.loading && !data.end) {
                    // Bottom
                    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
                    {
                        // Next page offset
                        const nextPage = data.page + 1

                        // Load data
                        dispatch(searchAsync(data.term, nextPage, data.entity))
                    }
                }
            }
            window.addEventListener('scroll', onScroll);
            return () => {
                window.removeEventListener('scroll', onScroll);
            }
    }, [data, dispatch])

    return(
        <>
            { 
                !data.error &&
                <ol className="SearchResults">
                    {
                        data?.results?.map((data:any, i)=>(
                            <li key={i + data?.artistId}>
                                {renderSwitch(data)}
                            </li>
                        ))
                    }
                </ol>
            }

            { data.error && <ErrorInfo errorText={data.error || 'Unknown Error'} />}

            { data.resultCount === 0 && data.term !== '' && <NoResults searchTerm={data.term} />}

            { !data.end && data.loading === true && <LoadingIndicator /> }

            { data.resultCount > 0 && data.end && <ResultsEnd /> }

            { data.page > 0 && <ScrollTop /> }
        </>
    )
}