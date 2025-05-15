import React from 'react'
import Image from 'next/image'
import notificationIccon from '../resources/images/notificationIcon.png'
import profileIccon from '../resources/images/profile.png'
import warningIccon from '../resources/images/warning.png'

const NotificationCard = ({ imgUrl, description, id, date }) => {
    return (
        <div className="grid grid-cols-5 min-w-screen border-b-2">
            <div className="col-span-1 grid items-center justify-items-center relative group">
                <Image src={getImg(id, imgUrl)} width={50} height={50} className="rounded-full"></Image>
            </div>
            <div className="col-span-3 grid grid-rows-5 text-black">
                <div className="row-span-1 flex">
                    <p className="text-xs font-light font-Montserrat m-0">{date}</p>
                </div>
                <div className="row-span-4">
                    <p className="text-sm font-normal font-Montserrat">{description}</p>
                </div>
            </div>
            <div className="col-span-1 flex items-center justify-items-end ">
                <button type="button" className="rounded-lg bg-[#0065EF] p-2 text-white">{getLabel(id)}</button>
            </div>
        </div>
    )
}

const getLabel = (id) => {
    if (id == "Mensaje") {
        return "Ver mensaje"
    } else if (id == "Actividad") {
        return "Ver actividad"
    } else if (id == "Recordatorio") {
        return "Ver info"
    } else {
        return "Error al recoger el id"
    }
}

const getImg = (id, imgUrl) => {
    if(id == "Recordatorio"){
        return notificationIccon;
    }else if(id == "Mensaje"){
        if(imgUrl == ""){
            return profileIccon;
        }else{
            return imgUrl;
        }
    }else if(id == "Actividad"){
        if(imgUrl == ""){
            return profileIccon;
        }else{
            return imgUrl;
        }
    }else{
        return warningIccon;
    }
}

export default NotificationCard