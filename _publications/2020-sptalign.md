---
id:             2020-sptalign
title:          "Learning Representations from Audio-Visual Spatial Alignment"
authors:        
    - [Me, "*"]
    - [YiLi, "*"]
    - Nuno
venue:          Neural Information Processing Systems (NeurIPS), 2020.
year:           "2020-10"
thumbnail:      assets/publications/2020-sptalign/thumbnail.jpg
bibtex:         "@inproceedings{morgadoNIPS20,<br>&emsp;title={Learning Representations from Audio-Visual Spatial Alignment},<br>&emsp;author={Pedro Morgado, Yi Li, Nuno Vasconcelos},<br>&emsp;booktitle={Advances in Neural Information Processing Systems (NeurIPS)},<br>&emsp;year={2020}<br>}"
links:
    pdf:        assets/publications/2020-sptalign/paper.pdf
    paper:      https://arxiv.org/abs/2011.01819
    suppl:      assets/publications/2020-sptalign/suppl.pdf
    code:       https://github.com/pedro-morgado/AVSpatialAlignment
    video:      https://youtu.be/E77nkQs1RMc
    bibtex:     assets/publications/2020-sptalign/ref.txt
other_venues:
    - title:    "[Workshop] Learning Representations from Audio-Visual Spatial Alignment"
      authors:    
      - [YiLi, "*"]
      - [Me, "*"]
      - Nuno
      venue:    CVPR Workshop - Sight and Sound, 2021.
      links:
        paper:  https://sightsound.org/papers/2021/Yi_Li_Learning_Representations_from_Audio-Visual_Spatial_Alignment.pdf
        talk:   https://youtu.be/IEFuj7WGO-c?t=3865
layout: project
short_title: Scripps Plankton Imaging System
video_embed: https://www.youtube.com/embed/E77nkQs1RMc
abstract: "We introduce a novel self-supervised pretext task for learning representations from audio-visual content. Prior work on audio-visual representation learning leverages correspondences at the video level. Approaches based on audio-visual correspondence (AVC) predict whether audio and video clips originate from the same or different video instances. Audio-visual temporal synchronization (AVTS) further discriminates negative pairs originated from the same video instance but at different moments in time. While these approaches learn high-quality representations for downstream tasks such as action recognition, their training objectives disregard spatial cues naturally occurring in audio and visual signals. To learn from these spatial cues, we tasked a network to perform contrastive audio-visual spatial alignment of 360° video and spatial audio. The ability to perform spatial alignment is enhanced by reasoning over the full spatial content of the 360° video using a transformer architecture to combine representations from multiple viewpoints. The advantages of the proposed pretext task are demonstrated on a variety of audio and visual downstream tasks, including audio-visual correspondence, spatial alignment, action recognition, and video semantic segmentation."
---