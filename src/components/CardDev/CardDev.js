import React from 'react';
import './style.scss';


const CardDev = (props) => {
    return (
        <section className='content-dev'>
            <p className={props.classTitle}>{props.title}</p>
            <p className='txt-link-dev'><a href={props.href} className='go-course'>Ir para o curso</a></p>
        </section>
    );
}
export default CardDev;