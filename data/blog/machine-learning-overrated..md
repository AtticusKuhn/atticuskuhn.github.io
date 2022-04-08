---
title: Machine Learning is overrated
tags: machine learning, ml, AI
date: January 27, 2022
description: I don't understand the hype around machine learning
image: Blog-Images-Forget-Machine-Learning-Humans-Still-Have-a-Lot-to-Learn-Part-II.jpg
---
In recent years, we've seen a lot of hype around machine learning. From [alpha go](https://deepmind.com/research/case-studies/alphago-the-story-so-far), which beat world-champion go
players, to [GPT-3](https://en.wikipedia.org/wiki/GPT-3), the constant news buzz
would make one think we are around the corner from [AI Dominance](https://en.wikipedia.org/wiki/Technological_singularity). But I claim today that most of AI is just hype, with no
real substance behind it. Of course time will tell the true use of AI. In fact, most
times teams eagerly throw a [neural net](https://en.wikipedia.org/wiki/Neural_network) at
a problem, they are really looking for a symbolic manipulation tool like [prolog](https://en.wikipedia.org/wiki/Prolog).

# Black Boxes

The first drawback of machine learning is they are incomprehensible. If a machine learning model
makes a mistake, how will you figure out what went wrong? There is no real way of knowing. Sure,
you can look at the internal state of the model, but what does that really tell you?
Models today are getting so large that it is impossible to hold a single one in your
brain. GPT-3 has [175 billion parameters](https://www.springboard.com/blog/data-science/machine-learning-gpt-3-open-ai/#:~:text=The%20largest%20version%20GPT%2D3,and%203.2%20M%20batch%20size.&text=Shown%20in%20the%20figure%20above,that%20it%20is%20quite%20larger.)
parameters. What if it makes a mistake? Will some engineer have to go through all
175 billion parameters just to find it? I think the true solution is [declarative](https://en.wikipedia.org/wiki/Declarative_programming) software
that simply states rules or definitions. That code is easier to debug and understand for
new users. In essence, we can only look at machine learning as a black box.

# Changing Requirements

Often in software engineering, projects are subject to [changing requirements](https://rebelsguidetopm.com/help-the-requirements-keep-changing-and-i-cant-nail-them-down-part-2/).
What happens when this is done to a machine learning model? In short, I don't
see how a machine learning model trained for one task can be fixed to work on
a slightly different task. It would require a whole new retraining of the model
every time you want to make a change. Google even spoke about this issue in their
paper [Machine Learning:
The High-Interest Credit Card of Technical Debt](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43146.pdf). In our ever-changing world, you must truly
consider if you want to use a technology that requires so much effort even to change
its purpose slightly.

# Declarative Programming: is it Nirvana?

I am a huge fan of declarative programming, whether from the [Wolfram Language](https://en.wikipedia.org/wiki/Wolfram_Language) or from [Prolog](https://en.wikipedia.org/wiki/Prolog).
In such a style, the programmer simply states the rules of the system formally, and
the language takes care of implementation concerns. This approach is easy to understand
because it is just the rules of the system. In addition, it is easy to understand
the behavoir of a program: just follow which rules it applied.  If you have never
heard of prolog, I strongly encourage you to check it out. It is unlike any other
programming language, not part of the C or ALGOL lineage. It will rethink the way
that you understand the purpose of computers, [so try it out](https://swish.swi-prolog.org/).