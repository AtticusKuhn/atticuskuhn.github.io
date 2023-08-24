---
title: Boolean Considered Harmful
tags: boolean, denotational design, correctness
date: August 23, 2023
description: Most uses of Boolean are wrong
image: babBools.png
---


# Boolean Considered Harmful

I make the claim that using the boolean type (called "Boolean")
is always a bad design decesion. This is because `Boolean` is
like the rind of an orange that has been squeezed out. The rind
testifies that there once was an orange here, but the juicy goodness
of the orange is long gone.

It is the same with `Boolean`. If you are using `Boolean`, there was
once a function which returned more information, but this helpful information
was thrown away when all the information was squashed down into only 2 states.

My recommendation is that for any time you are tempted to write "Boolean", consider
what information the function is actually computing.

To illustrate my point more, I will code the equality function on natural numbers in
[Agda](https://en.wikipedia.org/wiki/Agda_(programming_language)). For any natural numbers `x` and `y`, `x == y` returns `true` if `x` is equal
to `y` and false otherwise. I will then contrast this function against `x ==? y`, which I claim
is a better function.

Do not worry if you do not know [Agda](https://en.wikipedia.org/wiki/Agda_(programming_language)), because
I will be explaining the code at every step.


# Standard Library Functions

First, I will defining some standard functions.
These functions are all in the [standard library of Agda](https://agda.github.io/agda-stdlib/),
so this section is a learning exercise where I will be thouroughly explaining the purpose of all
the code.

## Peano Numbers

We will represent natural numbers as [Peano Numbers](https://en.wikipedia.org/wiki/Peano_axioms), which means
that every natural number is either `0` or `successor(n)` for some natural number `n`. In Agda, we would
represent the natural numbers as this data type:

```agda
data NaturalNumber : Set where
  zero : NaturalNumber
  successor : NaturalNumber → NaturalNumber
variable
  m n : NaturalNumber
```
## Booleans

We can then define the much-dreaded `Boolean`, which is either `true` or `false`.

```agda
data Boolean : Set where
  true : Boolean
  false : Boolean
```
## Booleanean (Bad) Equality

In our first attempt to define equality on natural numbers, we use a `Boolean` to represent the result:
`true` if the two numbers are equal and `false` if the two numbers are not equal.

```agda
infixr 5 _==_
_==_ : NaturalNumber → NaturalNumber → Boolean
zero == zero = true
successor a == zero = false
zero == successor b = false
successor a == successor b = a == b
```

## Propositional Equality

To begin to define our better equality, we first need a specification of equality.
Some beginners are confused by propositional equality because propositional equality
does not *compute* if two values are equal, but rather it gives the type of all *proofs*
that they are equal.

```agda
infixr 5 _≡_
data _≡_  {A : Set o} :  A → A →  Set (lsuc o) where
  reflexivity : {a : A} →  a ≡ a
```

So, for example, `a ≡ b` is the type of all proofs that `a` is equal to `b`.

## Empty Type

The empty type is inhabited by no values. The empty type represents the false proposition, or the proposition
with no proofs.

```agda
data empty : Set where
```

## Decidability

With these pieces, we can define `decidability`. A proposition
is [decidable](https://en.wikipedia.org/wiki/Decidability_(logic)) if there exists an
algorithm for deciding if the proposition is inhabited.
The `decides A` type will either produce evidence that `A` is inhabited, or
produce evidence that `A` in uninhabited.

```agda
data decides (A : Set o) : Set o where
  trueBecauseOf : A → decides A
  falseBecauseOf : (A → empty) → decides A
```

A simple utility function which proves that `successor` is
an [injective function](https://en.wikipedia.org/wiki/Injective_function).

```agda
successorInjective : successor m ≡ successor n → m ≡ n
successorInjective reflexivity = reflexivity
```

Given the type `decides`, we can say what it means for a [binary function](https://en.wikipedia.org/wiki/Binary_operation)
to be decidable: for all its inputs, we can produce evidence of the type
being inhabited or uninhabited.

```agda
decidable2 : {A B : Set o} →  (A → B → Set ℓ) → Set (o ⊔ ℓ)
decidable2 {A = A} {B = B} f = (a : A) (b : B) → decides (f a b)
```

# The Improved Natural Number Equality

We will now define the improved equality function on natural numbers:

```agda
infixr 5 _==?_
_==?_ : decidable2 {A = NaturalNumber}  (_≡_)
zero ==? zero = trueBecauseOf reflexivity
zero ==? successor y = falseBecauseOf λ ()
successor x ==? zero = falseBecauseOf λ ()
successor x ==? successor y with (x ==? y)
... | trueBecauseOf reflexivity = trueBecauseOf reflexivity
... | falseBecauseOf x≢y = falseBecauseOf  (λ z → x≢y (successorInjective z))
```

# Why the Deciding Verison is Better

You might be wondering: "why is `x ==? y` better than `x == y`". In short, it is because
`x ==? y` has a specification, but `x == y` does not.

What's more, for all inputs, `x ==? y` returns evidence that it is correct, whereas we have not even
stated the correctness specification for `x == y`.

You should always assume that everything is wrong until you have a formal proof that it is correct.

Any function with the type signature `decidable2 {A = NaturalNumber}  (_≡_)` *must* be correct. By
using a more expressive type, we have ensured correctness automatically.  Others have said
["make illegal states unrepresentable"](https://fsharpforfunandprofit.com/posts/designing-with-types-making-illegal-states-unrepresentable/)
but I say, "make incorrect code unwritable".
Write a specification so that the only option is for your code to be correct.

With the pedestrian `x == y`, it would be easy to write a function with the same type signature that,
in fact, would be incorrect.

The main concern in software is proofs of correctness. Every other aspect of code (including performance)
is secondary. To learn more about this, look at [this talk](https://github.com/conal/talk-2023-galilean-revolution).

For these reasons, I strongly advise that 90% of the use of `Boolean`s is incorrect, and could be
replaced by more informative types.
