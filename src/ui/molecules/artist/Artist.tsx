import './Artist.scss'

export const Artist = ({data}:any) => {
    return (
        <div className="Artist">
            <h1><span>{data?.artistType}:</span> {data?.artistName}</h1>
            <dl>
                <dt>Primary Genre : {data?.primaryGenreName}</dt>
            </dl>
        </div>
    )
}