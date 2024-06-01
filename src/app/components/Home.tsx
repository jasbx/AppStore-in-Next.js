import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
const Myhome = () => {
  return (
    <Row>
      <Col className="relative top-44">


        <div className=''>
          <Card.Title className="h1  font-bold mb-5  relative left-24" style={{ color: '#fff', fontSize: '3rem' }}>
            Store Web App
          </Card.Title>

          <Card.Text className="w-50 font-serif none-item relative left-24" style={{ color: '#000', fontSize: '1.5rem' }}>
            <ul >
              <li style={{ listStyle: 'none', display: 'flex' }}> <IoCheckmarkDoneCircleSharp className="text-green-400" />  Lorem ipsum dolor sit ametsed do </li>
              <li style={{ listStyle: 'none', display: 'flex' }}> <IoCheckmarkDoneCircleSharp className="text-green-400" />  No attribution required</li>
              <li style={{ listStyle: 'none', display: 'flex' }}> <IoCheckmarkDoneCircleSharp className="text-green-400" />  Download bundles and collections</li>
              <li style={{ listStyle: 'none', display: 'flex' }}> <IoCheckmarkDoneCircleSharp className="text-green-400" />  Millions of Pro only resources</li>
              <li style={{ listStyle: 'none', display: 'flex' }}> <IoCheckmarkDoneCircleSharp className="text-green-400" />  Priority support</li>

            </ul>

          </Card.Text>
          <button className="w-40 btn-outline-info bg-success btn  relative left-24">
            Learn more
          </button>
        </div>
      </Col>


    </Row>
  )
}

export default Myhome
