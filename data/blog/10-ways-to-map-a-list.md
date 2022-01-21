---
title: 10 ways to map a list in haskell
tags: haskell, list, map, functor
date: May 2, 2021
description: Haskell is such a cool language
image: techs/haskell.png
---

Since haskell is a list-based language, there are many ways to work with lists. This article details some of the most interesting ways to multiply each number in a list by 5. 
1. The Imperative way
```haskell,
main:: IO()
main = do
  mutable <- M.replicate 256 1
  forM_ ([1..256] z->
    modify mutable (x->x*5) z
   )
```
2. The boring way
```haskell,
multiplyList :: [Int] -> [Int]
multiplyList xs = map (\x->x*5) xs
```
3. currying
```haskell,
multiplyList :: [Int] -> [Int]
multiplyList = map (*5) 
```
4. monad
```haskell,
multiplyList :: [Int] -> [Int]
multiplyList xs =  xs >>= (\x -> [x*5])
```
5. short functor
```haskell,
m=(<$>)(*5)
```
6. List comprehension
```haskell,
multiplyList :: [Int] -> [Int]
multiplyList xs = [x*5 | x <- xs]
```


7. Do notation
```haskell,
multiplyList :: [Int] -> [Int]
multiplyList xs = do
    x <- xs
    return $ x*5
```

8. Functor
```haskell,
multiplyList :: [Int] -> [Int]
multiplyList xs = fmap (\x -> x*5) xs
```
9. Applicative
```haskell,
multiplyList :: [Int] -> [Int]
multiplyList xs =  pure (\x->x*5) <*> xs
```
10. Recursion
```haskell,
multiplyList :: [Int] -> [Int]
multiplyList [] = []
multiplyList (x:xs) = (x*5) : multiplyList xs
```





