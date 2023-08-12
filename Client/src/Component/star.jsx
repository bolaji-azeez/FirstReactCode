

const Star = ({marked, starId})  => {
    return(
        <div>
         <span data-star-id={starId} className="star" role="button">
            {
                marked ? "\u26505" : "\u2606"
            }

        </span>
        <span data-star-id={starId} className="star" role="button">
            {
                marked ? "\u26505" : "\u2606"
            }

        </span>
        <span data-star-id={starId} className="star" role="button">
            {
                marked ? "\u26505" : "\u2606"
            }

        </span>
        <span data-star-id={starId} className="star" role="button">
            {
                marked ? "\u26505" : "\u2606"
            }

        </span>        <span data-star-id={starId} className="star" role="button">
            {
                marked ? "\u26505" : "\u2606"
            }

        </span>
        </div>

    );
    
};

export default Star