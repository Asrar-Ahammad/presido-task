import React, { useState } from 'react'
import { behanceItem } from '../Data'
import { useParams } from 'react-router-dom';


const Project = () => {
    const { name } = useParams()

    const project = behanceItem.find((p) => p.featureTxt === name)


    return (
        <section className='Image'>
            <img src={project.featureImg}/>
            <div className='overlay'>
            </div>
            <img src={project.featureImg}/>
        </section>
    )
}

export default Project