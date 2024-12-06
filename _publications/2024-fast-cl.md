---
id:             2024-fast-cl
title:          "Accelerating Augmentation Invariance Pretraining"
authors:        [Me, ChengEn, Yibing, Pedro]
venue:          Neural Information Processing Systems (NeurIPS), Vancouver, 2024.
year:           "2024-12"
thumbnail:      assets/publications/2024-fast-cl/banner.png
bibtex:         "@InProceedings{lin2024fastcl,<br>&emsp;title={Accelerating Augmentation Invariance Pretraining},<br>&emsp;author={Jinhong Lin and Cheng-En Wu and Yibing Wei and Pedro Morgado},<br>&emsp;booktitle={Advances in Neural Information Processing Systems (NeurIPS)},<br>&emsp;year={2024}<br>&emsp;}"
links:
    paper:      https://arxiv.org/abs/2410.22364
    bibtex:     assets/publications/2024-fast-cl/ref.txt

layout: project
short_title: Ranking Patches for Efficient CLIP Inference
abstract: "Our work tackles the computational challenges of contrastive learning methods, particularly for the pretraining of Vision Transformers (ViTs). Despite the effectiveness of contrastive learning, the substantial computational resources required for training often hinder their practical application. To mitigate this issue, we propose an acceleration framework, leveraging ViT's unique ability to generalize across inputs of varying sequence lengths. Our method employs a mix of sequence compression strategies, including randomized token dropout and flexible patch scaling, to reduce the cost of gradient estimation and accelerate convergence. We further provide an in-depth analysis of the gradient estimation error of various acceleration strategies as well as their impact on downstream tasks, offering valuable insights into the trade-offs between acceleration and performance.
We also propose a novel procedure to identify an optimal acceleration schedule to adjust the sequence compression ratios to the training progress, ensuring efficient training without sacrificing downstream performance. Our approach significantly reduces computational overhead across various self-supervised learning algorithms on large-scale datasets. In ImageNet, our method achieves speedups of 4× in MoCo, 3.3× in SimCLR, and 2.5× in DINO, demonstrating substantial efficiency gains."
---