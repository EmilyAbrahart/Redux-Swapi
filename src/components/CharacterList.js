import React from 'react';
import Character from './Character';
import styled from 'styled-components';
import {shadow} from './../~reusables/reusables';

const List = styled.ul`
font-size: 2rem;
list-style-type: none;
text-align: center;
text-shadow: ${shadow};
padding-inline-start: 0;
`

const CharacterList = props => {
	return (
		<List>
			{props.characters.map(character => {
				return <Character key={character.name} character={character} />;
			})}
		</List>
	);
};

export default CharacterList;
