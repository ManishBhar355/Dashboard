import React from 'react';
// import './CustomerFeedback.css'; // Ensure you import your CSS
import JennyImg from '../assets/images/jenny.png';
import DianneImg from '../assets/images/dianne.png';
import DevonImg from '../assets/images/devon.png';

const CustomerFeedback = () => {
    const feedbacks = [
        { name: 'Jenny Wilson', comment: 'The food was excellent and so was the service.', rating: '5', img: JennyImg },
        { name: 'Dianne Russell', comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread.', rating: '4', img: DianneImg  },
        { name: 'Devon Lane', comment: 'The wings were great, with lean meat and a tender taste.', rating: '5', img: DevonImg  },
    ];

    return (
        <div className="customer-feedback">
            <h3>Customer's Feedback</h3>
            {feedbacks.map((feedback, index) => (
                <div key={index} className="feedback">
                    <div className="feedback-header">
                        <div className='feed-name'>
                    <img src={feedback.img} alt={`${feedback.name}`} style={{ width: '30px', height: '30px', marginRight: '10px' }} /> <span className="feedback-name">{feedback.name}</span> </div>
                        <span className="feedback-rating">{'⭐'.repeat(feedback.rating)}</span>
                    </div>
                    <p className="feedback-comment">{feedback.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default CustomerFeedback;
