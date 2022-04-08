---
title: The Decidability Tradeoff
tags: python, PHP, javascript, go, java, haskell
date: April 7, 2022
description: There is a fine line between power and decidability
image: automata.jpeg
---

# What is Undecidability

Like Icarus flying too close to the sun it seems that every mathematical system
will eventually be drawn towards the black hole of undecidability. Decidability
basically means there is an algorithm to answer a question. [Adding Numbers](https://lisbdnet.com/what-is-standard-algorithm-addition/#:~:text=standard%20algorithm%20addition%3F-,The%20standard%20algorithm%20for%20addition%20has%20three%20simple%20rules%3A,3%3A%20Regroup%2C%20if%20necessary) is decidable but [finding the shortest path](https://en.wikipedia.org/wiki/Travelling_salesman_problem) is not. In general I have noticed a pattern in
all systems of rules. The system starts off simple. Then, as more use cases pile up, more
rules and properties are added until suddenly, the system is undecidable. What happend here?
I will start with a few examples

# Typing Systems for Programming Languages

I first encountered this problem in the type system of programming languages, or basically
an algorithm that says `5` is an integer or `[1,2,3]` is a list of integers. You may think this problem is easy, and indeed the way I have just phrased it is decidable by [Algorithm W](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system#Algorithm_W). A type system is very useful,
but people have encountered corner cases, such as depenedent types or linear types, and they
try to extend the type system. For example, if you are trying to figure out the type of 
[C](https://en.wikipedia.org/wiki/The_C_Programming_Language)'s [printf](https://en.wikipedia.org/wiki/Printf_format_string), you might realise that the type of the second
argument depends on the type of the first argument.

```c
printf("%f %s", 1.2, "hello")
```
If you want to encode this information into the type system, then you have just discovered
dependent types, where types depend on values. The problem of finding out if a dependently
typed program is valid is actually undecidable (as a subset of the [halting problem](https://en.wikipedia.org/wiki/Halting_problem)). One you say you want this, you have stepped out
of the safety of decidable typing and you might now need to prove to the compiler
using a formal proof that a program typchecks, such as in languages such as [Idris](https://www.idris-lang.org/). A good documentation of this problem is on the website [typing is hard](https://3fx.ch/typing-is-hard.html).

In my view, the ideal type system of a programming language should be decidable. I don't want
to have to write a proof that my progam is valid. The best type system for this is [Hindley-Milner](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system) which is about as far as you can creep before you plumet off the cliff of undeciability.

# Arithmatic



