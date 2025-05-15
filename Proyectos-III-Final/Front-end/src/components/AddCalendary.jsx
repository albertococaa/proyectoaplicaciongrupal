import Image from "next/image";
import googleIcon from "../resources/images/google.png"
import icloudIcon from "../resources/images/icloud.png"
import outlookIcon from "../resources/images/outlook.png"
"use client"

const AddCalendary = () => {
    return(
        <>
            <h2>AÑADIR AL CALENDARIO</h2>
            <div>
                <Image src={googleIcon}></Image>
                <Image src={icloudIcon}></Image>
                <Image src={outlookIcon}></Image>
            </div>
            <button className="font-bold">AÑADIR</button>
        </>
    )
}