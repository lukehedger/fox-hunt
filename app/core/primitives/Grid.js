import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * @namespace StyledGrid
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledGrid = styled.div`
  display: grid;
  grid-auto-rows: ${({ gridAutoRows }) => gridAutoRows || Grid.defaultProps.gridAutoRows};
  grid-gap: ${({ gridGap }) => gridGap || Grid.defaultProps.gridGap};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows || Grid.defaultProps.gridTemplateRows};
`

/**
 * @namespace Grid
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const Grid = ({ children, ...props }) =>
  <StyledGrid {...props}>{children}</StyledGrid>

/**
 * @name defaultProps
 * @memberof Grid
 * @desc Primitive's default properties
 */
Grid.defaultProps = {
  gridAutoRows: 'minmax(100px, auto)',
  gridGap: '16px',
  gridTemplateRows: '1fr auto',
}

/**
 * @name propTypes
 * @memberof Grid
 * @desc Primitive's prop type definitions
 */
Grid.propTypes = {
  /** Grid auto rows */
  gridAutoRows: PropTypes.string,
  /** Grid gap */
  gridGap: PropTypes.string,
  /** Grid template columns */
  gridTemplateRows: PropTypes.string,
}

export default Grid
