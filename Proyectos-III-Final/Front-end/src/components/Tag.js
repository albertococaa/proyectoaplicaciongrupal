import { useContext, useState } from 'react';
//import { UserContext } from '@/app/user-context';

export default function Tag({ tag }) {
    //const [tag, setTag] = useState("")

    return (
        <div className='flex-column'>
            <h1 className='badge text-center bg-primary rounded-pill'>{tag ? tag : "Etiqueta"}</h1>
        </div>
    )
}