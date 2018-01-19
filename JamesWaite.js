// client/src/pages/Profile/JamesWaite.js
import React, { Component } from "react";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";
import "./Profile.css";

export class JamesWaite extends Component {
  state = {
    url: "http://placehold.it/900x350",
    medium: "Creation medium",
    title: "Creation title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.",
    displayname: "JamesWaite",
    avatar: "http://www.jamespatrickwaite.com/image/profilepic.jpg",
    bio: "James Waite is a multidisciplinary artist who graduated from the Cleveland Institute of Art in 2017 with a Bachelor Degree in Fine Arts from the Drawing Department with an emphasis in Visual Culture, Art & History.",
    username: "waitjameswaite",
    email: "james@jamespatrickwaite.com",
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
                    src={"http://jamespatrickwaite.com/image/BFA/BFA_DOC-13.jpg"}
                    style={{maxHeight:"350px",minWidth:"50%",maxWidth:"100%"}}
                    alt="First slide">
                  </CarImg>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/waite2">Virtually, Actually</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>Artwork</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>An interactive installation that considers the 'physical' space of the internet. Created with sharpie, masonite, foamcore, video projection, and iPad.</td>
                      </tr>
                    </tbody>
                  </table>
                </CarItem>
                <CarItem>
                  <CarImg 
                    src={"http://jamespatrickwaite.com/image/Waite_BlackPalimpsestDETAIL.jpg"}
                    style={{maxHeight:"350px"}}
                    alt="Second slide">
                  </CarImg>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/onepage">Black Palimpsest</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>Artwork</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>Found text from online chat rooms digitally collage underneath a layer of laser-etched plexi-glass. Made with plexiglass and digital print.</td>
                      </tr>
                    </tbody>
                  </table>
                </CarItem>
                <CarItem>
                  <CarImg 
                    src={"http://jamespatrickwaite.com/image/Waite_FiveRedRectangles03.jpg"}
                    style={{maxHeight:"350px",minWidth:"50%",maxWidth:"100%"}}
                    alt="Third slide">
                  </CarImg>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/waite3">Five Red Rectangles</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>Artwork</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>Produced with EL wire and monofilament wire.</td>
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
            <a href="/waite2">
              <ArchImg
                src={"http://jamespatrickwaite.com/image/BFA/BFA_DOC-13.jpg"} 
                style={{maxHeight:"250px",width:"100%"}} 
                name="1" />
              <p>Virtually, Actually</p>
            </a>
          </Col>
          <Col 
            size="md-3" 
            style={{marginBottom:"4px"}} 
            name="3">
            <a href="/waite3">
              <ArchImg
                src={"http://jamespatrickwaite.com/image/Waite_FiveRedRectangles03.jpg"} 
                style={{maxHeight:"250px",width:"100%"}} 
                name="3" />
              <p>Five Red Rectangles</p>
            </a>
          </Col>
           <Col 
            size="md-3" 
            style={{marginBottom:"4px"}} 
            name="2">
            <a href="/waite1">
              <ArchImg
                src={"http://jamespatrickwaite.com/image/Waite_BlackPalimpsestDETAIL.jpg"} 
                style={{maxHeight:"170px"}} 
                name="2" />
              <p>Black Palimpsest</p>
            </a>
          </Col>
       
        </Row>
        <br /> <br /> <br /> <br /> <br />
      </Container>
    );
  }
}