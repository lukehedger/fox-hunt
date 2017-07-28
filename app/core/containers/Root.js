import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { configureStore } from 'core/store'
import { Container as Hunt } from '../../hunt'

const store = configureStore()

export default class Root extends Component {
  componentWillMount() {
    console.log('🦊 F O X Y  H U N T 🦊')
  }

  render() {
    return (
      <Provider store={ store }>
        <Hunt />
      </Provider>
    )
  }
}
