
const initState = {

    selectedMenu: {}
}


const AnimationReducer = (state = initState, action) => {



    switch (action.type) {

        case ("SET_SELECTED_MENU"):

        
            return {
                ...state,
                selectedMenu: action.payload,

            };


        default:
            return state;
    }



}

export default AnimationReducer