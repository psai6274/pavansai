import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const Form = useRef()
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_2z951qp', 'template_z68zpyo', 'Form', 'dUJMx5PvZtRIGAeVD')
            .then(function (response) {
                alert('SUCCESS!', response.status, response.text);
            }, function (error) {
                alert('FAILED...', error);
            });
    }



    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={ letterClass } strArray={ ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'] } idx={ 15 } />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={ Form } onSubmit={ sendEmail } >
                            <ul>
                                <li className='half'>
                                    <input type='text' name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type='email' name="email" placeholder="Email" required />
                                </li>

                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Pavan Sai,
                    <br />
                    India,
                    <br />
                    SJCIT Boys hostel Chickaballapur ,562101 <br />
                    Karnataka<br />
                    <span>psai6274@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={ [13.3948187, 77.726647] } zoom={ 13 }>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={ [13.3948187, 77.726647] }>
                            <Popup>Right Now Pavan Stays Here.</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
