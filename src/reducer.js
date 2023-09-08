const initialState = {
    loading: true,
    read: null,
};

const HomeReducers = (state = initialState, action) => {
    switch (action.type) {
        case "STATS_FETCH_PENDING":
            return {
                ...state,
                loading: true,
                read: null,
            };
        case "STATS_FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                read: action.read,
            };
        case "STATS_FETCH_FAILURE":
            return {
                ...state,
                loading: false,
                read: null,
            };

        default:
            return { ...state };
    }
};
export default HomeReducers;
