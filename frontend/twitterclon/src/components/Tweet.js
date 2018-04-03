
import React from 'react'

const Tweet = ({tweet}) =>
	<div className="tile">
		<h4>{tweet.username}</h4>
		<p>{tweet.tweet}</p>
		<hr className="style14"/>
	</div>

export default Tweet