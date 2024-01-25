---
id:             2018-spatialaudiogen
title:          Self-Supervised Generation of Spatial Audio for 360° Video
authors:        
    - Me
    - Nuno
    - Tim
    - Oliver
venue:          Neural Information Processing Systems (NeurIPS), Montreal, Canada, 2018.
year:           "2018-12"
thumbnail:      assets/publications/2018-spatialaudiogen/thumbnail.png
bibtex:         "@inproceedings{morgadoNIPS18,<br>&emsp;title={Self-Supervised Generation of Spatial Audio for 360&deg Video},<br>&emsp;author={Pedro Morgado, Nuno Vasconcelos, Timothy Langlois and Oliver Wang},<br>&emsp;booktitle={Advances in Neural Information Processing Systems (NeurIPS)},<br>&emsp;year={2018}<br>}"
abstract:       We introduce an approach to convert mono audio recorded by a 360° video camera into spatial audio, a representation of the distribution of sound over the full viewing sphere. Spatial audio is an important component of immersive 360° video viewing, but spatial audio microphones are still rare in current 360° video production. Our system consists of end-to-end trainable neural networks that separate individual sound sources and localize them on the viewing sphere, conditioned on multi-modal analysis of audio and 360° video frames. We introduce several datasets, including one filmed ourselves, and one collected in-the-wild from YouTube, consisting of 360° videos uploaded with spatial audio. During training, ground-truth spatial audio serves as self-supervision and a mixed down mono track forms the input to our network. Using our approach, we show that it is possible to infer the spatial location of sound sources based only on 360° video and a mono audio track.
links:
    pdf:        assets/publications/2018-spatialaudiogen/paper.pdf
    paper:      https://arxiv.org/abs/1809.02587
    suppl:      http://www.svcl.ucsd.edu/~morgado/spatialaudiogen/supplementary_material.zip
    code:       https://github.com/pedro-morgado/spatialaudiogen
    data:       https://github.com/pedro-morgado/spatialaudiogen
    website:    https://pedro-morgado.github.io/spatialaudiogen/
    video:      https://www.youtube.com/watch?v=SXFUr2GkxS8
    bibtex:     assets/publications/2018-spatialaudiogen/ref.txt

layout: project
short_title: Spatial Audio Generation
video_embed: https://www.youtube.com/embed/SXFUr2GkxS8
abstract: "We introduce an approach to convert mono audio recorded by a 360 video camera into spatial audio, a representation of the distribution of sound over the full viewing sphere. Spatial audio is an important component of immersive 360 video viewing, but spatial audio microphones are still rare in current 360 video production. Our system consists of end-to-end trainable neural networks that separate individual sound sources and localize them on the viewing sphere, conditioned on multi-modal analysis of audio and 360 video frames. We introduce several datasets, including one filmed ourselves, and one collected in-the-wild from YouTube, consisting of 360 videos uploaded with spatial audio. During training, ground-truth spatial audio serves as self-supervision and a mixed down mono track forms the input to our network. Using our approach, we show that it is possible to infer the spatial location of sound sources based only on 360 video and a mono audio track."
---
