import './SearchBar.scss'

import { useState } from 'react'
import { SearchInput } from '../../atoms/searchInput/SearchInput'
import { SearchButton } from '../../atoms/searchButton/SearchButton'
import { EntityInput } from '../../atoms/entityInput/EntityInput'
import { searchAsync } from '../../../redux/searchSlice'
import { useAppDispatch } from '../../../redux/hook'
import config from '../../../config'

export const SearchBar = (props:any) => {

    const dispatch = useAppDispatch()

    // UI State
    const [searchTerm, setSearchTerm] = useState('')
    const [searchEntity, setSearchEntity] = useState(config.api.itunes.defaultEntity)

    // Entity Select Box
    const entityList = config.api.itunes.entities.map((option, i) => 
        <option key={i} value={Object.values(option)}>{Object.keys(option)}</option>
    )

    // Search
    const handleSearch = () => {
        dispatch(searchAsync(searchTerm, 0, searchEntity))
    }

    return (
        <div className="SearchBar">
            <SearchInput value={searchTerm} placeholder="Search on iTunes" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} />
            <EntityInput onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchEntity(e.target.value)}>{entityList}</EntityInput>
            <SearchButton onClick={handleSearch}>Search</SearchButton>
        </div>
    )
}