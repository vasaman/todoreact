import React from 'react'

const ListItem = (props) => {
    return (
        <li id={props.key} className="collection-item"><div>{props.title}<p>{props.description}</p><a href="#!" className="secondary-content"><i className="material-icons">delete</i></a></div></li>
    )
}

export default ListItem
