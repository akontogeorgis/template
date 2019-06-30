import { combineEpics, ofType } from 'redux-observable';
import {
	mergeMap, map, pluck, catchError,
	// tap
} from 'rxjs/operators';
import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const apiCallEpic = action => action.pipe(
	ofType('API_CALL_REQUEST'),
	mergeMap(() => ajax.get('a').pipe(
		// tap(console.log),
		pluck('response', 'message'),
		map(response => ({ type: 'API_CALL_SUCCESS', response })),

		catchError(response => from([{ type: 'API_CALL_FAIL', response }])),
	)),
);

export default combineEpics(
	apiCallEpic,
);
