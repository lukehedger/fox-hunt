import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * @namespace StyledGridCell
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledGridCell = styled.div`
  grid-row-start: ${({ gridRowStart }) => gridRowStart || Grid.defaultProps.gridRowStart};
  grid-row-end: ${({ gridRowEnd }) => gridRowEnd || Grid.defaultProps.gridRowEnd};
`

/**
 * @namespace GridCell
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const GridCell = ({ children, ...props }) =>
  <StyledGridCell {...props}>{children}</StyledGridCell>

/**
 * @name defaultProps
 * @memberof GridCell
 * @desc Primitive's default properties
 */
GridCell.defaultProps = {
  gridRowStart: 'initial',
  gridRowEnd: 'initial',
}

/**
 * @name propTypes
 * @memberof GridCell
 * @desc Primitive's prop type definitions
 */
GridCell.propTypes = {
  /** Grid row start */
  gridRowStart: PropTypes.number,
  /** Grid row end */
  gridRowEnd: PropTypes.number,
}

export default GridCell
