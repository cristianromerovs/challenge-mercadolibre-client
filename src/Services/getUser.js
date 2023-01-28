const urlApi = 'http://localhost:8000'

//Obtener informacion de usuario = {}
export const getUserInfo = async () => {
    const response = await fetch(`${urlApi}/user`)
    const savedData = await response.json()
        .catch(error => console.log(error))
    return savedData.data
}

//Obtener informacion de restricciones = []
export const getUserRestrictions = async () => {
    const response = await fetch(`${urlApi}/user/1/restrictions`)
    const savedData = await response.json()
        .catch(error => console.log(error))
    return savedData.data[0]
}