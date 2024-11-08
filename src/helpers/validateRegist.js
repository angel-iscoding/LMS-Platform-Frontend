export const validateRegist = (input) => {
    let errors = {};
    
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_]).{8,}$/;

    const name = input.name;
    const username = input.username;
    const password = input.password;
    const email = input.email;
    const nDni = input.nDni;
    const bithdate = input.bithdate;

    if (!emailRegex.test(email)) {
        errors.email = "Email no valido";
    }
    if (!passwordRegex.test(password)) {
        errors.password = "Contraseña no valida";
    }
    if (name.trim() === '') {
        errors.name = "Nombre no puede estar vacío";
    }
    if (username.trim() === '') {
        errors.username = "Usuario no puede estar vacío";
    }
    if (!input.nDni || isNaN(input.nDni)) {
        errors.nDni = "Número de documento no puede estar vacío y debe ser un número";
    }
    if (bithdate.trim() === '') {
        errors.bithdate = "Fecha de nacimiento no puede estar vacía";
    }

    return errors;
}
