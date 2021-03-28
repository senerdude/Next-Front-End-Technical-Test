import axios from "axios"
import config from "../config"

const itunesClient = axios.create({ baseURL: config.api.itunes.baseURL, headers: {'Content-Type': 'application/json; charset=utf-8'}})

// Expose only required methods
const itunesAPI = {
  get: itunesClient.get
}

export default itunesAPI
