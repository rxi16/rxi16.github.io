// client/src/pages/Profile/SamGriffinGuitar.js
import React, { Component } from "react";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";
import "./Profile.css";

export class SamGriffinGuitar extends Component {
  state = {
    url: "http://placehold.it/900x350",
    medium: "Creation medium",
    title: "Creation title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.",
    displayname: "SamGriffinGuitar",
    avatar: "https://i.ytimg.com/vi/0ixUsvgK_SQ/maxresdefault.jpg",
    bio: "My name is Sam Griffin. I make guitar covers of video game music.",
    username: "SGriffin",
    email: "SGriffin@gmail.com",
    occupation: "Guitarist",
    location: "",
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
                  <iframe 
                    width="560" height="315" alt="First slide"
                    src="https://www.youtube.com/embed/bW1Mz7ngCA4" 
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                  </iframe>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/guitar1">Zelda Breath of the Wild guitar cover</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>Video</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>Zelda Breath of the Wild acoustic classical guitar cover of the Main Theme by Sam Griffin.</td>
                      </tr>
                    </tbody>
                  </table>
                </CarItem>
                <CarItem>
                  <iframe 
                    width="560" height="315" alt="Second slide"
                    src="https://www.youtube.com/embed/kxcVvaKDv1o" 
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                  </iframe>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/guitar2">Jump Up Superstar Cover</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>Video</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>Super Mario Odyssey acoustic classical guitar cover of Jump Up, Superstar! by Sam Griffin.</td>
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
            <a href="/guitar1">
              <iframe 
                className="img-fluid"
                style={{maxHeight:"250px",width:"100%"}} 
                src="https://www.youtube.com/embed/bW1Mz7ngCA4" 
                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
                alt="First creation" name="1">
              </iframe>
              <p>Zelda Breath of the Wild guitar cover</p>
            </a>
          </Col>
          <Col 
            size="md-3" 
            style={{marginBottom:"4px"}} 
            name="2">
            <a href="/guitar2">
              <iframe 
                className="img-fluid"
                style={{maxHeight:"250px",width:"100%"}} 
                src="https://www.youtube.com/embed/kxcVvaKDv1o" 
                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
                alt="Second creation" name="1">
              </iframe>
              <p>Jump Up Superstar Cover</p>
            </a>
          </Col>
          
        </Row>
        <br /><br /><br /><br /><br />
      </Container>
    );
  }
}