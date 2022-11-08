import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context";
import {FaUserAlt} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'

function Profile() {

    const {state, dispatch} = useContext(AppContext)
    
    const [localState, setLocalState] = useState({
        ...state.user
    })

    const handleChange = (e) => {
        
        const {name, value} = e.target
        // setCounter(prev => prev + 1)
        // setLocalState(prev => {return {...prev, [name]: value}})
        setLocalState({...localState, [name]: value})
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        dispatch({
            type: 'userUpdated',
            payload: {...localState}
        })

        alert('Profile saved')
    }


    return (  
        <div className="flex items-center min-h-[calc(100vh-100px)] 
        justify-center flex-col p-[20px] w-full bg-slate-500 
        ">

            <form onSubmit={handleSubmit} className='gap-[20px] flex flex-col'>
                <div className="flex items-center gap-[10px]">
                    <FaUserAlt className="text-white text-[1rem]"/>
                    <input 
                        value={localState.name} 
                        name='name'
                        onChange={handleChange}
                        className='p-[5px]'
                    />
                </div>
                <div className="flex items-center gap-[10px]">
                    <AiFillPhone className="text-white text-[1rem]"/>
                    <input 
                        value={localState.phone} 
                        name='phone'
                        onChange={handleChange}
                    />
                </div>
                <input 
                    className="cursor-pointer"
                    type='submit' value='Save'/>
            </form>
        </div>
    );
}

export default Profile;