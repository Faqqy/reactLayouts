
function IconSwitch({onSwitch, icon }) {
    return (
        <div 
            className="IconSwitch"
            onClick={onSwitch}
        >
            <div 
            className="material-icons">
                {icon}
            </div>
        </div>
    )
}

export default IconSwitch