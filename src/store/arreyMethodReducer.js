

const arreyMethodReducer = (state = {}, action ) => {
    switch(action.type) {
        case "GETCONTENTMAP":
            return action.arrey.reduce(
                (map, product) => ({
                        ...map,
                        [product.id]: product
                    }),
                    {}
                    )
            default: 
                return state;
    }
}

export default arreyMethodReducer