
import React, { Component } from 'react'
import axios from 'axios'

class TweetForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: this.props.tweet.username,
			tweet: this.props.tweet.tweet
		}
	}

	handleInput = (e) => {this.setState({[e.target.name]: e.target.value})}

	handleBlur = () => {
		const tweet = { username: this.state.username, tweet: this.state.tweet }
		axios.put(
			`https://intense-castle-19926.herokuapp.com/api/v1/tweets/${this.props.tweet.id}`,
			{tweet: tweet}
		)
		.then(response => {
			console.log(response)
		})
		.catch(error => console.log(error))
	}

	render() {
		return (
			<div className="tile">
				<form onBlur={this.handleBlur}>
					<input className='input' type="text" name="username" placeholder='Your username' 
						value={this.state.username} onChange={this.handleInput} />
					<textarea className='input' name="tweet" placeholder='What´s happening?' 
						value={this.state.tweet} onChange={this.handleInput} ></textarea>
				</form>
			</div>
		);
	}
}

export default TweetForm