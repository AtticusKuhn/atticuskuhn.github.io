---
title: Why promise IS a monad
tags: haskell
date: April 12, 2021
description: There are monads all around us, even if we don't notice it
image: monad.jpg
---
Because I program in haskell, I have a lot of experience with monads, and now I see monads wherever I go. Monads are truly everywhere. Many people have already interacted with monads without even realising it. In fact, Javascript's promise is a monad. Despite this, the first result on google search for "is promise a monad", is titled, "no, promise is not a monad". I see this blog post as a response to that article. In this post by Buzz De Cafe, the author claims that javascript's promise is not a monad because it does not follow the mathematical laws of monads. However, nobody in haskell actually uses moands in the mathematical sense. It doesn't really matter if Promise is a mathematical monad, what really matters is if it acts like a programming monad, which it does. For example, let's take the haskell function 

```haskell

sequence :: (Traversable t, Monad m) => t (m a) -> m (t a)

```
When I saw this, I was struck by how similar it is to Javascript's

```haskell
Promise.all ::[promise a] -> promise [a]
```
I have written the type signature of Javascript's Promise.all in haskell syntax to lay apparent how similar these two functions are. Also let us look at .then vs >>=


```haskell,

 (>>=) :: Monad m => m a -> (a -> m b) -> m b
```

```javascript

fetch(url)
	.then(data=> data.json())
```
Both haskell's bind operator >>= and javascript .then extract the internal value of a monad. And let me remind the reader, that >>= is the minimal operator for the monad typeclass in haskell, so if promise were defined in haskell, all one would have to do is

```haskell
instance Monad Promise where
     (>>=) = (then)
```

It is obvious that Promise has all the characteristics of a Monad, so when haskellers complain that it does not obey some mathematical law, those are just sprinklings on top of a monad that don't really affect its functionality.  

Some people may knock Javascript for not being as intellectual or high level as Haskell, but in fact it has almost all of the same structures, just with not as mathematical names. The example of Javascript's Promise being a monad shows that it is truly a high level language. 



