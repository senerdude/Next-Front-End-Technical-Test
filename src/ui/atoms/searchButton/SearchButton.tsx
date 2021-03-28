import './SearchButton.scss'

export const SearchButton = (props:any) => (
    <button className="SearchButton" type="button" {...props}>{props.children}</button>
)