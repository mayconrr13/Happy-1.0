import axios from 'axios'

const api = axios.create({
    // utilizando o celular fisico devepegar o ip da maquina na pagina do expo
    baseURL: 'http://192.168.0.5:3333'
})

export default api