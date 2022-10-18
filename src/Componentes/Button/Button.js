import './Button.css';

const Button = ( {children, style, handleOnClick} ) => {
    
    const estiloColorFondo = {
        ...Style,
        backgroundColor: children === 'Aceptar'
                            ? 'green'
                            : children === 'Cancelar'
                                ? 'red'
                                : undefined
    }

    return (
        <Button 
            className='Button' 
            style={style}
            onClick={ () => handleOnClick(children)}
            >
            {children}
        </Button>
    )
}
export default Button
