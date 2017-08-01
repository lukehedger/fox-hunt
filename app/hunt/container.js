import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Box, Grid, GridCell, Input, Text } from 'core/primitives'
import * as actions from './actions'
import selectors from './selectors'

export class Hunt extends Component {
  constructor() {
    super()

    this.onSetInput = this.onSetInput.bind(this)
  }

  onSetInput(clue, input) {
    const { actions } = this.props

    actions.setInput(clue, input)
  }

  render() {
    const { clues } = this.props
    const { onSetInput } = this

    return (
      <Grid style={{ height: '100%' }}>
        <div>
          <Box align="middle" style={{ marginBottom: "16px" }}>
            <svg width="150px" style={{ margin: "auto" }} fill="#F1996B" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 841.89 595.28"><g><g><path d="M423.667,548.833c-7.5-0.5-9.833-9.667-9.833-9.667C410,526.166,398.667,517,398.667,517    C378.333,498.167,296,447.5,296,447.5C270.5,436,216,419,216,419c-12-6-15-20-15-20c5,0.5,26.5-8.5,26.5-8.5l-26.5-31l26-9.5    l-26-23.5l29-17.5c-19-145.5,109-180.5,109-180.5s-9.5,138,8,153.5c0,0,35.834-27.5,76.667-29"/><path d="M423,548.834c7.5-0.5,9.834-9.668,9.834-9.668C436.666,526.166,448,517,448,517c20.334-18.832,102.667-69.5,102.667-69.5    c25.5-11.5,80-28.5,80-28.5c12-6,15-20,15-20c-5,0.5-26.5-8.5-26.5-8.5l26.5-31l-26-9.5l26-23.5l-29-17.5    c19-145.5-109-180.5-109-180.5s9.5,138-8,153.5c0,0-35.834-27.5-76.667-29"/></g><path fill="#F1996B" d="M526.875,349c-0.504-0.579-1.638-0.396-2.262-0.281c-3.223,0.598-6.087,3.236-8.14,5.617   c-3.188,3.697-5.497,8.293-8.43,12.216c-2.324,3.109-5.007,5.961-7.836,8.615c-6.988,6.558-16.157,10.835-25.915,10.476   c-6.823-0.251-13.843-3.613-19.418-7.393c0,0,14.125-32.125,61-32C515.875,346.25,523.5,345.125,526.875,349z"/><path fill="#F1996B" d="M331.347,349.455c0.504-0.579,1.638-0.396,2.262-0.281c3.223,0.598,6.087,3.236,8.14,5.617   c3.188,3.697,5.497,8.293,8.43,12.216c2.324,3.109,5.007,5.961,7.836,8.615c6.988,6.558,16.157,10.835,25.915,10.476   c6.823-0.251,13.843-3.613,19.418-7.393c0,0-14.125-32.125-61-32C342.347,346.705,334.722,345.58,331.347,349.455z"/></g></svg>
          </Box>

          <Text fontSize="28px" textAlign="center" textTransform="uppercase">Foxy Hunt</Text>

          <Text lineHeight="1.2" textAlign="center" style={{ padding: "16px" }}>
            Foxy ladies of Leicester the challenge is set!
            <br/>
            Correctly solve the following 10 clues and you will be taken on a mind blowing tour of Leicester culminating in the discovery of hen house treasure.
            <br/>
            Fail to solve the clues and you will be left sinking Sour Cherry shots in Revolution!
            <br/>
            Remember to receive the full payload of treasure you must have photographic evidence of all solved clues.
            <br/>
            Game on!
          </Text>

          { clues.map( (c, i) => i > 0 && clues[i-1].correct || i === 0 ? (
            <div key={ i } style={{ marginBottom: "24px" }}>
              <Text lineHeight="25px" textAlign="center" style={{ margin: "0 auto", border: "1px solid", borderRadius: "50%", width: "30px", height: "30px" }}>
                { i + 1 }
              </Text>
              <Text textAlign="center" style={{ margin: "8px 0" }}>{ c.clue }</Text>
              <Input
                value={ c.input }
                type="text"
                placeholder="Answer goes here!"
                border="1px solid"
                borderColor={ c.correct ? "mint" : "pink" }
                width="90%"
                onChange={ ({ target }) => onSetInput(i, target.value) }
              />
            </div>
          ) : null )}
        </div>

        <GridCell gridRowStart={2} gridRowEnd={3} style={{ textAlign: 'center' }}>
          <svg width="50px" fill="#F1996B" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 50 50"><path d="M21.316,23.836c0,0-12.675,1.979-13.597-3.036c-0.922-5.015,7.126-8.977,7.126-8.977  c-7.525,1.717-10.033,7.392-10.033,9.637c0,2.243,0.665,11.613,17.292,11.35c16.627-0.264,18.741,1.582,22.699,4.755  C45.336,16.972,21.316,23.836,21.316,23.836z M26.897,31.61l0.059-0.251l2.143-1.849l-2.143-1.451l2.143-1.584  c0,0-1.154-1.229-2.264-2.4c0.918-0.089,1.906-0.149,2.937-0.149c4.801,0,8.413,1.212,10.747,3.604  c1.77,1.814,2.799,4.354,3.073,7.564C40.718,33.056,37.246,31.741,26.897,31.61z"/></svg>
        </GridCell>
      </Grid>
    )
  }
}

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators({ ...actions }, dispatch)
  })
)(Hunt)
