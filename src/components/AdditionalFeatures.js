import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { addFeature } from '../actions/actions';


const AdditionalFeatures = props => {
  const addFeature = (featureId)=>{
    props.addFeature(featureId);
  }
  
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature = { addFeature } />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStatetoProps = state => {
  return{
    additionalFeatures: state.additionalFeatures
  }
}
export default connect(mapStatetoProps, { addFeature })(AdditionalFeatures);
