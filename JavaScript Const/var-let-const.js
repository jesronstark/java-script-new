var x = 2;     // Allowed
const x = 2;   // Not allowed

{
    let x = 2;     // Allowed
    const x = 2;   // Not allowed
}

{
    const x = 2;   // Allowed
    const x = 2;   // Not allowed
}