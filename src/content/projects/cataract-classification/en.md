---
title: Cataract Classification
summary: A screening model that tells immature from mature cataracts in eye images, using a VGG16 base with custom CNN layers. 86.6% accuracy on held-out images.
coverAlt: Close-up eye photographs from the dataset, each labelled immature or mature cataract.
highlights:
  - 86.6% accuracy and a 0.87 weighted F1 score on 82 held-out test images.
cv: "VGG16 with custom CNN layers telling immature from mature cataract: 86.6% accuracy on 82 test images."
---

An automated screening system that classifies eye images by cataract stage: immature or mature.

- **Data:** 410 annotated eye images at 416 × 416, split 80/20 into 328 training and 82 test images with stratification.
- **Model:** a frozen VGG16 base pre-trained on ImageNet, followed by two custom convolutional layers and a dense head with dropout and L2 regularisation.
- **Training:** Adam optimiser for 20 epochs.

![Confusion matrix for the 82 test images: 37 and 34 correct in the two classes, 6 and 5 misclassified.](./confusion-matrix.png)

*Confusion matrix on the test set: 71 of 82 images classified correctly.*

*Eye images from the Cataract Classification Dataset by akshayramakrishnan28 on Kaggle, licensed CC BY-SA 4.0. The sample grid is adapted from my notebook and shared under the same licence.*
