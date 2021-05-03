const ComprarCasco = async () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Comprar casco")
        },1000)
    })
}

const ComprarGuantes = async () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Comprar guantes")
        },2000)
    })
}

const Paseo = async () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Pasear en bici")
        },8000)
    })
}

const PasearEnBici = async () => {
    const casco = await ComprarCasco();
    const guantes = await ComprarGuantes();
    const paseo = await Paseo();
    return ([casco, guantes, paseo]);
}

PasearEnBici().then(res => console.log(res));