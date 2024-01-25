---
id:             2023-robust-pt
title:          "Prompt Tuning Vision Language Models is Robust to Noisy Labels"
authors:        [eq_ChengEn, eq_Me, YuHen, Pedro]
venue:          Under Review
year:           "2023-01"
thumbnail:      assets/publications/2023-robust-pt/title-image.png
bibtex:         "@InProceedings{wu2023_robust_pt,<br>&emsp;title={Why Is Prompt Tuning for Vision-Language Models Robust to Noisy Labels?},<br>&emsp;author={Cheng-En Wu, Yu Tian, Haichao Yu, Heng Wang, Pedro Morgado, Yu Hen Hu, Linjie Yang},<br>&emsp;booktitle={International Conference in Computer Vision (ICCV)},<br>&emsp;year={2023}<br>&emsp;}"

layout: project
short_title: Robustness of Prompt Tuning
abstract: "Vision-language models such as CLIP learns a generic text-image embedding from large-scale of training data. A vision-language model can be adapted to a new classification task through few-shot prompt tuning. We find that such prompt tuning process is highly robust to label noises. This intrigues us to study the key reasons contributing to the robustness of the prompt tuning paradigm. We conducted extensive experiments to explore this property and find the key factors are: 1. the fixed classname tokens provide a strong regularization to the optimization of the model, reducing gradients induces by the noisy samples; 2. the powerful pre-trained image-text embedding that is learned from diverse and generic web data provides strong prior knowledge for image classification. Further, we demonstrate that noisy zero-shot predictions from CLIP can be used to tune its own prompt, significantly enhancing prediction accuracy in the unsupervised setting."
---