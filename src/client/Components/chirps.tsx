import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { blankProps } from '../App'

const Chirps: React.FC<blankProps> = props => {

    const [chirps, setChirps] = useState<any[]>([])

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

        arr.splice(-1, 1);
        keys.splice(-1, 1);

        let cards = arr.map((element, index) => {
            return (
                <div className="card my-2 col-sm-8 mx-auto bg-info text-light" key={index}>
                    <div className="card-body">
                        <h5 className="card-title px-1 py-1 col-sm-4">{element.chirp1} says...</h5>
                        <p className="card-text">{element.text}</p>
                    </div>
                    <Link to={`/admin/${keys[index]}`}
                        className="btn btn-warning col-sm-3 ml-auto">Admin Settings</Link>
                </div>
            )
        })

        setChirps(cards)

    }

    useEffect(() => {
        getChirps()
    }, [])

    return (
        <div style={{ "height": "100vh" }}>
            <div className="d-flex justify-content-center pt-4 mb-4">
                <h1 className="mr-4 text-light">Hello!</h1>
                <Link className="btn btn-primary my-auto py-3" to="/post">POST TO API</Link>
            </div>

            <div className="container">
                {chirps}
            </div>
        </div>
    )
}

export default Chirps