import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'react-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;