import './NoResults.scss'

export const NoResults = ({ searchTerm }:IProps) => (
    <div className="NoResults">
        <p>No results for <span className="NoResults_Term">{searchTerm}</span>. Please try another search term.</p>
    </div>
)

interface IProps {
    searchTerm: string
}
