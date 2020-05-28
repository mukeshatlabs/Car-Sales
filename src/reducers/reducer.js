import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/actions';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

function reducer(state = initialState, action){
  switch(action.type){
    case ADD_FEATURE:
      const addedFeature = state.additionalFeatures.find(feature => feature.id === action.payload);
      const remainingFeatures = state.additionalFeatures.filter(feature => {return feature.id!==action.payload});
      const newStateAfterAdd = {...state,
        additionalPrice: state.additionalPrice + addedFeature.price,
        car: {...state.car,
        features: [...state.car.features, addedFeature]},
        additionalFeatures: remainingFeatures
      };
      return newStateAfterAdd;
    case REMOVE_FEATURE:
      const removedFeature = state.car.features.find(feature => feature.id === action.payload);
      const remainingCarFeatures = state.car.features.filter(feature => {return feature.id!==action.payload});
      const newStateAfterRemove = {...state,
        additionalPrice: state.additionalPrice - removedFeature.price,
        car: {...state.car,
        features: remainingCarFeatures},
        additionalFeatures: [...state.additionalFeatures, removedFeature]
      };
      return newStateAfterRemove;
    default:
      return state;
  }
}

export default reducer;
