import React from 'react'

function Composers({item}) {
    return (
        <div className="card">
            <div className='card-inner'>
                <div className='card-front'>
                 <img src={item.portrait} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Composers Name:</strong> {item.complete_name}
                        </li>
                        <li>
                            <strong>Epoch:</strong> {item.epoch}
                        </li>
                        <li>
                            <strong>Birth:</strong> {item.birth}
                        </li>
                        <li>
                            <strong>Death:</strong> {item.death}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Composers
