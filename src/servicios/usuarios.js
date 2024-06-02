const url ="https://665a0e1cde346625136eea10.mockapi.io/usuarios/usuarios/"
import axios from 'axios'

export const getAll = async () => {
    try{
    const { data: usuarios } = await axios.get(url)
        return usuarios
    }
    catch(error) {
        console.error("Error Usuarios GET", error)
        return []
    }


};




