import React, { Component } from 'react'

class Cocarousel extends Component {
  state = {
    picIdx: 0
  }

  render() {
    const picList = ["https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/120331003_2673306136257225_5627365831170474321_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=AWPdkPwF6WYAX9yGqT1&_nc_ht=scontent.fbkk7-2.fna&oh=96207a41544c3f51b99d81948b9b5069&oe=5FA4B7E5",
      "https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.0-9/120373328_2673306212923884_5396853271880866721_n.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=EmY-vpEG-GAAX8dtL24&_nc_ht=scontent.fbkk7-3.fna&oh=a820b54711b287224a51e8654be3f431&oe=5FA13610",
      "https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/120375248_2673306239590548_7794608346020773535_n.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=Gwv4p_EbRYcAX9YbQ_8&_nc_ht=scontent.fbkk7-2.fna&oh=c673d2aa4d60fd3b79283dde86df7a21&oe=5FA295E4",
      "https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/120454556_2673306349590537_8604055987057004491_n.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=iMytz1dwpkAAX-9P-m1&_nc_ht=scontent.fbkk7-2.fna&oh=5cdfa0e4513c945bb52fd9a92f85f620&oe=5FA4C230",
      ];

    return (
      <div className="App">
        <button
          onClick={() => { this.setState({ picIdx: this.state.picIdx - 1 }) }}
          disabled={this.state.picIdx === 0}
        >PREV</button>
        <img src={picList[this.state.picIdx]} width="500px" height="500px"></img>
        <button
          onClick={() => { this.setState({ picIdx: this.state.picIdx + 1 }) }}
          disabled={this.state.picIdx === picList.length - 1}
        >NEXT</button>
      </div>
    );
  }
}

export default Carousel
