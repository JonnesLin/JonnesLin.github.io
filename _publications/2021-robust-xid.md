---
id:             2021-robust-xid
title:          "Robust Audio-Visual Instance Discrimination"
authors:
    - Me 
    - Ishan
    - Nuno
venue:          IEEE/CVF Conf. on Computer Vision and Pattern Recognition (CVPR), 2021.
year:           "2021-03"
highlight:      "Oral presentation"
thumbnail:      assets/publications/2021-robust-xid/thumbnail.png
bibtex:         "@InProceedings{morgado2021_robust_xid,<br>&emsp;title={Robust Audio-Visual Instance Discrimination},<br>&emsp;author={Pedro Morgado, Ishan Misra, Nuno Vasconcelos},<br>&emsp;booktitle={Computer Vision and Pattern Recognition (CVPR), IEEE/CVF Conf. on },<br>&emsp;year={2021}}"
links:
    pdf:    	assets/publications/2021-robust-xid/cvpr21-robust-xid.pdf
    paper:      https://arxiv.org/abs/2103.15916
    video:      https://youtu.be/OjADJbvMCwI
    bibtex:     assets/publications/2021-robust-xid/ref.txt
layout: project
short_title: Robust xID
video_embed: https://www.youtube.com/embed/OjADJbvMCwI
abstract: "We present a self-supervised learning method to learn audio and video representations. Prior work uses the natural correspondence between audio and video to define a standard cross-modal instance discrimination task, where a model is trained to match representations from the two modalities. However, the standard approach introduces two sources of training noise. First, audio-visual correspondences often produce faulty positives since the audio and video signals can be uninformative of each other. To limit the detrimental impact of faulty positives, we optimize a weighted contrastive learning loss, which down-weighs their contribution to the overall loss. Second, since self-supervised contrastive learning relies on random sampling of negative instances, instances that are semantically similar to the base instance can be used as faulty negatives. To alleviate the impact of faulty negatives, we propose to optimize an instance discrimination loss with a soft target distribution that estimates relationships between instances. We validate our contributions through extensive experiments on action recognition tasks and show that they address the problems of audio-visual instance discrimination and improve transfer learning performance."
---