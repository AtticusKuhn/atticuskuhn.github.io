---
sourceCodeUrl: https://github.com/AtticusKuhn/emulation-theory
tags: proof, type theory, lean, proving, emulation theory
date: Aug 8, 2022
title: Emulation Theory
description: Computer Verification of Emulation Theory
image: lean_logo.svg
---
# Emulation Theory

[Emulation Theory](https://cpb-us-w2.wpmucdn.com/u.osu.edu/dist/1/1952/files/2014/01/PutnamVol101017-2i8ths2.pdf) is a subject of math
developed by Stanford Professor
[Harvey Friedman](https://en.wikipedia.org/wiki/Harvey_Friedman). In this project, we seek
to formalise and prove several results
in Emulation Theory using the theorem
prover [Lean](https://leanprover.github.io/)

This work was done by [Atticus Kuhn](https://atticuskuhn.github.io/) and [Zongshu](https://googology.fandom.com/wiki/User:12AbBa)

To see how far along we are, look at [./src/basic.lean](https://github.com/AtticusKuhn/emulation-theory/blob/master/src/basic.lean). I welcome all contributions and pull
requests.

## Emulation Theory Basics

We say 2 vectors A and B are order equivalent iff 
  

```LaTeX
A_i < A_j \iff B_i < B_j
```
We say that a set of k-vectors E emulates a set of k-vectors S iff
every concatenation of vectors in S is order-equivalent to some
concatenation of vectors in E.
