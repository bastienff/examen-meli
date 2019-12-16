import React, { Fragment, useState } from 'react';
import Autocompletar from "./Autocompletar"

const Search = (props) => {

    let [state, setState] = useState(false)
    let { search } = props

    const handleSearch = (e) => {
        const query = e.target.value;
        if (query.length > 2) {
            setState(query)
        }
    }

    return (
        <Fragment>
            <form className="header__search" action="/site/items" method="GET">
                <input type="text" name="search" maxLength="80" onKeyUp={handleSearch} defaultValue={search} placeholder="Nunca dejes de buscar" />
                <button type="submit">
                    <i className="header__searchicon">
                        <span>Buscar</span>
                    </i>
                </button>
                <Autocompletar query={state} />
            </form>
        </Fragment>
    );
}

export default Search;
