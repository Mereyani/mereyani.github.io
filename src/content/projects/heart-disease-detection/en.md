---
title: Heart Disease Detection
summary: Detecting heart disease from 1,190 clinical records with K-Nearest Neighbors and Naive Bayes. Naive Bayes reached 84.0% accuracy on the test set.
coverAlt: "Naive Bayes confusion matrix on 238 test records: 95 and 105 correct, 17 and 21 misclassified."
highlights:
  - "Naive Bayes: 84.0% accuracy on 238 held-out records."
  - "K-Nearest Neighbors: 79.8% accuracy on the same test set."
---

- Processed and normalised a clinical dataset of 1,190 patient records with Python, Pandas and scikit-learn, encoding the categorical columns.
- Split the data 80/20 with stratification, leaving 238 records for testing.
- Trained and compared a K-Nearest Neighbors classifier (after searching over the number of neighbours) and a Gaussian Naive Bayes classifier.

![Confusion matrix for K-Nearest Neighbors on 238 test records: 90 and 100 correct, 22 and 26 misclassified.](./knn-confusion-matrix.png)

*K-Nearest Neighbors: 190 of 238 test records classified correctly.*
