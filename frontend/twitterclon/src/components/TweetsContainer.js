
import React, { Component } from 'react'
import axios from 'axios'
import Tweet from './Tweet.js'
import TweetForm from './TweetForm.js'
import update from 'immutability-helper'

class TweetsContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			tweets: [],
			editingTweetId: null
		}
	}

	componentDidMount() {
		axios.get('https://intense-castle-19926.herokuapp.com/api/v1/tweets.json')
		.then(response => {
			this.setState({tweets: response.data})
		})
		.catch(error => console.log(error))
	}

	addNewTweet = () => {
		axios.post('https://intense-castle-19926.herokuapp.com/api/v1/tweets', {tweet: {username: '', tweet: ''}})
		.then(response => {
			console.log(response)
			const tweets = update(this.state.tweets, { $splice: [[0, 0, response.data]] })
			this.setState({tweets: tweets, editingTweetId: response.data.id})
		})
		.catch(error => console.log(error))	
	}

	render() {
		return (
	  		<div>
	  			<div>
	  				<button className="newTweetButton" onClick={this.addNewTweet}>
	  					<span>
	  						New Tweet
	  					</span>
	  				</button>
	  			</div>
	  			{this.state.tweets.map((tweet) => {
	  				if (this.state.editingTweetId === tweet.id) {
	  					return(<TweetForm tweet={tweet} key={tweet.id} />)
	  				} else {
	  					return(<Tweet tweet={tweet} key={tweet.id} />)
	  				}
	  			})}
	  		</div>
		);
	}
}

export default TweetsContainer