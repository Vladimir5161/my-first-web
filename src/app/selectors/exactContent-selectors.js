let getContentMap = arrey => {
    return arrey.reduce(
        (map, product) => ({
            ...map,
            [product.id]: product
        }),
        {}
    );
};

export const exactContentId = (state) => {
    return getContentMap(state.Data.Data)
}

export const newsDataIdSelector = state => {
    return getContentMap(state.newsData)
}