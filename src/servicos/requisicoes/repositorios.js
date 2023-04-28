import api from "../api"

export async function pegarRepositorioDoUsuario(nomeUsuario) {
    try {
      //  const resultado = await api.get(`repos?postId=${id}`)
        console.log(nomeUsuario)
         const resultado = await api.get(`users/${nomeUsuario}/repos`)
       return resultado.data
    } catch (error) {
        console.log(error)
        return []
    }
}


export async function salvarRepositorioDoUsuario(postId, nome, data, id) {
    try {
        await api.put(`repos/${id}`, {
            name: nome,
            data: data,
            postId: postId,
            id: id
        })
        return 'sucesso'
    } catch (error) {
        console.log(error)
        return `erro ${error}`
    }
}

export async function criarRepositorioDoUsuario(postId, nome, data) {
    try {
        await api.post(`repos`, {
            name: nome,
            data: data,
            postId: postId   
        })
        return 'sucesso'
    } catch (error) {
        console.log(error)
        return `erro ${error}`
    }
}

export async function deletarRepositorioDoUsuario(id) {
    try {
        await api.delete(`repos/${id}`)
        return 'sucesso'
    } catch (error) {
        console.log(error)
        return `erro ${error}`
    }
}