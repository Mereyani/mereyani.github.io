---
title: Bone Fracture Classification
summary: My graduation project, a deep learning model that classifies X-rays as fractured or not fractured, with 98.2% accuracy on held-out test images.
coverAlt: Wrist, hand and forearm X-rays from the training data, each labelled fractured or not fractured.
highlights:
  - 98.2% accuracy and a 0.98 weighted F1 score on 506 held-out test X-rays.
  - Only 9 of the 506 test images misclassified.
cv: "Graduation project. VGG16 transfer-learning CNN: 98.2% accuracy and 0.98 F1 on 506 held-out X-rays."
---

My B.Sc. graduation project: a binary classifier, built in Python with TensorFlow and Keras, that decides whether an X-ray shows a fracture.

- **Data:** 9,243 training, 829 validation and 506 test X-rays of several body regions, resized to 224 × 224.
- **Model:** transfer learning on a frozen VGG16 base pre-trained on ImageNet, followed by two custom convolutional layers and a small dense head with dropout and L2 regularisation.
- **Training:** Adam optimiser, up to 20 epochs with early stopping on validation loss.
- **Evaluation:** accuracy, precision, recall and F1 on the untouched test set.

![Confusion matrix for the 506 test images: 264 and 233 correct in the two classes, 4 and 5 misclassified.](./confusion-matrix.png)

*Confusion matrix on the test set: 497 of 506 images classified correctly.*

*Training images from the Bone Fracture Multi-Region X-ray Data set by bmadushanirodrigo on Kaggle, released under the ODC Public Domain Dedication and Licence (PDDL).*
