---
id:             2020-deep-rtc
title:          "Solving Long-tailed Recognition with Deep Realistic Taxonomic Classifier"
authors:        
    - Gina 
    - Me
    - Pei
    - John
    - Nuno
venue:          European Conference on Computer Vision (ECCV), <strike>Glasgow, UK</strike>, Virtual, 2020.
year:           "2020-06"
thumbnail:      assets/publications/2020-deep-rtc/thumbnail.jpg
bibtex:         "@inproceedings{Wu20DeepRTC,<br>&emsp;title={Solving Long-tailed Recognition with Deep Realistic Taxonomic Classifier},<br>&emsp;author={Tz-Ying Wu and Pedro Morgado and Pei Wang and Chih-Hui Ho and Nuno Vasconcelos},<br>&emsp;booktitle={European Conference on Computer Vision (ECCV)},<br>&emsp;year={2020}<br>}"
links:
    pdf:        assets/publications/2020-deep-rtc/paper.pdf
    paper:      https://arxiv.org/abs/2007.09898
    suppl:      assets/publications/2020-deep-rtc/supp.pdf
    code:       https://github.com/gina9726/Deep-RTC
    website:    http://www.svcl.ucsd.edu/projects/deep-rtc/
    video:      https://www.youtube.com/watch?v=s9yxA_VAxx0
    bibtex:     assets/publications/2020-deep-rtc/ref.txt
layout: project
short_title: Deep RTC
video_embed: https://www.youtube.com/embed/s9yxA_VAxx0
abstract: "Long-tail recognition tackles the natural non-uniformly distributed data in real-world scenarios. While modern classifiers perform well on populated classes, its performance degrades significantly on tail classes. Humans, however, are less affected by this since, when confronted with uncertain examples, they simply opt to provide coarser predictions. Motivated by this, a deep realistic taxonomic classifier (Deep-RTC) is proposed as a new solution to the long-tail problem, combining realism with hierarchical predictions. The model has the option to reject classifying samples at different levels of the taxonomy, once it cannot guarantee the desired performance. Deep-RTC is implemented with a stochastic tree sampling during training to simulate all possible classification conditions at finer or coarser levels and a rejection mechanism at inference time. Experiments on the long-tailed version of four datasets, CIFAR100, AWA2, Imagenet, and iNaturalist, demonstrate that the proposed approach preserves more information on all classes with different popularity levels. Deep-RTC also outperforms the state-of-the-art methods in longtailed recognition, hierarchical classification, and learning with rejection literature using the proposed correctly predicted bits (CPB) metric."
---