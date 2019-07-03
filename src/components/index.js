import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../assets/favicon.ico';
// import { apiCallRequest, } from '../actions';

function Home() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>My Title</title>
				link={[
					{ rel: 'shortcut icon', href: `${favicon}` },
				]}
			</Helmet>
			<p className="content_container"> I am your Template now! </p>
		</>
	);
}
export default Home;
