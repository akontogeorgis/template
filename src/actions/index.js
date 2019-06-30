import {
	API_CALL_REQUEST,
} from '../constants';

export default function apiCallRequest(apiCall) {
	return {
		type: API_CALL_REQUEST,
		apiCall,
	};
}
