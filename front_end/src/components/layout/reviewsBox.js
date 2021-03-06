import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Card, Col, Container, Row } from 'react-bootstrap';
import StarIcon from '@material-ui/icons/Star';
import Rating from '@material-ui/lab/Rating';
import useStyles from './companyBoxElements';
import g from '../../images/g.jpeg';
import { Link } from 'react-router-dom';

function ReviewBox(props) {
  console.log(props);
  const classes = useStyles();
  const name = 'Google';

  const rating = 4.5;
  const id = 4;
  return (
    <container>
      <Card
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          marginBottom: 10,
          width: '1000px',
          height: 'auto',
          flexFlow: 'wrap',
          borderRadius: 20,
          marginTop: '20px',
        }}
      >
        <Card.Body>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              height: 'auto',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="col-md-1" style={{ paddingLeft: '20px' }}>
              <img src={props.logo} className="companyLogo" alt="Company Logo" />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '30px',
                justifyContent: 'flex-start',
              }}
            >
              <div><Link to={"/companyHomes?id="+ props.id}>{props.name}</Link></div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <div>
                  <u>{props.rating}</u>
                </div>
                <Rating value={props.rating}readOnly style={{ color: '#9d2b6b' }} />
              </div>
            </div>
            <div style={{ display: 'flex', paddingLeft: '15px', width: '500px' }}>
              <div>{props.description}</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '15px',
              }}
            >
              <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                <u><Link to={"/companyHomes?id="+ props.id+"&tab=3"}>Reviews</Link></u>
              </div>
              <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
              <u><Link to={"/companyHomes?id="+ props.id+"&tab=4"}>Salaries</Link></u>
              </div>
              <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
              <u><Link to={"/companyHomes?id="+ props.id+"&tab=6"}>Jobs</Link></u>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </container>
  );
}

export default ReviewBox;
