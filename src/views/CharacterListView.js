import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './../actions/index';
import { CharacterList } from '../components';
import styled from 'styled-components';
import {FlexFunc, color_light, header_font, text_font} from './../~reusables/reusables';

const CharListWrapper = styled.div`
${FlexFunc('column', 'center', 'center')};
color: ${color_light};
font-family: ${text_font};
`
const CharListHeader = styled.h1`
font-size: 3rem;
font-family: ${header_font};
`

class CharacterListView extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.fetchData();
	}

	render() {
		if (this.props.fetching) {
			// return something here to indicate that you are fetching data
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
