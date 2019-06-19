import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './../actions/index';
import { CharacterList } from '../components';
import styled from 'styled-components';
import {
	FlexFunc,
	color_light,
	header_font,
	text_font
} from './../~reusables/reusables';

const CharListWrapper = styled.div`
	${FlexFunc('column', 'center', 'center')};
	color: ${color_light};
	font-family: ${text_font};
`;
const CharListHeader = styled.h1`
	font-size: 3rem;
	font-family: ${header_font};
`;
const SpinnerDiv = styled.div`
	.lds-spinner {
		color: ${color_light};
		display: inline-block;
		position: relative;
		width: 64px;
		height: 64px;
	}
	.lds-spinner div {
		transform-origin: 32px 32px;
		animation: lds-spinner 1.2s linear infinite;
	}
	.lds-spinner div:after {
		content: ' ';
		display: block;
		position: absolute;
		top: 3px;
		left: 29px;
		width: 5px;
		height: 14px;
		border-radius: 20%;
		background: #fff;
	}
	.lds-spinner div:nth-child(1) {
		transform: rotate(0deg);
		animation-delay: -1.1s;
	}
	.lds-spinner div:nth-child(2) {
		transform: rotate(30deg);
		animation-delay: -1s;
	}
	.lds-spinner div:nth-child(3) {
		transform: rotate(60deg);
		animation-delay: -0.9s;
	}
	.lds-spinner div:nth-child(4) {
		transform: rotate(90deg);
		animation-delay: -0.8s;
	}
	.lds-spinner div:nth-child(5) {
		transform: rotate(120deg);
		animation-delay: -0.7s;
	}
	.lds-spinner div:nth-child(6) {
		transform: rotate(150deg);
		animation-delay: -0.6s;
	}
	.lds-spinner div:nth-child(7) {
		transform: rotate(180deg);
		animation-delay: -0.5s;
	}
	.lds-spinner div:nth-child(8) {
		transform: rotate(210deg);
		animation-delay: -0.4s;
	}
	.lds-spinner div:nth-child(9) {
		transform: rotate(240deg);
		animation-delay: -0.3s;
	}
	.lds-spinner div:nth-child(10) {
		transform: rotate(270deg);
		animation-delay: -0.2s;
	}
	.lds-spinner div:nth-child(11) {
		transform: rotate(300deg);
		animation-delay: -0.1s;
	}
	.lds-spinner div:nth-child(12) {
		transform: rotate(330deg);
		animation-delay: 0s;
	}
	@keyframes lds-spinner {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
`;

class CharacterListView extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.fetchData();
	}

	render() {
		if (this.props.fetching) {
			return (
				<SpinnerDiv>
					<div className="lds-spinner">
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
					</div>
				</SpinnerDiv>
			);
		}
		return (
			<CharListWrapper>
				<CharListHeader>Star Wars Characters</CharListHeader>
				<CharacterList characters={this.props.characters} />
			</CharListWrapper>
		);
	}
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
	return {
		characters: state.charsReducer.characters,
		fetching: state.charsReducer.fetching
	};
};

export default connect(
	mapStateToProps,
	{
		fetchData
	}
)(CharacterListView);
