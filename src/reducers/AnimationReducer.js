
const initState = {

    prjPageInView: false
}


const AnimationReducer = (state = initState, action) => {



    switch (action.type) {

        case ("PRJ_PAGE_IN_VIEW"):

        
            return {
                ...state,
                prjPageInView: action.payload,

            };


        default:
            return state;
    }



}

export default AnimationReducer