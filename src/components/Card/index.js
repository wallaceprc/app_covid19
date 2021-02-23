import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Example = (props) => {
  const [covid, setCovid] = useState([]);

  useEffect(() => {
    data();
  }, [])

  async function data() {
    const response = await axios.get('https://api.covid19api.com/dayone/country/brazil')
    setCovid(response.data);
  }
  return (
    <div style={{ backgroundColor: 'black' }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Total de Casos: {covid.length}</h1>
      <div class="row">
        {covid.map((item) => {
          return (
        <Card style={{width: 300, backgroundColor: '#9157C1', marginTop: 30, marginLeft: 40, borderRadius: 7 }}>
          <CardBody>
            <CardTitle style={{ color: 'white'}} tag="h5">Dados Confirmados: {item.Confirmed}</CardTitle>
            <CardSubtitle style={{ color: 'white'}} tag="h6" className="mb-2">{item.Country}</CardSubtitle>
            <CardText style={{ color: 'white'}}>Data: {moment(item.Date).locale('pt-br').format('LL')}</CardText>
            <Button style={{backgroundColor: 'green'}}>Button</Button>
          </CardBody>
        </Card>
        )})}
      </div>
    </div>
  );
};

export default Example;
