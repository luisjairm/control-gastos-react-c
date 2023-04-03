/**
 * Genera un id unico
 * @returns Id
 */
export const generarId = () => {
  const random = Math.random().toString(36).substring(2)
  const fecha = Date.now().toString(36)
  return random + fecha
}

/**
 * Formatear fecha
 * @param {string} fecha Fecha en milisegundos
 * @returns fecha formateada
 */
export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha)
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }

  return fechaNueva.toLocaleDateString('es-ES', opciones)
}
