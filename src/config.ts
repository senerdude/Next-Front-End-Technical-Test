const config:IConfig = {
    api : {
        itunes : {
            baseURL : 'https://itunes.apple.com',
            mediaType : 'music',
            entities : [
                { 'Artist': 'musicArtist' }, 
                { 'Album': 'album' }, 
                { 'Track': 'song' }
            ],
            defaultEntity : 'musicArtist',
            limit: 10
        }
    }
}

interface IConfig {
    api : {
        itunes : {
            baseURL : string,
            mediaType : string,
            entities : Array<object>,
            defaultEntity: string,
            limit : number
        }
    }
}

export default config