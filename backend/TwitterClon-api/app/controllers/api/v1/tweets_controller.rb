module Api::V1
	class TweetsController < ApplicationController
	  def index
	  	@tweets = Tweet.order("created_at DESC")
	  	render json: @tweets
	  end

	  def create
	  	@tweet = Tweet.create(tweet_params)
	  	render json: @tweet
	  end

	  def update
	  	@tweet = Tweet.find(params[:id])
	  	@tweet.update_attributes(tweet_params)
	  	render json: @tweet
	  end

	  private

	  def tweet_params
	  	params.require(:tweet).permit(:username, :tweet)
	  end
	end
end