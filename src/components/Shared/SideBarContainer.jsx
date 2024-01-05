import React from 'react'
import CloseIcon from "../../static/Icons/close-x.svg"

function SideBarContainer({children, isVisible, setIsVisible, isOnTheRight}) {
    const isHidden = isVisible? "h-full w-full bg-gray-400/75 absolute bottom-0 right-0 top-0 left-0 z-40" : "hidden";
    const sideBarPosition = isOnTheRight? "justify-end" : "justify-start";
    return (
    <div className={isHidden}>
        <div className={"h-full w-full flex relative justify-start " + sideBarPosition}>
        <div className="w-96 max-w-full p-4 h-screen sticky right-0 top-0 bg-white">
            <div className={"mb-2 flex flex-row justify-end"}>
                <img onClick={() => setIsVisible(false)} className="h-5 cursor-pointer" src={CloseIcon} alt="close icon" />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
        </div>
    </div>
    )
}

export default SideBarContainer