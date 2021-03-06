import {REGISTRO_EXITOSO,
        REGISTRO_ERROR,
        USUARIO_AUTENTICADO,
        LIMPIAR_ERROR,
        LOGIN_EXITOSO,
        LOGIN_ERROR,
        CERRAR_SESION} from "../../type";


export default (state, action) => {
    switch (action.type) {
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
        case REGISTRO_EXITOSO:
            return{
                ...state,
                mensaje: action.payload
            }
        case LIMPIAR_ERROR:
            return{
                ...state,
                mensaje: null
            }
        case LOGIN_EXITOSO:
            localStorage.setItem("token", action.payload);
            return{
                ...state,
                token: action.payload,
                autenticado: true
            }
        case USUARIO_AUTENTICADO:
            return{
                ...state,
                usuario: action.payload,
                autenticado: true
            }
        case CERRAR_SESION:
            localStorage.removeItem("token");
            return{
                ...state,
                usuario: null,
                token: null,
                autenticado: null
            }
        default:
            return state;
    }
}