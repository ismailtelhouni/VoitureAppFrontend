import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Spinner, Table } from 'react-bootstrap'
import { MyToast } from '../MyToast'
import { VoitureItem } from './VoitureItem'

export const VoitureListe = () => {
    const [voitures, setVoitures] = useState([]);
    const [show, setShow] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const apiUrl = process.env.REACT_APP_API_URL
    useEffect(() => {
        axios.get(apiUrl+'/voitures')
            .then(response => {
                setVoitures(response.data)
                console.log('Success:', response.data);
                setSpinner(false)
            })
            .catch(error => {
                if (error.response) {
                    // La requête a été faite, et le serveur a répondu avec un code de statut hors 2xx
                    console.error('Server responded with error:', error.response.status);
                    console.error('Response data:', error.response.data);
                } else if (error.request) {
                    // La requête a été faite, mais aucune réponse n'a été reçue
                    console.error('No response received:', error.request);
                } else {
                    // Une erreur est survenue lors de la configuration de la requête
                    console.error('Error setting up request:', error.message);
                }
                console.error('Error details:', error.config);
            });

    }, [apiUrl])
    const deleteVoiture = (voitureId) => {
        console.log(voitureId)
        axios.delete(apiUrl+"/api/voitures/" + voitureId)
            .then(response => {
                if (response.data != null) {
                    setShow(true)
                    setVoitures(voitures.filter(voiture => voiture.id !== voitureId))
                }
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    }
    const handleClose = () => setShow(false);
    return (
        <Card className="border border-dark bg-dark text-white">
            <Card.Header> <FontAwesomeIcon icon={faList} /> Liste Voitures </Card.Header>
            <Card.Body>
                <Table variant="dark" bordered hover striped>
                    <thead>
                        <tr>
                            <th>Marque</th>
                            <th>Modele</th>
                            <th>Couleur</th>
                            <th>Immatricule</th>
                            <th>Annee</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr align="center" style={{ "display": spinner ? "" : "none" }}>
                            <td colSpan="6"><Spinner animation="border" variant='light' /></td>
                        </tr>
                        {
                            voitures.length === 0 ?
                                <tr align="center">
                                    <td colSpan="6">Aucune Voiture n'est disponible</td>
                                </tr>
                                :
                                voitures.map((voiture) => (
                                    <VoitureItem key={voiture.id} voiture={voiture} deleteVoiture={deleteVoiture} />
                                ))
                        }
                    </tbody>
                </Table>
            </Card.Body>
            <div style={{ "display": show ? "block" : "none" }}>
                <MyToast children={{ show: show, message: "Voiture supprimée avec succès.", type: "danger" }} handleClose={handleClose} />
            </div>
        </Card>
    )
}
