---
author: "Alex Bustos"
class: "Kalman Filtering"
pubDate: 2022-1-12
title: "Linear Algebra Review"
---

In order to understand how Kalman Filter theory is developed, it is useful to review fundamental
linear algebra principles.

### Column Vector

A **column vector** is an array of $n$ elements (which can be scalars or functions) arranged in a
column. In this class, by default, the term _vector_ implies a column vector.

$$
\bm{x}(t) =
\begin{bmatrix}
x_1(t) \\
\vdots \\
x_n(t)
\end{bmatrix}
$$

### Dot Product

The **dot product** of two column vectors is defined below.

$$
    \bm{x} \cdot \bm{y} = \bm{x}^T \bm{y} =
    \begin{bmatrix} x_1, \ldots, x_n \end{bmatrix} \cdot
    \begin{bmatrix} y_1 \\ \vdots \\ y_n \end{bmatrix} =
    \sum_{i=1}^{n}x_i y_i =
    x_1 y_1 + \ldots + x_n y_n
$$

### Matrix

A **matrix** of dimension $m \times n$ has the following form.

$$
    A = \begin{bmatrix}
    A_{1,1} & \ldots & A_{1,n} \\
    \vdots & \ddots & \vdots \\
    A_{m,1} & \ldots & A_{m,n} \\
\end{bmatrix}
$$

### Matrix-Vector Product
