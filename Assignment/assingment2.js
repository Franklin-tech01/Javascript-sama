// The function to be integrated: e^(-x^2)
function t(x) {
    return Math.exp(-Math.pow(x, 2));
}

// The trapezoidal rule
function trapezoidRule(a, b, n) {
    const h = (b - a) / n;
    let result = 0.5 * (t(a) + t(b));

    for (let i = 1; i < n; i++) {
        result += t(a + i * h);
    }

    result *= h;
    return parseFloat(result.toFixed(5));
}

// Solve the integral with 10 intervals
const integralResult = trapezoidRule(0, 1, 10);
console.log("Integral result for ∫e^(-x^2) dx from 0 to 1 using Trapezoidal Rule:", integralResult);