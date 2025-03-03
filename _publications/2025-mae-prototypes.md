---
id:             2025-mae-prototypes
title:          "From Prototypes to General Distributions: An Efficient Curriculum for Masked Image Modeling"
authors:        [Me, ChengEn, Huanran, Jifan, YuHen, Pedro]
venue:          IEEE/CVF Conf. on Computer Vision and Pattern Recognition (CVPR), Nashville, 2025.
year:           "2025-06"
thumbnail:      assets/publications/2025-mae-prototypes/banner.jpg
bibtex:         "@InProceedings{lin2025prototypes,<br>&emsp;title={From Prototypes to General Distributions: An Efficient Curriculum for Masked Image Modeling},<br>&emsp;author={Jinhong Lin and Cheng-En Wu and Huanran Li and Jifan Zhang and Yu Hen Hu and Pedro Morgado},<br>&emsp;booktitle={IEEE/CVF Conf. on Computer Vision and Pattern Recognition (CVPR)},<br>&emsp;year={2025}<br>&emsp;}"

links:
    paper:      https://arxiv.org/abs/2411.10685
    bibtex:     assets/publications/2025-mae-prototypes/ref.txt

layout: project
short_title: Efficient Curriculum for Masked Image Modeling
abstract: "Masked Image Modeling (MIM) has emerged as a powerful self-supervised learning paradigm for visual representation learning, enabling models to acquire rich visual representations by predicting masked portions of images from their visible regions. While this approach has shown promising results, we hypothesize that its effectiveness may be limited by optimization challenges during early training stages, where models are expected to learn complex image distributions from partial observations before developing basic visual processing capabilities. To address this limitation, we propose a prototype-driven curriculum leagrning framework that structures the learning process to progress from prototypical examples to more complex variations in the dataset. Our approach introduces a temperature-based annealing scheme that gradually expands the training distribution, enabling more stable and efficient learning trajectories. Through extensive experiments on ImageNet-1K, we demonstrate that our curriculum learning strategy significantly improves both training efficiency and representation quality while requiring substantially fewer training epochs compared to standard Masked Auto-Encoding. Our findings suggest that carefully controlling the order of training examples plays a crucial role in self-supervised visual learning, providing a practical solution to the early-stage optimization challenges in MIM."
---