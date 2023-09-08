import axios from "axios";

export const Read = () => {
    return (dispatch) => {
        dispatch({ type: "STATS_FETCH_PENDING" });

        axios
            .get(
                "https://newsapi.org/v2/everything?q=apple&from=2023-09-07&to=2023-09-07&sortBy=popularity&apiKey=97c0bf74ff9040e3b91eb4f002821e7d"
            )
            .then((res) => {
                console.log(res);
                dispatch({
                    type: "STATS_FETCH_SUCCESS",
                    read: res.data,
                });
            })

            .catch((error) => {
                dispatch({
                    type: "STATS_FETCH_FAILURE",
                    message: error.response,
                });
            });
    };
};
