export default function Burger({ handleClick, burger } : {
    handleClick: () => void,
    burger: boolean,
}) {
    return(
        <div
            className={`burger-menu ${burger ? 'open-burger' : ''}`}
            onClick={handleClick}    
        >
            <div className="burger-layer" id="b-layer-1"></div>
            <div className="burger-layer" id="b-layer-2"></div>
            <div className="burger-layer" id="b-layer-3"></div>
        </div>
    )
}