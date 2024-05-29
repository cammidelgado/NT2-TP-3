import axios from "axios";

const url = 'https://66551b1d3c1d3b602938405d.mockapi.io/api/usuarios'

export const getAll = async () => {
    try {
        const { data: usuarios } = await axios.get(url)
        return usuarios
    } 
    catch (error) {
        console.error("Error usuarios GET: ", error)
        return []
    }
  }

export const post = async usuario => {
    try {
        const { data: usuarioGuardado } = await axios.post(url, usuario)
        return usuarioGuardado
    } 
    catch (error) {
        console.error("Error usuarios POST: ", error)
        return {}
    }
  }  

  export const put = async (id, usuario) => {
    try {
        const { data: produtoActualizado } = await axios.put(url+id, usuario)
        return produtoActualizado
    } 
    catch (error) {
        console.error("Error usuarios PUT: ", error)
        return {}
    }
  }  

  export const del = async id => {
    try {
        const { data: usuarioEliminado } = await axios.delete(url+id)
        return usuarioEliminado
    } 
    catch (error) {
        console.error("Error usuarios DELETE: ", error)
        return {}
    }
  }  