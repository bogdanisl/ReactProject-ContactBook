import React, { Fragment } from 'react'
import NoteItem from '../note-item/note-item'

const NoteList = ({ notes }) =>{
var noteTemplate;
if (notes !== null){
    noteTemplate = notes.map(item =>{
        return(
            <NoteItem
                name={item.name}
                text={item.text}
            ></NoteItem>
    )
    })

    return(
        <Fragment>
            {noteTemplate}
        </Fragment>
    )
}
}

export default NoteList;