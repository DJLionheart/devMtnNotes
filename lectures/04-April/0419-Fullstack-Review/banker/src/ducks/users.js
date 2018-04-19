import axios from 'axios';

const initialState = {
    user: {}
}

const GET_USER_INFO = 'GET_USER_INFO';

export function getUser() {
    let userData = axios.get('/auth/me').then( res => {
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }

}



export default function reducer(state = initialState, action) {
    // default parameter ---------|
    switch( action.type ) {
        
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})
            // In Object.assign, objects will merge left to right, so items on the right will override if the left has the same property.
        

        default:       
            return state;   

    }
    
}


// The reduxPromiseMiddleware will (behind the scenes) concatenate three additional types to your constant: GET_USER_INFO_FULFILLED, PENDING, or REJECTED
