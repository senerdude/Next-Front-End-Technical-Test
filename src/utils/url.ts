// Encodes provided object to URL query string
export const encodeQuery = (data:object) => {

    const queryItems:Array<string> = []

    for (let i:number = 0; i < Object.keys(data).length; i++) {
        queryItems.push(`${encodeURIComponent(Object.keys(data)[i])}=${encodeURIComponent(Object.values(data)[i])}`)
    }

    return queryItems.join('&')
}