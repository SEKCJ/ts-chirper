import React, { useState, useEffect } from 'react'

const Chirps: React.FC<iChirpProps> = props => {

    const [chirps, setChirps] = useState([])

    let getChirps = async () => {
        try {

            let response = await fetch('/api/chirps')
            let obj = await response.json()
            makeCards(obj)

        } catch (err) {
            console.log(err)
        }
    }

    let makeCards = (obj: any) => {
        let keys = Object.keys(obj);
        let arr = keys.map((element) => {
            return obj[element]
        })

        arr.splice(-1, 1)

        let cards = arr.map((element, index) => {
            return (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{element.chirp1}</h5>
                        <p className="card-text">{element.text}</p>
                    </div>
                </div>
            )
        })

        setChirps(cards)

    }

    useEffect(() => {
        getChirps()
    }, [])

    return (
        <div>
            {chirps}
        </div>
    )
}

export interface iChirpProps {

}

export default Chirps