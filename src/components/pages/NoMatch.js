import React from "react";
import { Link } from "react-router-dom";

export const NoMatch = () => (
	<div className='no-match'>
		<h2>404: Page not found</h2>
		<p>
			Sorry, we've misplaced that URL or it's pointing to something that doesn't
			exist. <Link to='/'>Head back home</Link> to try finding it again.
		</p>
	</div>
);

export default NoMatch;
