'use server'

import { type Feedback , feedbacks } from "./types";

export async function getAllFeedbacks(enterpriseId: string | null): Promise<Feedback[]> {
    return new Promise((resolve, reject) => {
        let feedbacksFiltered: Feedback[] | null = null;
      setTimeout(() => {
        if (enterpriseId) {
            feedbacksFiltered = feedbacks.filter(feedback => feedback.enterprise_id === enterpriseId)
        }
        resolve(feedbacksFiltered || feedbacks);
      }, 2000);
    });
}
