---
author: "Alex Bustos"
class: "Kalman Filtering"
pubDate: 2022-1-17
title: "Statistics Review"
draft: false
---

## Set Theory

A **set** is a collection of things, for example, $\set{ 1, 2, 3}$ or $\set{\text{heads}, \text{tails}}$.
Sets are comprised of **elements**, as shown below.

$$
    \underbrace{2 \in \set{1, 2, 3}}_{\text{``2 is an element of } \set{1, 2, 3} \text{.''}}
$$

Sets can be defined mathematically. An example is shown below. Additionally, sets are commonly
notated using upper case characters, and elements within a set are notated using lower case
characters.

$$
    B = \set{x^2 | x = 2, 4, 6, \ldots }
$$

$A$ can be considered a **subset** of $B$ if and only if every element of A is also an element of B. An
example is shown below.

$$
    \underbrace{\set{1} \subset \set{1, 2, 3}}_{\text{``}\set{1} \text{ is a subset of } \set{1, 2,
3} \text{.''}}
$$

As an aside, the term "if and only if", represented by $\iff$, implies a two-way argument. For
example,

$$
    \text{You are younger than me if and only if I am older than you.}
$$

Comparatively, the term "if", represented by $\implies$, implies a one way argument. For example,

$$
\begin{align*}
    &\text{If I am a Georgia Tech student, then I am a university student,} \\
    &\text{but the inverse is not necessarily true.}
\end{align*}
$$

The **Universal Set**, $\mathbb{U}$, contains everything. All sets are a subset of $\mathbb{U}$. The **Null Set**, $\emptyset$, contains no elements.

picture of venn diagrams and unions

Common set operations include

-   The **union** of $A$ and $B$ ($A \cup B$) is equivalent to all elements of $A$ and all elements of $B$.
-   The **intersection** of $A$ and $B$ ($A \cap B$) is equivalent to all elements of $A$ that are also an element of $B$.
-   The **difference** of $A$ and $B$ ($A - B$) is equivalent to all elements of $A$ that are not elements of $B$.
-   The **complement** of $A$ ($A^c$) is everything that is not in $A$.

A collection of sets, $A_1, ..., A_N$ is **mutually exclusive** if and only if $A_j \cap A_i \text{ for } j \neq i$. For example,

picture of mutually exclusive sets.

A collection of sets, $A_1, ..., A_N$ is **mutually exhaustive** if and only if $A_1 \cup A_2 \cup \ldots \cup \ldots A_N = \mathbb{U}$, which basically just means that the union of all the sets is the universal set, $\mathbb{U}$.

### Applying Set Theory to Probability

An **experiment** is composed of a **procedure** and an **observation**.
