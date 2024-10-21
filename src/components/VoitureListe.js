import React from 'react'
import { Card, Table } from 'react-bootstrap'

export const VoitureListe = () => {
    return (
        <Card className="border border-dark bg-dark text-white">
            <Card.Header> Liste Voitures </Card.Header>
            <Card.Body>
                <Table variant="dark" bordered hover striped>
                    <thead>
                        <tr>
                            <th>Marque</th>
                            <th>Modele</th>
                            <th>Couleur</th>
                            <th>Annee</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr align="center">
                            <td colSpan="6">Aucune Voiture n'est disponible</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}
