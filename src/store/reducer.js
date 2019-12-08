const initialState = {
    age:20
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP_ASYNC': 
            newState.age++;
            break;
        
        case 'AGE_DOWN_ASYNC':
            const minAge = 0;
            if (newState.age > minAge) {
                newState.age--;
            }
            break;
        default:
            break;
    }
    return newState;
};

export default reducer;