import { useState } from 'react';
import Star from './Star';

function StarRating() {
    // RATINGS
    const ratings = ['Poor', 'Satisfactory', 'Good', 'Very Good', 'Excellent'];

    // STATE
    const [rating, setRating] = useState(-1);

    // FUNCTIONS
    const handleSetRating = function(i) {
        setRating(i);
    };

  return (
    <section className="flex flex-col justify-center items-center">
        <div className="flex gap-4">
            {[...Array(5)].map((star, i) => {
            return (
                <Star
                key={i}
                rateFunction={() => handleSetRating(i)}
                style={rating >= i ? "text-yellow-400" : "text-gray-300"}
                />
            );
            })}
        </div>
    
        <h2 className="absolute rating-text text-5xl">{ratings[rating]}</h2>
    </section>
  )
}

export default StarRating;