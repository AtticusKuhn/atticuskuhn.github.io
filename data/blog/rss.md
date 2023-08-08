---
title: Why RSS Feeds are the Superior way to Stay Up-to-Date
tags: RSS, free software
date: August 8, 2023
description: I just started using an RSS feed
image: rss.jpg
---


# What is an RSS Feed

RSS is a standard by which you may subscribe to the content of other websites, and recieve updates about the news on other websites in a 
standardized way so that many programs can read and understand the infromation. RSS uses XML in order to communicate in a way
that can be easily parsed by other tools and applications.

# RSS increases freedom and independence

My main promotion of RSS is a philosophical and ideological reason: RSS feeds increse freedom, independence, and decentralization on the internet.
Too often, the web has been centralized under the lock-and-key of a few gatekeepers (to name them: Google, Meta, Apple, Microsoft).
At the click of their fingers, and for whatever whim, as arbitrary as they desire, your subscriptions would be deleted without
any trace or recourse.

RSS feeds put the responsability in the hands of small website owners and blogs: because the standard is so simple, anyone
can implement and use it without the approval of those lords of the internet.

# How to Find RSS Feeds

Unfortunately for my idealistic ambitions, it seems that it is rare to find RSS feeds for the websites and information that I want.

What I usually do is open the devtools and search for "rss" or "atom" in the HTML.


## Tools for RSS

If my techniques don't work, sometimes there are tools out there to help you get an rss feed from a website.

One example is [Kill the Newsletter!](https://kill-the-newsletter.com/), which allows you to turn an email list into an
RSS feed.



# My RSS Config

For Edifying purposes, I will share my RSS configuration for others who want to take the first step into the world of RSS.
I use a program called [elfeed](https://github.com/skeeto/elfeed) as an RSS reader. Here is my configuration for elfeed.

```emacs-lisp
(setq elfeed-feeds
      '(
        ("https://www.unison-lang.org/feed.xml" unison programming-language)
        ("http://arxiv.org/rss/cs.LO" logic)
        ("http://arxiv.org/rss/cs.MS" math)
        ("http://arxiv.org/rss/cs.PL" programming-language)
        ("http://arxiv.org/rss/math.CT" category-theory)
        ("https://reddit.com/r/emacs.rss" emacs)
        ("https://reddit.com/r/orgmode.rss" emacs org-mode)
        ("https://reddit.com/r/nixOS.rss" nix linux)
        ("https://golem.ph.utexas.edu/category/atom10.xml" category-theory)
        ("https://hnrss.org/newest?points=20")
        ("https://lukesmith.xyz/index.xml")
        ("https://nyxt.atlas.engineer/feed")
        ("https://homotopytypetheory.org/feed/" homotopy-type-theory)
        ("https://math.andrej.com/feed.xml")
        ("https://existentialtype.wordpress.com/feed/" type-theory)
        ("https://blog.thjread.com/rss.xml")
        ("https://nitter.unixfox.eu/conal/rss")
        ("https://www.youtube.com/feeds/videos.xml?channel_id=UCS4FAVeYW_IaZqAbqhlvxlA" programming-language)
        ("https://www.youtube.com/feeds/videos.xml?channel_id=UC1kBxkk2bcG78YBX7LMl9pQ" programming-language)
        ("https://www.youtube.com/feeds/videos.xml?channel_id=UC-9jDbJ-HegCFuWuam1SfvQ" programming-language)
        ("https://www.youtube.com/feeds/videos.xml?channel_id=UCFFeNyzCEQDS4KCecugmotg" programming-language)
        ("https://hnrss.org/newest?q=linux&points=20" linux)
        ("https://hnrss.org/newest?q=type%20theory" type-theory)
        ("https://hnrss.org/newest?q=category%20theory" category-theory)
        ("https://nixos.org/blog/announcements-rss.xml" nix linux)
        ("https://github.com/AtticusKuhn.private.atom")
        ("https://feeds.buzzsprout.com/728558.rss" type-theory)
        ("https://blog.wolfram.com/feed/" wolfram programming-language)
        ("https://www.google.com/alerts/feeds/04747069146194916248/458592335938245591" type-theory)
        ("https://www.google.com/alerts/feeds/04747069146194916248/4667516096121066180" category-theory)
        ("https://www.google.com/alerts/feeds/04747069146194916248/7476438073175009204" homotopy-type-theory)
        ("https://nitter.unixfox.eu/ttforall/rss" type-theory)
        ("https://nitter.unixfox.eu/typetheorypcast/rss" type-theory)
        ("https://nitter.unixfox.eu/SydneyTypes/rss" type-theory)
        ("https://nitter.unixfox.eu/type_theory/with_replies/rss" type-theory)
        ("https://twitter.com/Jose_A_Alonso/with_replies" math type-theory)
        ("https://nitter.unixfox.eu/LogicPractice/rss" logic)
        ("https://www.johndcook.com/blog/feed/")
        ("https://systemcrafters.net/rss/" emacs)
        ("https://emacstil.com/feed.xml" emacs)
        ("https://d12frosted.io/atom.xml" emacs)
        ))
```

# My RSS Feed

Now that you are convinced of the benefits of using RSS, now would be a good time to mention that I have my own RSS feed. You can access my
RSS feed at [/rss.xml](/rss.xml)
