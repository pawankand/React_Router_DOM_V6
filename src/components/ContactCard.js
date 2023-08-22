import React from 'react'
import user from '../images/user.png';
import { Link } from 'react-router-dom';

function ContactCard(props) {
    const { id, name, email } = props.contact;
    console.log(props.contact);
    return (
        <div className='item'>
            <img className='ui avatar image' src={user} alt='user'></img>
            <div className='content'>
                <Link to={`/contact/${id}`} state={{ contactinfo: props.contact }}>
                    <div className='header'>
                        {name}
                    </div>
                    <div>{email}</div>
                </Link>
            </div>
            <i className='right floated trash alternate outline icon' style={{ color: "red", marginTop: "7px" }}
                onClick={() => { props.clickHandler(id) }} ></i>
        </div>
    )
}

export default ContactCard