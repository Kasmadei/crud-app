import { createReview, getAllReviews, deleteReview, updateReview } from './MockDb';
import { delay } from './utils';

const MOCK_DELAY = 3000;

export class Manager {
    async createReviewAsync(review) {
        await delay(MOCK_DELAY);
        createReview(review)
        return true
    }

    async deleteReviewAsync(id) {
        await delay(MOCK_DELAY)
        deleteReview(id)
        return true
    }

    async getAllReviewsAsync() {
        await delay(MOCK_DELAY) 
        return getAllReviews()
    }
    async updateReviewAsync(review) {
        await delay(MOCK_DELAY);
        return updateReview(review)
    }
}