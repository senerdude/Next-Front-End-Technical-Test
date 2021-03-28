import './Home.scss'

import { Header } from '../../organisms/header/Header'
import { SearchResults } from '../../organisms/searchResults/SearchResults'

const Home = () => {

  return (
    <section className="Home">
      <Header />
      <SearchResults />
    </section>
  )
}

export default Home
