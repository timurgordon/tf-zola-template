---
title: "This is a page"
description: ""
date: 2018-09-14
updated: 2021-02-20
draft: false
---

{% row() %}

# Reimagine your world

<br/>

test
|||

![Image](/images/ourworld_mycellium.png#large)

{% end %}

## My example mermaid diagram

I wanted to use mermaid in this project, and it looks like this
{% mermaid() %}

classDiagram
Animal <|-- Duck
Animal <|-- Fish
Animal <|-- Zebra
Animal : +int age
Animal : +String gender
Animal: +isMammal()
Animal: +mate()
class Duck{
+String beakColor
+swim()
+quack()
}
class Fish{
-int sizeInFeet
-canEat()
}
class Zebra{
+bool is_wild
+run()
}

{% end %}

{% row() %}

![Image](/images/ourworld_mycellium.png#large)

|||

# Reimagine your world

<br/>

Its really cool how this has been done.

Finally a framework fun to be used.

> Am super happy about it

- test
- test2
  - internet
  - something
- test3

{% end %}
