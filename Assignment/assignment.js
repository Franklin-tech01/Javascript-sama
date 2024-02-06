// The function to find the root of
function func(x) {
    return x * Math.log10(x) - 1.2;
}

// The derivative of the function
function derivativeFunc(x) {
    return Math.log10(x) + 1;
}

// Newton-Raphson method implementation
function newtonRaphson(x0, tolerance = 1e-5, maxIterations = 100) {
    let x = x0;
    let iterations = 0;

    while (iterations < maxIterations) {
        const f_x = func(x);
        const f_prime_x = derivativeFunc(x);

        if (Math.abs(f_prime_x) < 1e-10) {
            console.log("Derivative is too small. Newton-Raphson method may not converge.");
            return null;
        }

        const xNew = x - f_x / f_prime_x;

        if (Math.abs(xNew - x) < tolerance) {
            return parseFloat(xNew.toFixed(5));
        }

        x = xNew;
        iterations++;
    }

    console.log("Newton-Raphson method did not converge within the maximum number of iterations.");
    return null;
}

// Initial guess
const x0 = 2.0;

// Solve the equation using Newton-Raphson method
const solution = newtonRaphson(x0);

// Display the result
if (solution !== null) {
    console.log("The solution to the equation x log10(x) = 1.2 is approximately:", solution);
}
