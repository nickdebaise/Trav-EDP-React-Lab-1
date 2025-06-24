import React from 'react';
const Sock = (props) => {

    const renderAdditionalFeatureText = (key) => {
        return props.data.additionalFeatures[key] ? "Yes" : "No"
    }

    return (
        <div className="card" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>            <div className="card-body">
            <h5 className="card-title">Sock Details</h5>
            <div className="card-text">Size: {props.data.sockDetails.size}</div>
            <div className="card-text">Color: {props.data.sockDetails.color}</div>
            <div className="card-text">Pattern: {props.data.sockDetails.pattern}</div>
            <div className="card-text">Material: {props.data.sockDetails.material}</div>
            <div className="card-text">Condition: {props.data.sockDetails.condition}</div>
            <div className="card-text">For Foot: {props.data.sockDetails.forFoot}</div>
        </div>
            <div className="card-body">
                <h5 className="card-title">Additional Features</h5>
                <div className="card-text">Water Resistant: {renderAdditionalFeatureText("waterResistant")}</div>
                <div className="card-text">Padded: {renderAdditionalFeatureText("padded")}</div>
                <div className="card-text">Anti Bacterial: {renderAdditionalFeatureText("antiBacterial")}</div>
            </div>
            <div className="card-footer" >
                <small className="text-muted">Added: {props.data.addedTimestamp}</small>
            </div>
        </div>
    );
};
export default Sock;