'use client'

import { useRouter } from 'next/navigation'
import { useContext, useState, useEffect } from 'react'
//import { UserContext, createCurrentUser } from '../../user-context'
import Image from 'next/image'
import Tag from '@/components/Tag'
import ProfileTemp from '../../../resources/images/profileTemp.png';
import EmergeWindow from '@/components/EmergeWindow'
import BackArrow from '../../../resources/images/backArrow.png';


function EditarPerfil(){
	
    const [colorFondo, setColorFondo] = useState('#FFE802');
    const [error, setError] = useState(false);
    const [salir, setSalir] = useState(false);
	//definir todas las variables necesarias
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordrep, setPasswordrep] = useState("")
    const [name, setName] = useState("Elisa")
    const [bio, setBio] = useState("Me gustan las películas de ciencia ficción y juego al voleibol :)")
    const [apellido1, setApellido1] = useState("Rodríguez López")
	const [genero, setGenero] = useState("")
    const [grado, setGrado] = useState("")
    const [año, setAño] = useState(0)
    const [valido, setValido] = useState(false)
    const [rol, setRol] = useState("")
    const [image, setImage] = useState(ProfileTemp)
    const [tag, setTag] = useState("estudiante")
    const [tagList, setTagList] = useState([])

    const [nameBorrador, setNameBorrador] = useState(name)
    const [apellido1Borrador, setApellido1Borrador] = useState(apellido1)
    const [bioBorrador, setBioBorrador] = useState(bio)
    const [validoBorrador, setValidoBorrador] = useState(valido)
    const [imageBorrador, setImageBorrador] = useState(image)

    useEffect(() => {
        const almacenTags = JSON.parse(localStorage.getItem('tags')) || [];
        setTagList(almacenTags);
      }, []);

    const handleEdit = () => {


        router.push("/profile");
    }

    const getUser = (e) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log(valido);


            const user = {
                email: email,
                password: password,
                name: name,
                surname: setApellido1,
                gender: genero,
                degree: grado,
                course: año

                //rol: rol
            }

            console.log(user);
            //setRol("user")
            fetch("http://87.221.139.203:443/api/auth/register", {
                method: "PUT",
                headers: {
                
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            
            router.push("/profile");
            //router.push(`/registered-users/${user.id}`)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === 'image') {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBorrador(reader.result);
            };
            reader.readAsDataURL(file);
        } 
    };

    
    function ToggleSwitch({ enabled, setEnabled }) {
        return (
            <label htmlFor="toggle" className="inline-flex items-center cursor-pointer mt-[40px]">
              <div className="relative">
                <input
                  id="toggle"
                  type="checkbox"
                  className="sr-only"
                  checked={enabled}
                  onChange={() => setEnabled(!enabled)}
                />
                {/* Este es el fondo del toggle switch */}
                <div className={`block w-10 h-6 rounded-full transition ${enabled ? 'bg-[#0065EF]' : 'bg-gray-200'}`}></div>
                {/* Este es el círculo del toggle switch que se mueve */}
                <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                  enabled ? 'transform translate-x-4 ' : ''}`}></div>
            
              </div>
            </label>
        );
      }

      const handleChange = (e) => {
        setNameBorrador(e.target.value);  // Actualiza el valor
        console.log(e.target.value);  
        console.log(nameBorrador);      // Imprime el nuevo valor
        console.log(name);  
    }; 

      function guardarCambios() {
        // Suponiendo que tienes variables o estados de los que obtendrás los nuevos valores
        setImage(imageBorrador);
        setName(nameBorrador);
        setApellido1(setApellido1Borrador);
        setBio(bioBorrador);
        router.push("profile");
    }

    function irAtras() {
        if(nameBorrador === name && apellido1Borrador === apellido1 && bioBorrador === bio && validoBorrador === valido && imageBorrador === image)
            window.location.href = 'http://localhost:3000/profile';
        else
            handleSalirMessage();
    }

    function atras() {
        window.location.href = 'http://localhost:3000/profile';
    }
    const handleErrorMessage = () =>{
        if(error == false)
            setError(true);
        else
            setError(false);
      }

      const handleSalirMessage = () =>{
        if(salir == false)
            setSalir(true);
        else
            setSalir(false);
      }

      const handleToggleMessage = () =>{
        if(validoBorrador == false)
            setValidoBorrador(true);
        else
            setValidoBorrador(false);
      }

    return (
        <div className="bg-[#FFFFFF] lg:h-[909px]">
            <div className={error ? "fixed inset-0 bg-[#000000] opacity-55 z-40" : "hidden"}></div>
            <div className={salir ? "fixed inset-0 bg-[#000000] opacity-55 z-40" : "hidden"}></div>
            <div className="opacity-100">
                <div className="absolute left-2 top-20">
                    <button className="flex-1 justify-center block font-semibold lg:mt-[25px]">
                        <div className="lg:w-12 lg:h-12 w-8 h-8">
                            <Image 
                                src= {BackArrow} 
                                width={48} 
                                height={48} 
                                className="rounded-full" 
                                alt="back"
                                onClick={ irAtras}
                                />
                        </div>
                    </button>
                </div>
                <div className="text-center max-w-lg max-h-sm mx-auto lg:max-w-xl left-0 top-25  p-1 lg:text-left lg:h-[88px] lg:p-[32px] lg:p-8">
                    <div className="container mx-auto p-4 flex rounded-lg justify-center lg: p-0">
                        <h1 className="font-extrabold font-Montserrat text-3xl lg:text-5xl lg:absolute lg:left-20 lg:top-13">Editar perfil</h1>
                    </div>
                </div>
                
                    <div className="container mx-auto mt-[-20px] flex flex-col rounded-lg lg:p-[72px]">
                        <div className="lg:flex-row items-center lg:w-[906px] lg:items-center">
                            <div className="lg:flex items-center flex-1 ">
                                <div className="max-w-sm max-h-sm mx-auto h-45 lg: left-0 top-25 max-w-7xl flex-1 lg:p-[36px]">
                                    <div className="container mx-auto p-4 flex flex-col rounded-lg lg:p-0 lg:h-[288px]">
                                        <div className="flex justify-center items-baseline">
                                            <div className="relative lg:w-60 lg:h-60 w-32 h-32">
                                            <Image 
                                                src={image} 
                                                alt="profile picture"
                                                width={247}
                                                height={247}
                                                style={{
                                                    borderRadius: '50%', // Esto reemplaza a 'rounded-full'
                                                    marginTop: '0px', // Esto reemplaza a 'mt-[-80px]'
                                                    borderWidth: '4px',
                                                    borderColor: colorFondo // Usando el estado de colorFondo directamente
                                                }}
                                            />
                                                <label className="absolute bottom-0 right-0  rounded-full h-[48px] w-[48px] lg:h-[92px] lg:w-[92px]"
                                                htmlFor = "selector"
                                                >
                                                    <svg  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24Z" fill="#0065EF"/>
                                                    <path d="M14 29.8339V34H18.1661L30.4533 21.7128L26.2872 17.5467L14 29.8339ZM33.675 18.491C34.1083 18.0578 34.1083 17.3579 33.675 16.9246L31.0754 14.325C30.6421 13.8917 29.9422 13.8917 29.509 14.325L27.4759 16.358L31.642 20.5241L33.675 18.491Z" fill="white"/>
                                                    </svg>

                                                </label>
                                                <input className="absolute bottom-0 right-0 bg-blue-200 rounded-full p-2c hidden"
                                                    type="file" 
                                                    name="profileImage" 
                                                    id = "selector"
                                                    accept="image/*" 
                                          
                                                    onChange={handleImageChange}
                                                />
                                            </div>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className="text-xs text-gray-600 mt-2 text-center mb-[-18px] lg:pt-[32px]">
                                            La fotografía deberá subirse en formato jpg o .png.
                                        </p>
                                    </div>
                                </div>
                                <div className=" max-h-sm mx-auto items-baseline h-[343px] lg: left-0 top-25  flex-1 lg:p-[36px] lg:w-[513px]">
                                    <div className="container mx-auto p-4 flex flex-col rounded-lg lg:p-0 lg:w-[513px]">
                                        <div className="flex items-center ">
                                            <div className="flex-1">
                                                <label className="block text-sm font-semibold text-gray-700">Nombre</label>
                                                <input 
                                                    type='text' 
                                                    placeholder='Nombre' 
                                                    value={nameBorrador}
                                                    onChange={(e) => setNameBorrador(e.target.value)}
                                                    className="p-1 border rounded w-full"
                                                />
                                            </div>
                                            <div className="flex-1 ml-2 ">
                                                <label className="block text-sm font-semibold text-gray-700">Apellido/s</label>
                                                <input 
                                                    type='text' 
                                                    placeholder='Apellido/s' 
                                                    value={apellido1Borrador}
                                                    onChange={(e) => setApellido1Borrador(e.target.value)}
                                                    className="p-1 border rounded w-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 lg:pt-[32px]">
                                            <label className="block text-sm font-semibold text-gray-700">BIOGRAFÍA</label>
                                            <textarea 
                                                    placeholder='Biografía' 
                                                    value={bioBorrador}
                                                    onChange={(e) => setBioBorrador(e.target.value)}
                                                    className='p-2 border rounded w-full' 
                                                    rows="5"
                                                    cols="50" 
                                                />
                                            <p className="text-right text-xs text-gray-600">{bioBorrador.length}/200 caracteres</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4 mt-[-28px] pt-[32px]">
                                            <label className="text-sm text-gray-700 w-3/4 mt-[40px]" for="public_activities">Mostrar en tu perfil público las actividades a las que has asistido</label>
                                            <ToggleSwitch enabled={validoBorrador} setEnabled={setValidoBorrador} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-sm max-h-sm mx-auto lg: left-0 top-25 max-w-sm lg:ml-[-28px] lg:mt-[-20px] ">
									<div className="container mx-auto p-4 flex flex-col rounded-lg ">
										<div className="mt-6 space-y-4 lg:ml-[80px]">
											<button 
											className="w-full bg-white text-blue-600 py-2 rounded border-2"
											onClick={handleErrorMessage}
											>CERRAR SESIÓN</button>
											<button className="w-full bg-white text-red-500 py-2 rounded border-2 border-red-500">ELIMINAR CUENTA</button>
											<button 
											className="w-full bg-blue-600 text-white py-2 rounded"
											onClick={guardarCambios}>
												GUARDAR CAMBIOS
											</button>
										</div>
									</div>
								</div>
                        </div>
                  
                </div>
            </div>
            <div className={error ? "fixed inset-0 flex items-center justify-center z-50" : "hidden"}>
                <div className="fixed flex items-center justify-center inset-0">
                    <div className="bg-white border-2 p-8 shadow-lg rounded-lg mx-auto" >
                        <h1 className="font-extrabold font-Montserrat text-4xl lg:text-5xl text-center mb-6">Cerrar sesión</h1>
                        <p className="text-sm lg:text-lg text-gray-600 text-center mb-6 break-words">
                        ¿Estás seguro/a de que quieres cerrar sesión?
                        </p>
                        <div className="max-w-sm max-h-sm mx-auto ">
                            <div className="container mx-auto p-4 flex flex-col rounded-lg py-30 space-y-4">
                                <button 
                                    className=" item-center bg-blue-600 text-white py-3 rounded-full font-bold text-lg"
                                >
                                    sí, CERRAR SESIÓN
                                </button>
                                <button className="w-full bg-white text-blue-600 py-3 rounded-full border-2 border-blue-600 font-bold text-lg mb-[180px]" onClick={handleErrorMessage}>
                                    NO, VOLVER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={salir ? "fixed inset-0 flex items-center justify-center z-50" : "hidden"}>
            <div className="fixed flex items-center justify-center inset-0">
            <div className="bg-white border-2 p-8 shadow-lg rounded-lg mx-auto" >
                <h1 className="font-extrabold font-Montserrat text-4xl lg:text-5xl text-center mb-6">Cambios sin guardar</h1>
                <p className="text-sm lg:text-lg text-gray-600 text-center mb-6 break-words">
                ¿Estás seguro/a de que quieres volver sin guardar los <br />cambios realizados?
                </p>
                <div className="max-w-sm max-h-sm mx-auto ">
                    <div className="container mx-auto p-4 flex flex-col rounded-lg py-30 space-y-4">
                        <button className=" item-center bg-blue-600 text-white py-3 rounded-full font-bold text-lg"  onClick={atras}>
                            sí, VOLVER
                        </button>
                        <button className="w-full bg-white text-blue-600 py-3 rounded-full border-2 border-blue-600 font-bold text-lg mb-[180px]" onClick={handleSalirMessage}>
                            NO, GUARDAR CAMBIOS
                        </button>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
}

export default EditarPerfil;