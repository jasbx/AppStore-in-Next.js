"use client"
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/Navbar";
import Categroy from "./components/Categroy";
import Myhome from "./components/Home";
import CardItem from "./components/CardItem";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="home">
        <NavBar />
        <Myhome />


      </div>

      <Categroy />
      <CardItem />
   
   <Footer/>

    </>
  );
}
