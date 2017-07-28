import { createLogger } from 'redux-logger'

const createMiddleware = isDevelopment => {
  // default middleware
  let middleware = []

  // logger middleware in development
  if (isDevelopment) middleware.push( createLogger({ collapsed: true }) )

  return middleware
}

export default createMiddleware
