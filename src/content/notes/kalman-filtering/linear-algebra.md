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

A matrix of dimension $m \times n$ and a vector of dimension $n \times 1$ can be multiplied with the following form.

$$
    \bm{y} = A \bm{x} =
    \begin{bmatrix}
    A_{1,1} & \ldots & A_{1,n} \\
    \vdots  & \ddots & \vdots \\
    A_{m,1} &\ldots  & A_{m, n} \\
    \end{bmatrix}
    \begin{bmatrix}
    x_1 \\
    \vdots \\
    x_n \\
    \end{bmatrix}
$$

### Quadratic Form

Quadratic form is expressed below, with the dimensions of each element annotated.

$$
    \overbrace{\alpha}^{1 \times 1} =
    \underbrace{\bm{x}^T}_{1 \times n}
    \overbrace{A}^{n \times n}
    \underbrace{\bm{x}}_{n \times 1}
$$

### Matrix-Matrix Product

Matrices can be multiplied with each other, as long as they satisfy the dimensional requirements outlined below.

$$
    \underbrace{C}_{n \times m} =
    \overbrace{A}^{n \times p}
    \underbrace{B}_{p \times m}
$$

And, in general, $AB \neq BA$.

### Scalar and Vector Functions

A scalar function of a scalar has the following form, where $t$ is an independent variable and $\alpha$ is a dependent variable.

$$
    \alpha = \alpha (t)
$$

A scalar function of a vector has the following form, where $x_1, \ldots , x_n$ are independent variables and $\alpha$ is a dependent variable.

$$
    \alpha = \alpha (\bm{x}) = \alpha (x_1, \ldots, x_n)
$$

A vector function of a vector has the following form.

$$
    \bm{y} =
    \begin{bmatrix}
    y_{1}(x_{1}, \ldots ,x_m) \\
    \ldots \\
    y_{n}(x_{1}, \ldots ,x_m)
    \end{bmatrix} =
    \overbrace{\bm{y}}^{n \times 1}(\underbrace{\bm{x}}_{m \times 1})
$$

### Scalar and Vector Derivatives

A scalar derivative has the following form.

A vector derivative has the following form.

A gradient vector derivative has the following form.

### Rank
