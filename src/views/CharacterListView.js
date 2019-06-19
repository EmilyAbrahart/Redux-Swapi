import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './../actions/index';
import { CharacterList } from '../components';

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
			<div className="CharactersList_wrapper">
				<CharacterList characters={this.props.characters} />
			</div>
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
