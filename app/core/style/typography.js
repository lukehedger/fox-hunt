/**
  * @desc Typographic utilities
*/

const stacks = {
  primary: '\'Zilla Slab\', serif',
  secondary: 'Boogaloo, cursive',
}

export const getFontFamily = (stack='primary') => stacks[stack]
