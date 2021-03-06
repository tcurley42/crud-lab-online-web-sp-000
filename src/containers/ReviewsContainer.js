import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id}/>
        <Reviews restaurantId={this.props.restaurant.id}/>
      </div>
    )
  }
}

export default ReviewsContainer
