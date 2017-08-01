import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colour, typography } from 'core/style'

/**
 * @namespace StyledInput
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledInput = styled.input`
  width: ${({ width }) => width || Input.defaultProps.width};
  margin: ${({ margin }) => margin || Input.defaultProps.margin};
  padding: ${({ padding }) => padding || Input.defaultProps.padding};
  border: ${({ border }) => border || Input.defaultProps.border};
  border-color: ${({ borderColor }) => borderColor && colour[borderColor] || borderColor || Input.defaultProps.borderColor};
  display: ${({ display }) => display || Input.defaultProps.display};
  color: ${({ color }) => color && colour[color] || color || Input.defaultProps.color};
  background: none;
  outline: none;
  font-family: ${ typography.getFontFamily() };
`

/**
 * @namespace Input
 * @desc Primitive component
 * @param {Object} props - Component props
 * @return {Function} React component
 */
// eslint-disable-next-line no-unused-vars
const Input = ({ children, ...props }) => <StyledInput {...props} />

/**
 * @name defaultProps
 * @memberof Input
 * @desc Primitive's default properties
 * @type {Object}
 * @prop {Object} sip - default `sip` micro-styles
 */
Input.defaultProps = {
  border: 'none',
  borderColor: 'dark',
  color: 'dark',
  display: 'block',
  margin: 'auto',
  padding: '8px',
  width: 'auto',
}

/**
 * @name propTypes
 * @memberof Input
 * @desc Primitive's prop type definitions
 */
Input.propTypes = {
  /** Colour palette alias */
  color: PropTypes.string,
  /** Width */
  width: PropTypes.string,
}

export default Input
