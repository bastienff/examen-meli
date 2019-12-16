import React, { useEffect, useState } from 'react';
import axios from "axios"

const Autocompletar = (props) => {

    let [state, setState] = useState({})

    useEffect(() => {

        let { query } = props

        if (query) {
            axios(`/api/items?search=${query}`)
                .then((response) => {
                    setState(response.data.items);
                });

        }

    }, [props.query])

    return (
        <div>
            {state.length > 0 &&
                <ul className="autocompletar">
                    {state.map((prod, i) =>
                        <li key={i} className="autocompletar__item">
                            <a href={`/site/items?search=${encodeURIComponent(prod.title)}`}>{prod.title}</a>
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}

export default Autocompletar;
