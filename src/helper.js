// obtiene la diferencia de años

export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - parseInt(year);
}

// Calcula el total a pagar según la marca

export function calcularMarca(marca) {
    let incremento;

    switch (marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;    
            break;
        default:
            break;
    }
    return incremento
}

// Calcular el tipo de seguro

export function obtenerPlan(plan) {
    return(plan === 'basico') ? 1.2 : 1.5 ;
}

// Pasar primera letra a mayúscula

export function primerMayuscula ( texto ) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}