function validarPassword(password) {
  
  // Verificar que la contraseña no sea solo números
    
  if (typeof password !== 'string') {
    throw new Error('La contraseña debe ser un string');
  }

    // Verificar longitud mínima
  if (password.length < 8) {
    throw new Error('La contraseña debe tener al menos 8 caracteres');
  }

  // Verificar letra mayúscula
  const tieneMayuscula = /[A-Z]/.test(password);
  if (!tieneMayuscula) {
    throw new Error('La contraseña debe tener al menos una letra mayúscula');
  }

  // Verificar letra minúscula
  const tieneMinuscula = /[a-z]/.test(password);
  if (!tieneMinuscula) {
    throw new Error('La contraseña debe tener al menos una letra minúscula');
  }

  // Verificar número
  const tieneNumero = /[0-9]/.test(password);
  if (!tieneNumero) {
    throw new Error('La contraseña debe tener al menos un número');
  }

  // Verificar carácter especial
  const tieneEspecial = /[^A-Za-z0-9]/.test(password);
  if (!tieneEspecial) {
    throw new Error('La contraseña debe tener al menos un carácter especial');
  }

  // Si pasa todas las validaciones
  return true;
}

module.exports = { validarPassword };
