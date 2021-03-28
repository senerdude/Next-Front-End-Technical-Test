import './Album.scss'

export const Album = ({data}:any) => (
    <div className="Album">
        <div>
            <img className="Album_Image" src={data?.artworkUrl100} alt={data?.collectionName} />
        </div>
        
        <dl>
            <dt><span>Album:</span> {data?.collectionName}</dt>
            <dt><span>Artist:</span> {data?.artistName}</dt>
            <dt><span>Genre:</span> {data?.primaryGenreName}</dt>
            <dt><span>Total Tacks:</span> {data?.trackCount}</dt>
        </dl>
    </div>
)
