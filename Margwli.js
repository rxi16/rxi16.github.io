// client/src/pages/Profile/Margwli.js
import React, { Component } from "react";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";
import "./Profile.css";

export class Margwli extends Component {
  state = {
    url: "http://placehold.it/900x350",
    medium: "Creation medium",
    title: "Creation title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.",
    displayname: "Margwli",
    avatar: require("./margwli.png"),
    bio: "Recent graduate from the Cleveland Institute of Art in video game design. Currently creating a video game called Opposites Attack!",
    username: "margwli",
    email: "margwli@gmail.com",
    occupation: "Artist",
    location: "Cleveland, OH",
    artist: "5a34a9d1afaabc1820db0b32"
  };

  render() {
    return (
      <Container>
        <Nav>
          <NavLi href="/">Home</NavLi>
          <NavLi href="/about">About</NavLi>
          <NavLi href="/login">Log In</NavLi>
          <NavLi href="/signup">Sign Up</NavLi>
                             
        </Nav>
        <Row>
          <Col size="md-8">
            <a href="/login"><h2 className="my-4" style={{textDecoration:"underline"}}><i className="fa fa-user"></i> My Profile</h2></a>
          </Col>
          <Col size="md-4">
            <a href="/Editprofile"><h2 className="my-4"><i className="fa fa-pencil-square-o"></i> Edit My Profile</h2></a>
          </Col>
        </Row><hr />
        <Row>
          <Col size="md-8">
            <h1 className="my-4">Featured Creations</h1>
            <form className="card-background">
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
              <CarDiv>
              <ol className="carousel-indicators" style={{borderBottom:"0px"}}>
                <CarLi data-slide-to="0" className="active"></CarLi>
                <CarLi data-slide-to="1"></CarLi>
                <CarLi data-slide-to="2"></CarLi>
                <CarLi data-slide-to="3"></CarLi>
              </ol>
                <CarItem className="carousel-item active">
                  <CarImg 
                    src={require("./dagger.jpg")}
                    style={{maxHeight:"350px",minWidth:"50%",maxWidth:"100%"}}
                    alt="First slide">
                  </CarImg>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/dagger">Dagger</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>Artwork</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>-</td>
                      </tr>
                    </tbody>
                  </table>
                </CarItem>
                <CarItem>
                  <CarImg 
                    src={require("./gameassets.png")}
                    style={{maxHeight:"350px",minWidth:"50%",maxWidth:"100%"}}
                    alt="Second slide">
                  </CarImg>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/game">Unearthed Game Assets</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>Artwork</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>Characters for a demo video game called Unearthed.</td>
                      </tr>
                    </tbody>
                  </table>
                </CarItem>
                <CarItem>
                  <CarImg 
                    src={require("./turtleriders.jpg")}
                    style={{maxHeight:"350px",minWidth:"50%",maxWidth:"100%"}}
                    alt="Third slide">
                  </CarImg>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/turtle">Turtle Riders</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>Artwork</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>Concept art inspired by Miyazaki films.</td>
                      </tr>
                    </tbody>
                  </table>
                </CarItem>
                
              </CarDiv>
              <CarA 
                className="carousel-control-prev" 
                data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                <span className="sr-only">Previous</span>
              </CarA>
              <CarA 
                className="carousel-control-next" 
                data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </CarA>
            </div>
            </form>
          </Col>
          <Col size="md-4">
            <h1 id="display-name" className="my-4">{this.state.displayname}</h1>
            <img id="avatar" className="img-fluid" style={{maxHeight:"250px",maxWidth:"100%"}} src={this.state.avatar} alt="Creator Profile Avatar" />
            <h3 className="my-3">My Bio</h3>
            <p id="bio">{this.state.bio}</p>
            <h3 className="my-3">My Details</h3>
            <table>
              <tbody>
                <tr>
                  <td style={{paddingRight:"15px",borderRight:"2px solid gray"}}>Username</td>
                  <td id="username" style={{paddingLeft:"15px"}}>{this.state.username}</td>
                </tr>
                <tr>
                  <td style={{paddingRight:"15px",borderRight:"2px solid gray"}}>E-mail</td>
                  <td id="email" style={{paddingLeft:"15px"}}><a href="#">{this.state.email}</a></td>
                </tr>
                <tr>
                  <td style={{paddingRight:"15px",borderRight:"2px solid gray"}}>Occupation</td>
                  <td id="occupation" style={{paddingLeft:"15px"}}>{this.state.occupation}</td>
                </tr>
                <tr>
                  <td style={{paddingRight:"15px",borderRight:"2px solid gray"}}>Location</td>
                  <td id="location" style={{paddingLeft:"15px"}}>{this.state.location}</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row><hr />
        <h3 className="my-4">Archives</h3>
        <Row>
          <Col 
            size="md-3" 
            style={{marginBottom:"4px"}} 
            name="1">
            <a href="/dagger">
              <ArchImg
                src={require("./dagger.jpg")} 
                style={{maxHeight:"140px",width:"100%"}} 
                name="1" />
              <p>Dagger</p>
            </a>
          </Col>
          <Col 
            size="md-3" 
            style={{marginBottom:"4px"}} 
            name="2">
            <a href="/game">
              <ArchImg
                src={require("./gameassets.png")} 
                style={{maxHeight:"250px",width:"100%"}} 
                name="2" />
              <p>Unearthed Game Assets</p>
            </a>
          </Col>
          <Col 
            size="md-3" 
            style={{marginBottom:"4px"}} 
            name="3">
            <a href="/turtle">
              <ArchImg
                src={require("./turtleriders.jpg")} 
                style={{maxHeight:"250px",width:"100%"}} 
                name="3" />
              <p>Turtle Riders</p>
            </a>
          </Col>
          
        </Row>
        <br /><br /><br /><br /><br /><br />
      </Container>
    );
  }
}