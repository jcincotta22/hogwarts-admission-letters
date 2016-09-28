import React, { Component } from 'react';

let paragraph2;
let paragraph1;
let name;
let addressee;


const template = {
  title: "HOGWARTS SCHOOL OF WITCHRAFT AND WIZARDRY",
  heading: "Headmaster: Albus Dumbledore, (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump, International Confed. of Wizards)",
  dear: "Dear Addressee,",
  closing: "Yours sincerely,",
  name: "Minerva McGonagall",
  name2: "Deputy Headmistress"
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph1: "We are pleased to inform you that you have a place at Hogwarts School of, Witchcraft and Wizardry. Please find enclosed a list of all necessary books and equipment.",
      paragraph2: "Term begins on 1 September. We await your owl by no later than 31 July.",
      name: "Addressee"
    };
  this.handleClickRejected = this.handleClickRejected.bind(this);
  this.handleClickAccepted = this.handleClickAccepted.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
  handleChange(event) {
    let newName = event.target.value;
    if (newName.trim().length > 0){
      this.setState({ name: newName });
    }else {
      this.setState({ name: "Addressee" });
    }
  }
  handleClickRejected(event) {
   let rejectedPara = null;
   let rejectedPara1 = "We regret to inform you that we are unable to offer \
   you a place at HogwartsSchool of Witchcraft and Wizardry. After reviewing your application and Github profile, we recognize that you are indeed a 'coding wizard.' Unfortunately, we have concluded that you do not have actual magical abilities, which you must have to be admitted into Hogwarts.";
   this.setState({ paragraph2: rejectedPara });
   this.setState({ paragraph1: rejectedPara1 });
 }

 handleClickAccepted(event) {
  let newParagraph1 = "We are pleased to inform you that you have a place at Hogwarts School of, Witchcraft and Wizardry. Please find enclosed a list of all necessary books and, equipment.";
  let newParagraph = "Term begins on 1 September. We await your owl by no later than 31 July."
  this.setState({ paragraph2: newParagraph });
  this.setState({ paragraph1: newParagraph1 });
}

 render() {

  return (
    <div className="all">
      <div className="inputDiv medium-4 columns input-group">
        <input className="input input-group-field" onChange={this.handleChange}  type="text" placeholder="Addressee"/>
        <div className="input-group-button">
          <button onClick={this.handleClickAccepted} type="button" className="success button">Accepted</button>
        </div>
        <div className="input-group-button">
          <button onClick={this.handleClickRejected} type="button" className="alert button">Rejected</button>
        </div>
      </div>

      <div className="pic">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" className="image"/>
      </div>
      <p className="title">{template.title}</p>
      <div className="headingDiv">
        <p className="heading">{template.heading}</p>
      </div>
      <p className="name">Dear {this.state.name},</p>
      <p className="p1">{this.state.paragraph1}</p>
      <p className="p2">{this.state.paragraph2}</p>
      <p className="closing">{template.closing}</p>
      <p className="n1">{template.name} </p>
      <p className="n1 n2"> {template.name2}</p>

    </div>
    );
  }
}

export default App;
