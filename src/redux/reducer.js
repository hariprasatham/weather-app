


const initialState = {
    city: '',
    weather: {}
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'set':
            return{
                city: action.payload.city,
                weather: action.payload.weather
            }

        default: 
            return state;
    }
}