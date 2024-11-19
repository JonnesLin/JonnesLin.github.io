---
id:             2025-mae-prototypes
title:          "From Prototypes to General Distributions: An Efficient Curriculum for Masked Image Modeling"
authors:        [Me, ChengEn, Huanran, Jifan, YuHen, Pedro]
venue:          under review.
year:           "2025-05"
thumbnail:      assets/publications/2025-mae-prototypes/banner.jpg
bibtex:         "@misc{lin2024prototypesgeneraldistributionsefficient,
      title={From Prototypes to General Distributions: An Efficient Curriculum for Masked Image Modeling}, 
      author={Jinhong Lin and Cheng-En Wu and Huanran Li and Jifan Zhang and Yu Hen Hu and Pedro Morgado},
      year={2024},
      eprint={2411.10685},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2411.10685}, 
}"
links:
    paper:      https://arxiv.org/abs/2411.10685
    bibtex:     assets/publications/2025-mae-prototypes/ref.txt

layout: project
short_title: Ranking Patches for Efficient CLIP Inference
abstract: "Contrastive image-text pre-trained models such as CLIP have shown remarkable adaptability to downstream tasks. However, they face challenges due to the high computational requirements of the Vision Transformer (ViT) backbone. Current strategies to boost ViT efficiency focus on pruning patch tokens but fall short in addressing the multimodal nature of CLIP and identifying the optimal subset of tokens for maximum performance. To address this, we propose greedy search methods to establish a ``Golden Ranking'' and introduce a lightweight predictor specifically trained to approximate this Ranking. To compensate for any performance degradation resulting from token pruning, we incorporate learnable visual tokens that aid in restoring and potentially enhancing the model's performance. Our work presents a comprehensive and systematic investigation of pruning tokens within the ViT backbone of CLIP models. 
Through our framework, we successfully reduced 40% of patch tokens in CLIP's ViT while only suffering a minimal average accuracy loss of 0.3% across seven datasets. Our study lays the groundwork for building more computationally efficient multimodal models without sacrificing their performance, addressing a key challenge in the application of advanced vision-language models."
---