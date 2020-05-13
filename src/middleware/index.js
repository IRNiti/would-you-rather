import logger from './logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css'

export default applyMiddleware(
	thunk,
	logger
)