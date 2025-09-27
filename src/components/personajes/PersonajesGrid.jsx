import React from 'react'
import Spinner from '../ui/Spinner'
import PersonajesItem from './PersonajesItem'
const PersonajesGrid = ({items, isLoading}) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className='cards'>
            {items.map((item)=>(
                <PersonajesItem key={item.char_id} item={item}/>
            ))}
        </section>
    )
}

export default PersonajesGrid