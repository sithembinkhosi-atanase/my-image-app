import React, { Component } from 'react';
import picture from './low.jpeg'
import picture1 from './R.jpeg'
import picture3 from './car.jpg'

export const imgUrls = [
  picture,
  picture1,
  picture3
];

export const wordArr = [
  "I used to pretend that my Peugeot driving to the gym in the rain in Dublin was a Ferrari on the Vegas strip. — Conor McGregor",
  "At home I drive an old Land Rover. — Richard Hammond",
  "I drive a Range Rover almost every day, but my favorite is my '69 SS Camaro. — Chauncey Billups"
];

export class Carousel extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			currentImageIndex: 0,
      currentWordImage: 0
		};

		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}

	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		this.setState({
			currentImageIndex: index,
		});

    const lastIndexe = imgUrls.length - 1;
		const { currentWordImage } = this.state;
		const shouldResetIndexe = currentWordImage === 0;
		const indexWord =  shouldResetIndex ? lastIndex : currentWordImage - 1;
		this.setState({
			currentWordImage: indexWord,
		});
	}

	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index,

		});

    const lastIndexe = imgUrls.length - 1;
    const { currentWordImage } = this.state;
    const shouldResetIndexe = currentWordImage === lastIndex;
    const indexWord =  shouldResetIndex ? 0 : currentWordImage + 1;

    this.setState({
      currentWordImage: indexWord,

    });

	}

	render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#10094;" />
        <img src = { imgUrls[this.state.currentImageIndex]} style={{width:100 + "%",height:700 + "px"}}/>
        <p>{ wordArr[this.state.currentWordImage] }</p>
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#10095;" />
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div
		className={ `slide-arrow ${direction}` }
		onClick={ clickFunction }>
		{ glyph }
	</div>
);

// const ImageSlide = ({ url }) => {
// 	const styles = {
// 		backgroundImage: `url(${url})`,
// 		backgroundSize: 'cover',
// 		backgroundPosition: 'center'
// 	};
//
// 	return (
// 		<div className="image-slide" style={styles}></div>
// 	);
// }
