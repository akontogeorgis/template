import { fromJS } from 'immutable';
import {
	API_CALL_SUCCESS, API_CALL_FAIL,
} from '../constants';

const initialState = fromJS({
	isApiCallSuccessful: false,
	apiCall: false,

});

export default (state = initialState, action) => {
	switch (action.type) {
		case API_CALL_SUCCESS:
			return state.set('isApiCallSuccessful', true);

		case API_CALL_FAIL:
			return state.set('isApiCallSuccessful', false);

		default:
			return state;
	}
};
