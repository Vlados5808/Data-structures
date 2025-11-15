function simplifyRoute(route) {
    const stack = [];
    const opposite = { N: "S", S: "N", E: "W", W: "E" };
    
    for (let step of route) {
        if (stack.length && stack[stack.length - 1] === opposite[step]) {
            stack.pop();
        } else {
            stack.push(step);
        }
    }
    
    return stack.join("");
}

console.log(simplifyRoute("N"));
console.log(simplifyRoute("NS"));
console.log(simplifyRoute("EW"));
console.log(simplifyRoute("NESW"));
console.log(simplifyRoute("NNEESSWW"));
console.log(simplifyRoute("NNWSE"));
console.log(simplifyRoute("WWNEE"));
