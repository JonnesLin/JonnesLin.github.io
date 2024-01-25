---
id:             2023-robust-pt
title:          "Patch Ranking: Efficient CLIP by Learning to Rank Local Patches"
authors:        [eq_ChengEn, eq_Me, YuHen, Pedro]
venue:          Under Review
year:           "2023-01"
thumbnail:      assets/proj/2023-golden/title-image.jpg

layout: project
short_title: Efficient CLIP by Learning to Rank Local Patches
abstract: "Contrastive image-text pre-trained models such as CLIP have shown excellent adaptive ability to downstream tasks, but they face challenges due to the high computational requirements of the Vision Transformer (ViT) backbone. Existing approaches to enhance ViT efficiency focus on pruning patch tokens but fall short in addressing the multimodal nature of CLIP and identifying the optimal subset of tokens for peak performance. To bridge this gap, we propose greedy search methods to establish \"Golden Ranking\" and introduce a lightweight predictor trained specifically to approximate this Golden Ranking. To compensate for any performance degradation resulting from token pruning, we incorporate learnable visual tokens, which aid in restoring and potentially enhancing the model\'s performance. Our work presents a comprehensive and systematic investigation of pruning tokens within the ViT backbone of CLIP models. Through our framework, we successfully achieve a 60\% reduction in patch tokens in CLIP\'s ViT while incurring only a minimal average accuracy loss of 0.3% across seven datasets. Our study paves the way for constructing more computationally efficient multimodal models without compromising their performance, addressing a critical challenge in the application of advanced vision-language models."
---