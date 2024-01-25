---
id:             2022-replai
title:          "Learning Visual Representation from Audible Interactions"
authors:        [Himangi, Me, Unnat, Abhinav]
venue:          Neural Information Processing Systems (NeurIPS), New Orleans, 2022.
year:           "2022-08"
thumbnail:      assets/publications/2022-replai/thumb.png
bibtex:         "@InProceedings{mittal2022_replai,<br>&emsp;title={Learning Visual Representation from Audible Interactions},<br>&emsp;author={Himangi Mittal, Pedro Morgado, Unnat Jain, Abhinav Gupta},<br>&emsp;booktitle={Advances in Neural Information Processing Systems (NeurIPS)},<br>&emsp;year={2022}<br>}"
links:
    paper:      https://arxiv.org/abs/2209.13583
    code:       https://github.com/HimangiM/RepLAI
    bibtex:     assets/publications/2022-replai/ref.txt

layout: project
short_title: Learning from Audible Interactions
abstract: "We propose a self-supervised algorithm to learn representations from egocentric video data. Recently, significant efforts have been made to capture humans interacting with their own environments as they go about their daily activities. In result, several large egocentric datasets of interaction-rich multi-modal data have emerged. However, learning representations from videos can be challenging. First, given the uncurated nature of long-form continuous videos, learning effective representations require focusing on moments in time when interactions take place. Second, visual representations of daily activities should be sensitive to changes in the state of the environment. However, current successful multi-modal learning frameworks encourage representation invariance over time. To address these challenges, we leverage audio signals to identify moments of likely interactions which are conducive to better learning. We also propose a novel self-supervised objective that learns from audible state changes caused by interactions. We validate these contributions extensively on two large-scale egocentric datasets, Epic-Kitchens and the recently released Ego4D, and show improvements on several downstream tasks, including action recognition, long-term action anticipation, and object state change classification."
---