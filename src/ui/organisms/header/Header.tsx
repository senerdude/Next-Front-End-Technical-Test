import './Header.scss'

import { SearchBar } from '../../molecules/searchBar/SearchBar'
import bg from '../../../assets/bg.svg'


export const Header = () => (
    <header className="Header" style={{backgroundImage: `url(${bg})`}}>

        <SearchBar />

    </header>
)