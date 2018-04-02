// tslint:disable:max-line-length
import * as React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import './App.css';

const peru = require('./images/peru.jpg');
const rockies = require('./images/rockies.jpg');
const eiffel = require('./images/eiffel.jpg');
const colosseum = require('./images/colosseum.jpg');

class Cards extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={6}>
                        <Thumbnail src={peru} alt="peru">
                            <h3>Machu Picchu</h3>
                            <p>Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery.</p>
                            <p>
                                <Button bsStyle="primary" className="travel_image" href="https://www.lonelyplanet.com/peru/machu-picchu" target="blank">Learn More</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={6}>
                        <Thumbnail src={rockies} alt="rockies">
                            <h3>Rocky Mountains</h3>
                            <p>The Rocky Mountains stretch some 3,000 miles from British Columbia and Alberta in Canada through Idaho, Montana, Wyoming, Colorado, and down to New Mexico in the U.S. The range offers dramatic wilderness, diverse wildlife and alpine lakes. Colorado’s Rocky Mountain National Park is traversed by numerous hiking trails and the famously scenic Trail Ridge Road, a 48-mile highway that reaches a high point of 12,183ft.</p>
                            <p>
                                <Button bsStyle="primary" href="https://www.nps.gov/romo/index.htm" target="blank">Learn More</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                        <Thumbnail src={eiffel} alt="eiffel">
                            <h3>Eiffel Tower</h3>
                            <p>The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.</p>
                            <p>
                                <Button bsStyle="primary" href="https://www.toureiffel.paris/fr" target="blank">Learn More</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={6}>
                        <Thumbnail src={colosseum} alt="colosseum">
                            <h3>Colosseum</h3>
                            <p>The Colosseum or Coliseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine, tuff, and brick-faced concrete, it is the largest amphitheatre ever built.</p>
                            <p>
                                <Button bsStyle="primary" href="http://www.soprintendenzaspecialeroma.it/categorie/la-soprintendenza-speciale-per-il-colosseo-e-l-area-archeologica-centrale-di-roma_6/&set=0&l=2&p=6" target="blank">Learn More</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>   
            </Grid>
        );
    }
}

export default Cards;