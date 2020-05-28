export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export function addFeature(featureId){
  return{
    type: ADD_FEATURE,
    payload: featureId
  }
} 

export function removeFeature(featureId){
  return{
    type: REMOVE_FEATURE,
    payload: featureId
  }
} 