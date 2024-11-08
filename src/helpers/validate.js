export const validate = (input) => {
    let errors = {};

    if (!input.username || input.username.trim() === '') {
        errors.username = "Usuario no puede estar vacío";
    }
    if (!input.password || input.password.trim() === '') {
        errors.password = "Contraseña no puede estar vacía";
    }

    return errors;
}