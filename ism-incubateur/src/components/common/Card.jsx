import React from 'react';
import './Card.css';

const Card = ({
    children,
    variant = 'default',
    hoverable = false,
    padding = 'medium',
    className = ''
}) => {
    const cardClasses = [
        'card',
        `card-${variant}`,
        hoverable ? 'card-hoverable' : '',
        `card-padding-${padding}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={cardClasses}>
            {children}
        </div>
    );
};

export default Card;

