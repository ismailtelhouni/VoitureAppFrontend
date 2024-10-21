import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

export const Voiture = () => {
    return (
        <Card className="border border-dark bg-dark text-white">
            <Card.Header> Ajouter Voiture</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control className='bg-dark text-white' type="text" placeholder="Entrez Marque Voiture" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group> */}
                    <Button size='sm' variant='success' type='submit' >Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
