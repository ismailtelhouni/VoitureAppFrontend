import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const VoitureItem = (props) => {
  return (
    <tr>
        <td> {props.voiture.marque} </td>
        <td> {props.voiture.modele} </td>
        <td> {props.voiture.couleur} </td>
        <td> {props.voiture.immatricule} </td>
        <td> {props.voiture.annee} </td>
        <td> {props.voiture.prix} </td>
        <td className='d-flex justify-content-center'>
            <ButtonGroup>
                <Link to={"/edit/"+props.voiture.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>
                <Button size='sm' variant='outline-danger' onClick={() => props.deleteVoiture(props.voiture.id)} ><FontAwesomeIcon icon={faTrash} /></Button>
            </ButtonGroup>
        </td>
    </tr>
  )
}
