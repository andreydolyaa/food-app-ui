

import React, { useEffect, useState } from 'react';
import './Search.scss';
import { useForm } from '../../services/customHooks';

export function Search(props) {
    const [filterBy, setFilterBy] = useForm({
        searchKey:''
    }, props.onSetFilter);


    useEffect(() => {
        console.log(props);
    }, [])


    const { searchKey } = filterBy;
    return <form className="search" >
        <label htmlFor="searchKey">Search:
            <input id="searchKey" name="searchKey" type="text" value={searchKey} onChange={setFilterBy} /><i className="fas fa-search"></i></label>
    </form>

}


