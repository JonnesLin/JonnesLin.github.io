---
id:             2017-score
title:          Semantically Consistent Regularization for Zero-Shot Recognition
authors:        
    - Me
    - Nuno
venue:          IEEE/CVF Conf. on Computer Vision and Pattern Recognition (CVPR), Honolulu, Hawaii, 2017.
year:           "2017-06"
thumbnail:      assets/publications/2017-score/thumbnail.png
bibtex:         "@inproceedings{morgadoCVPR17,<br>&emsp;title={Semantically Consistent Regularization for Zero-Shot Recognition},<br>&emsp;author={Pedro Morgado and Nuno Vasconcelos},<br>&emsp;booktitle={Computer Vision and Pattern Recognition (CVPR), IEEE/CVF Conf.~on},<br>&emsp;year={2017},<br>&emsp;organization={IEEE}<br>}"
links:
    pdf:        assets/publications/2017-score/paper.pdf
    paper:      https://arxiv.org/abs/1704.03039
    code:       https://github.com/pedro-morgado/score-zeroshot
    bibtex:     assets/publications/2017-score/ref.txt
layout: project
short_title: SCORE
abstract: "The role of semantics in zero-shot learning is considered. The effectiveness of previous approaches is analyzed according to the form of supervision provided. While some learn semantics independently, others only supervise the semantic subspace explained by training classes. Thus, the former is able to constrain the whole space but lacks the ability to model semantic correlations. The latter addresses this issue but leaves part of the semantic space unsupervised. This complementarity is exploited in a new convolutional neural network (CNN) framework, which proposes the use of semantics as constraints for recognition.Although a CNN trained for classification has no transfer ability, this can be encouraged by learning an hidden semantic layer together with a semantic code for classification. Two forms of semantic constraints are then introduced. The first is a loss-based regularizer that introduces a generalization constraint on each semantic predictor. The second is a codeword regularizer that favors semantic-to-class mappings consistent with prior semantic knowledge while allowing these to be learned from data. Significant improvements over the state-of-the-art are achieved on several datasets."
---