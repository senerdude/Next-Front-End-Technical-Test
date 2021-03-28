import './Track.scss'

export const Track = ({data}:any) => (
    <div className="Track">
        <div>
            <img className="Track_Image" src={data?.artworkUrl100} alt={data?.collectionName} />
        </div>
        
        <dl>
            <dt><span>Track:</span> {data?.trackName}</dt>
            <dt><span>Album:</span> {data?.collectionName}</dt>
            <dt><span>Artist:</span> {data?.artistName}</dt>
            <dt><span>Genre:</span> {data?.primaryGenreName}</dt>
            <dt><span>Track Number:</span> {data?.trackNumber} of {data?.trackCount}</dt>
        </dl>
    </div>
)
