import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import setData from './fetch';

let SingleChirp: React.FC<iSingleProps> = ({ match: { params: { id } } }) => {

    let [nameval, setNameval] = useState<string>("")
    let [textval, setTextval] = useState<string>("");

    let single = async (id: string) => {
        let response = await fetch(`/api/chirps/${id}`);
        let json = await response.json();
        setNameval(json.chirp1);
        setTextval(json.text);
    }

    useEffect(() => {
        single(id)
    }, [id])

    let handleChange = (e: string, id: string) => {
        if (id === "name") {
            setNameval(e)
        } else if (id === "text") {
            setTextval(e)
        }
    }

    let handleSet = () => {
        if (nameval !== "" && textval !== "") {
            setData(`/api/chirps/${id}`, {
                chirp1: nameval,
                text: textval
            }, "PUT")
        }
    }

    let handleDelete = () => {
        setData(`/api/chirps/${id}`, {
            chirp1: nameval,
            text: textval,
        }, "DELETE")
    }

    return (
        <div className="container d-flex " style={{ "height": "100vh" }}>
            <div className="d-flex flex-column align-self-center col-sm-12">
                <form className="col-sm-9 pt-3 pb-3 mx-auto bg-dark text-light"
                    style={{ "borderRadius": "1em" }}>

                    <div className="form-group">
                        <label htmlFor="name">Edit Name</label>
                        <input type="text" placeholder="Edit Name"
                            className="form-control" id="name" value={nameval}
                            onChange={(event) => { handleChange(event.target.value, 'name') }} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="chirp">Enter Chirp</label>
                        <input type="text" placeholder="Edit Chirp"
                            className="form-control" id="chirp" value={textval}
                            onChange={(event) => { handleChange(event.target.value, 'text') }} />
                    </div>

                    <div className="d-flex justify-content-around mt-4">
                        <Link to="/" className="col-sm-3">
                            <button className="btn btn-warning col-sm-12"
                                onClick={() => { handleSet() }}>Set Chirp</button>
                        </Link>
                        <Link to="/" className="col-sm-3">
                            <button className="btn btn-danger col-sm-12"
                                onClick={() => { handleDelete() }}>Delete Chirp</button>
                        </Link>

                    </div>

                </form>
            </div>
        </div>
    )
}

export interface iSingleProps extends RouteComponentProps<{ id: string; }> { }

export default SingleChirp;