---
title: TrustFed-TinyIDS
summary: Research framework for detecting unseen attacks on IoT networks with an autoencoder trained on benign traffic only, conformal false-alarm control, federated training and an INT8 TinyML path. M.Sc. project; journal manuscript in preparation.
cv: "IoT intrusion detection (TON_IoT): benign-only autoencoder with a conformal three-way rule (benign alarm rate 0.98% vs 1% target), FedAvg/FedProx training and INT8 TFLite deployment; 10 seeds per experiment."
role: [Designed the framework, ran every experiment and wrote the manuscript]
highlights:
  - "Benign ANOMALY rate 0.98% against a 1% target; 45.6% of flows from unseen attack families flagged ANOMALY (mean of 10 seeds)."
  - "Showed that most of the federated model's gap came from under-training: with matched training, IID FedAvg reached 40.1% versus the central model's 45.6%."
  - "Found that inherited conformal thresholds survive INT8 quantisation for the 53-feature model but break for the 21-feature device model, and measured the cost of recalibration."
---

IoT networks need intrusion detectors that flag attacks they were never trained on, keep false alarms within a budget, learn across many sites and run on small devices. TrustFed-TinyIDS studies these requirements together on the TON_IoT dataset.

### How it works

- **Benign-only detector.** A small autoencoder (4,829 parameters) learns normal traffic only, so it does not depend on the attack families seen in training.
- **Conformal three-way decision.** Each flow gets a p-value against held-out benign scores and is labelled ANOMALY, UNCERTAIN or NORMAL. This bounds the false-alarm rate on benign traffic; nothing is guaranteed about attacks.
- **Federated learning.** FedAvg and FedProx under IID and non-IID (Dirichlet) splits, with an analysis of why the federated model can lag behind the central one.
- **TinyML.** INT8 TFLite conversion and a study of which thresholds survive quantisation and input corruption.
- **Host-level evidence.** UNCERTAIN flows are accumulated per host (window sums, CUSUM, Shiryaev–Roberts) under a budget of one false escalation per host per week.

### Honest limits

This is research code. The host-level experiments are simulations, because the dataset has no timestamps, and nothing has been validated in a real deployment. The pre-specified host-level hypothesis was not supported: the new rule detected more but exceeded the false-escalation budget on test hosts.
