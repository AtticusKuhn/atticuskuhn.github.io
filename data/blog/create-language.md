---
title: How to Create an Excellent Programming Lanugage
tags: programming, math, computation, lisp
date: Oct 10, 2022
description: I have come up with a method to design well-loved languages
image: lisp.png
---


I recently looked at [A Talk by Bob Martin](https://www.youtube.com/watch?v=P2yr-3F6PQo) in which
he says that we've "basically discovered all the programming paradigms". He says this due to his
view that programming paradigms are just restrictions on what programmers can do, but I disagree.
My view is that **a good programming language is the minimal amount needed to add to a model
of computation**. I will explain what I mean.

## Models of Computation
According to Wikipedia, a [Model of Computation](https://en.wikipedia.org/wiki/Model_of_computation) is
"a model which describes how an output of a mathematical function is computed given an input".
There are a list of models of computation on the page, which include
- Post machines
- Pushdown automata
- Register machines
- Random-access machines
- Turing machines
- Decision tree model
- Abstract rewriting systems
- Combinatory logic
- General recursive functions
- Lambda calculus
- Actor model
- Cellular automaton
- Interaction nets
- Kahn process networks
- Logic gates and digital circuits
- Petri nets
- Synchronous Data Flow

As you can see, there are many models of computation.
## Minimal Addition
What do I mean by "minimal additon". Well, a model of computation only describes mathematical functions, which are pure. We would like our programs to be able to interact with the outside world. This means
some abilities must be added to a model of computation in order to allow interaction. The gold
standard for this is [Haskell](https://en.wikipedia.org/wiki/Haskell), with its monadic model of computation. In a good language, effects should be modelled using some kind of language construct, such
as Haskell's monads, but I think the construct will vary for each model of computation.

## Examples of Well-Loved Languages

I will show how the best-designed languages today are simply the minimal additions to already good
models of computation.


| Model of Computation| Language|
|--------------------|----------|
| Untyped Lambda Calculus | Lisp|
| Typed Lambda Calculus | Haskell|
| Predicate Logic | Prolog |
| Rewriting System | Wolfram |
| Actor Model | Smalltalk |
| Interaction Nets | [Kind2](https://github.com/Kindelia/Kind2) |
| Combinatory Logic | APL | 

Hopefully you see that all the languages on the right column are widely admired for being well-designed.
And what unifies them all? They are all strictly based on a model of computation.

Let us discuss the example of Lisp. Lisp is the [minimal wrapper](https://news.ycombinator.com/item?id=29950782) on top of the untyped lambda calculus. It does not include any features
beyound unleashing the inherent power of the lambda calculus. This is the main difference
between Smalltalk and Java. Both are based on the [Actor Model](https://en.wikipedia.org/wiki/Actor_model)
but Smalltalk sticks truthfully to its model of computation, while Java confusedly
borrows concepts from other languages.

## Turing Completeness
Due to Turing Completeness, we can say that all models of computation are equally expressive.
So, it remains to be decided what model we should use. I think we should first choose a model
that is the best for our needs.

## Good Models of Computation
Given all these models of computation, which should we chose as a basis for our languages?
I think it comes down to 2 critera:
- being simple
- having nice properties

For the first point, I think the model should be very simple. I think the [SK Calculus](https://en.wikipedia.org/wiki/SKI_combinator_calculus) is very good in this regard, and it might be the simplest model
of computation that I have ever seen. Turing Machines, although the most well-known example of
a model of computation, are actually very complex and hard to explain. 

For the second point, I mean that the model has properties that make it easy to implement and
fast to run on our given hardware. One model that is very promising is [Interaction Nets](https://en.wikipedia.org/wiki/Interaction_nets#Properties) because they have these properties

- locality (only active pairs can be rewritten)
- linearity (each interaction rule can be applied in constant time)
- strong confluence 

These properties would make an implementation very fast, so I encourage you to try writing
an implementation.


## Advice to Aspiring Language Designers
If you want to design a language, I have some advice for how to do it. The first step is to
choose a model of computation that has not yet been well-explored. For example, I would
not design a language based on lambda calculus because that space has already been perfected
by Lisp and Haskell, and I would not design a langauge based on predicate logic because
Prolog already does a good job there. I would choose a model that has good properties (can
be executed quickly on hardware) and has not been explored by any other language. Right
now I think the field of Linear Logic doesn't have its own industry-strength programming
language. If you think you can design such a language, I would encourage you on.


## Summary
In short, a programming language is nothing but an implentation of a model of computation.