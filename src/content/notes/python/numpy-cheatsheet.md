---
author: "Alex Bustos"
class: "Python"
pubDate: 2024-9-18
title: "NumPy Cheatsheet"
---

Things about NumPy that I am prone to forgetting.

### Indexing

-   To get a row of a two-dimensional array as a one-dimensional array, you can
    use a single index. For example:

    ```python
    import numpy as np

    bar = np.array(
        [
            [5, 10, 15, 20],
            [25, 30, 35, 40],
            [45, 50, 55, 60],
        ]
    )

    print(bar[0])  # prints array([ 5, 10, 15, 20])
    ```

-   To get a row of a two-dimensional array as a two-dimensional array, you can
    use `None` or slicing. For example:

    ```python
    import numpy as np

    bar = np.array(
        [
            [5, 10, 15, 20],
            [25, 30, 35, 40],
            [45, 50, 55, 60],
        ]
    )

    print(bar[0, None])  # prints array([[5, 10, 15, 20]])

    print(bar[:1])  # also prints array([[5, 10, 15, 20]])
    ```

-   You can index a list of specific elements in a two-dimensional array by
    passing in a list of the points' row and column indices. For example:

    ```python
    import numpy as np

    bar = np.array(
        [
            [5, 10, 15, 20],
            [25, 30, 35, 40],
            [45, 50, 55, 60],
        ]
    )

    print(bar[[0, 1, 2], [0, 1, 2]])
    # array([5, 30, 55])
    ```

### Broadcasting

-   Suppose we want to add two arrays, `A` and `B`.

    -   Moving backwards from the last dimension of each array, we check if
        their dimensions are compatible.
    -   **Dimensions are compatible if they are equal or either of them is
        one.**
    -   If all of `A`'s dimensions are compatible with `B`'s dimensions, or vice
        versa, they are compatible arrays.

### Reshaping Arrays

-   You can insert new axes in front of and behind existing axes using `None` or
    `np.newaxis` (which is just an alias for `None`). For example:

    ```python
    import numpy as np

    A = np.array(
        [5, 10, 15, 20],
    )

    print(A[:, np.newaxis].shape)  # prints (4, 1)
    print(A[np.newaxis, :].shape)  # prints (1, 4)
    ```

-   You can reshape arrays in-place by modifying the `shape` attribute instead
    of using `reshape`. For example:

    ```python
    import numpy as np

    A = np.array(
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ],
    )

    A.reshape(4, 2)  # creates a copy of `A` and reshapes the copy
    A.shape = (4, 2)  # directly modifies `A`
    ```

### Logical Indexing

-   To combine logical statements, use bitwise operators like `&` and `|`.
-   When combining logical statements, each statement should be wrapped with
    parentheses, so that they are evaluated before the any bitwise operators.

### NaN

-   `np.nan` is a special floating point constant. It cannot be inserted into
    arrays of non-floating point values.
-   Use `np.isnan()` to find `np.nan` values in an array. `np.nan` is designed
    in such a way that `np.nan == np.nan` evaluates to `False`, but
    `np.nan != np.nan` evaluates to `True.`
