import React from 'react'
import { render } from 'react-dom'

import Root from 'core/containers/Root'

// global styles
import 'core/style/global'

const rootEl = document.getElementById('Root')

render(<Root />, rootEl)
