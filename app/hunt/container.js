import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

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
      <div>
        <h1>Hunt</h1>
        <p>Intro...</p>

        { clues.map( (c, i) => (
          <div key={ i }>
            <h3>{ c.clue }</h3>
            <span>Correct? { `${c.correct}` }</span>
            <input
              value={ c.input }
              type='text'
              placeholder='Answer goes here!'
              onChange={ ({ target }) => onSetInput(i, target.value) }
            />
          </div>
        ))}
      </div>
    )
  }
}

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators({ ...actions }, dispatch)
  })
)(Hunt)
