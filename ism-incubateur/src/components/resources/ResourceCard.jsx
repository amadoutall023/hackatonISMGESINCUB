import React from 'react';
import Card from '../common/Card';
import './ResourceCard.css';

const ResourceCard = ({ resource }) => {
    const getTypeIcon = (type) => {
        switch (type) {
            case 'PDF': return '📄';
            case 'PPTX': return '📊';
            case 'Video': return '🎬';
            default: return '📁';
        }
    };

    return (
        <Card variant="elevated" hoverable padding="none">
            <div className="resource-card">
                <div className="resource-header">
                    <span className="resource-type">{resource.type}</span>
                    <span className="resource-icon">{getTypeIcon(resource.type)}</span>
                </div>
                <div className="resource-body">
                    <h3 className="resource-title">{resource.title}</h3>
                    <p className="resource-description">{resource.description}</p>
                </div>
                <div className="resource-footer">
                    <div className="resource-meta">
                        <span className="resource-downloads">
                            📥 {resource.downloads}
                        </span>
                        {resource.duration && (
                            <span className="resource-duration">
                                ⏱ {resource.duration}
                            </span>
                        )}
                    </div>
                    <button className="resource-btn">
                        Telecharger
                    </button>
                </div>
            </div>
        </Card>
    );
};

export default ResourceCard;

