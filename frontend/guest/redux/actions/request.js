export function loadRequest() {
    return {
        type : 'SET_EXAMPLE',
        payload: {
            request: {
                url: '/categories'
            },
            options: {
                onSuccess({ getState, dispatch, response }){
                    console.log(response)
                    dispatch({
                        type : 'SET_EXAMPLE_SUCCESS',
                        payload: "success"
                    })
                },
                onError({ getState, dispatch, error }){
                    console.log(error)
                    dispatch({
                        type : 'SET_EXAMPLE_FAILURE',
                        payload: "error"
                    })
                }
            }
        }
    }
}
