---
id:             2019-nettailor
title:          "NetTailor: Tuning the Architecture, Not Just the Weights"
authors:        
    - Me
    - Nuno
venue:          IEEE/CVF Conf. on Computer Vision and Pattern Recognition (CVPR), Long Beach, CA, 2019.
year:           "2019-07"
thumbnail:      assets/publications/2019-nettailor/thumbnail.png
bibtex:         "@inproceedings{morgado2019nettailor,<br>&emsp;title={NetTailor: Tuning the Architecture, Not Just the Weights},<br>&emsp;author={Morgado, Pedro and Vasconcelos, Nuno},<br>&emsp;booktitle={Computer Vision and Pattern Recognition (CVPR), IEEE/CVF Conf. on},<br>&emsp;pages={3044--3054},<br>&emsp;year={2019}<br>}"
links:
    pdf:        assets/publications/2019-nettailor/paper.pdf
    paper:      https://arxiv.org/abs/1907.00274
    code:       https://github.com/pedro-morgado/nettailor
    website:    https://pedro-morgado.github.io/nettailor/
    bibtex:     assets/publications/2019-nettailor/ref.txt
other_venues:
    - title:    "[Workshop] NetTailor: Tuning the Architecture, Not Just the Weights"
      venue:    Southern California Machine Learning Symposium (SCMLS), 2020.
      links:
        paper:    assets/publications/2019-nettailor/scmls20_paper.pdf
        bibtex:     assets/publications/2019-nettailor/scmls20_ref.txt
layout: project
short_title: NetTailor
abstract: "Real-world applications of object recognition often require the solution of multiple tasks in a single platform. Under the standard paradigm of network fine-tuning, an entirely new CNN is learned per task, and the final network size is independent of task complexity. This is wasteful, since simple tasks require smaller networks than more complex tasks, and limits the number of tasks that can be solved simultaneously. To address these problems, we propose a transfer learning procedure, denoted NetTailor, in which layers of a pre-trained CNN are used as universal blocks that can be combined with small task-specific layers to generate new networks. Besides minimizing classification error, the new network is trained to mimic the internal activations of a strong unconstrained CNN, and minimize its complexity by the combination of 1) a soft-attention mechanism over blocks and 2) complexity regularization constraints. In this way, NetTailor can adapt the network architecture, not just its weights, to the target task. Experiments show that networks adapted to simple tasks, such as character or traffic sign recognition, become significantly smaller than those adapted to hard tasks, such as fine-grained recognition. More importantly, due to the modular nature of the procedure, this reduction in network complexity is achieved without compromise of either parameter sharing across tasks, or classification accuracy."
---