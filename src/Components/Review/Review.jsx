import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, addReview, deleteReview } from '../../Redux/Slice/AuthSlice';
import './Review.css';

const Reviews = () => {
    const dispatch = useDispatch();

    // Redux state selectors
    const { reviews, status, error } = useSelector((state) => state.reviews);

    // Local state for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
    });

    // Fetch all reviews on component mount
    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value,});
    };

    // Handle form submission to add a new review
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addReview(formData)); // Dispatch add review action
        setFormData({ name: '', email: '', comment: '' }); // Clear form
        alert('Thanks for the review!');
    };

    // Handle delete review
    const handleDelete = (id) => {
        dispatch(deleteReview(id)); // Dispatch delete review action
    };

    return (
        <section className='reviewPage' id='reviewPage'>
            <h2 className='heading3'>
                Reviews <span>Page</span>
            </h2>

            {/* Form to add a new review */}
            <section className='rev'>
                <p className='rpara'>
                    Share your experience with us or read what others have said...
                </p>

                <form className="review-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        {/* <label className='lab' htmlFor="name">Name: </label> */}
                        <input
                            className='inp'
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Enter your name..'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        {/* <label className='lab' htmlFor="email">Email: </label> */}
                        <input
                            className='inp'
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter your email id..'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        {/* <label className='lab' htmlFor="comment">Comment: </label> */}
                        <textarea
                            className='inp'
                            id="comment"
                            name="comment"
                            placeholder='Add comment here'
                            value={formData.comment}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <button type="submit" className="submit-button">Submit Review</button>
                </form>
            </section>

            {/* Section displaying all reviews */}
            <section className="reviews-section">
                <h2>Previous Reviews</h2>

                {status === 'loading' && <p>Loading reviews...</p>}
                {status === 'failed' && <p>Error: {error}</p>}

                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div className="revieww" key={review.id}>
                            <h3>{review.name}</h3>
                            <p>{review.email}</p>
                            <p>{review.comment}</p>
                            <button className="delete-button" onClick={() => handleDelete(review.id)}>
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet. Be the first to leave a review!</p>
                )}
            </section>
        </section>
    );
};

export default Reviews;
