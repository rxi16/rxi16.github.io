// client/src/pages/Profile/ArtistOnIce.js
import React, { Component } from "react";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";
import "./Profile.css";

export class ArtistOnIce extends Component {
  state = {
    url: "http://placehold.it/900x350",
    medium: "Creation medium",
    title: "Creation title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.",
    displayname: "ArtistOnIce",
    avatar: "http://www.lifeskate.com/.a/6a00e54f7ecf2c883301348612c5c1970c-pi",
    bio: "My name is Mirai Nagasu.  I am a competitive figure skater representing the United States.  I am a six-time national medalist.  I am proud of my opportunities to express myself artistically through the medium of ice skating.",
    username: "MNagasu",
    email: "MNagasu@gmail.com",
    occupation: "Amateur Figure Skater",
    location: "Colorado, United States",
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
                    height="315px" width="560px"
                    src="https://www.youtube.com/embed/Hsp-7S79IYI" 
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
                    name="1">
                  </iframe>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/Iceskating4">2010 Olympic Games</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>Video</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>Free style program skated to Carmen by Angele Dubeau and La Pieta.</td>
                      </tr>
                    </tbody>
                  </table>
                </CarItem>
                <CarItem>
                  <CarImg 
                    src={"https://upload.wikimedia.org/wikipedia/commons/9/90/Mirai_Nagasu_2010_Troph%C3%A9e_Eric_Bompard.JPG"}
                    style={{maxHeight:"350px"}}
                    alt="Second slide">
                  </CarImg>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/Iceskating3">Spiral</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>Artwork</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>Performed in 2010 to Memoirs of a Geisha by John Williams. I built up a lot of flexibility from years of practice, and combined this ability with a costume that was custom-designed to complete the aesthetic package I hoped to achieve.</td>
                      </tr>
                    </tbody>
                  </table>
                </CarItem>
                <CarItem>
                  <CarImg 
                    src={"http://www.insideskating.net/wp-content/uploads/2018/01/1-Mirai-Nagasu-SP-2017-Rostelecom-Cup-opening-photo.jpg"}
                    style={{maxHeight:"350px",minWidth:"50%",maxWidth:"100%"}}
                    alt="Third slide">
                  </CarImg>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/Iceskating2">Lunge</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>Artwork</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>2017 Rostelecom Cup Opening short program performance.</td>
                      </tr>
                    </tbody>
                  </table>
                </CarItem>
                <CarItem>
                  <CarImg 
                    src={"https://coachtomz.com/wp-content/uploads/2016/08/mn-02.jpg"}
                    style={{maxHeight:"350px",minWidth:"50%",maxWidth:"100%"}}
                    alt="Fourth slide">
                  </CarImg>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/Iceskating1">Exhibition</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>Artwork</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>The lighting in the background serves to complement my costume, the tone of the music, my facial expression, and the overall tranquil emotion I am trying to convey.</td>
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
            <a href="/Iceskating4">
              <iframe 
                className="img-fluid"
                style={{height:"200px"}} 
                src="https://www.youtube.com/embed/Hsp-7S79IYI" 
                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
                alt="First creation" name="1">
              </iframe>
              <p>2010 Olympic Games</p>
            </a>
          </Col>
          <Col 
            size="md-3" 
            style={{marginBottom:"4px"}} 
            name="3">
            <a href="/Iceskating2">
              <ArchImg
                src={"http://www.insideskating.net/wp-content/uploads/2018/01/1-Mirai-Nagasu-SP-2017-Rostelecom-Cup-opening-photo.jpg"} 
                style={{height:"200px",width:"100%"}} 
                name="3" />
              <p>Lunge</p>
            </a>
          </Col>
          <Col 
            size="md-3" 
            style={{marginBottom:"4px"}} 
            name="4">
            <a href="/Iceskating1">
              <ArchImg
                src={"https://coachtomz.com/wp-content/uploads/2016/08/mn-02.jpg"}
                style={{height:"200px",width:"100%"}} 
                name="4" />
              <p>Exhibition</p>
            </a>
          </Col>
          <Col 
            size="md-3" 
            style={{marginBottom:"4px"}} 
            name="2">
            <a href="/Iceskating3">
              <ArchImg
                src={"https://upload.wikimedia.org/wikipedia/commons/9/90/Mirai_Nagasu_2010_Troph%C3%A9e_Eric_Bompard.JPG"} 
                style={{height:"200px"}} 
                name="2" />
              <p>Spiral</p>
            </a>
          </Col>
        </Row>
        <br /><br /><br /><br /><br /><br />
      </Container>
    );
  }
}