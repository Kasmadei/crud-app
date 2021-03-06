let reviews = [
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
];

export const createReview = (review) => {
    reviews.unshift(review)
};

export const getAllReviews = () => reviews;

export const deleteReview = (id) => {
    const res = reviews.filter(review => review.key !== id)
    reviews = res
    return res
}

export const updateReview = (review) => {
    reviews.map(r => {
        if (r.key === review.key) {
            r = review
        }
    });
    return reviews
}