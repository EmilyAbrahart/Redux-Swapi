//variables
export const color_light = '#ffffff';
export const color_transparent = 'rgba(0,0,0,0)'
export const shadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
export const header_font = "'PT Sans', sans-serif";
export const text_font = "'Bad Script', cursive";

// functions
export const FlexFunc = (direction, justifyC, alignI) => {
	return `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `;
};

export const Button = (backgroundColor, color) => {
  return `
  background-color: ${backgroundColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: ${color};
  cursor: pointer;
  font-weight: bold;
  border: 2px solid ${color}};
  outline: none;
  font-family: ${text_font};
  

  &:hover {
    color: ${backgroundColor};
    background-color: ${color};
    border: 2px solid ${backgroundColor};
  }
  `
};

