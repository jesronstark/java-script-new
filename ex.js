
















function generateLateExcuse() {
    const who = [
        "my pet llama",
        "the Queen of England",
        "a sentient toaster",
        "my imaginary friend",
        "a group of ninjas",
        "the ghost of Shakespeare"
    ];
    
    const what = [
        "demanded a dance-off",
        "stole all my left shoes",
        "challenged me to a staring contest",
        "needed relationship advice",
        "forced me to solve a riddle",
        "hacked my smart fridge to play polka music"
    ];
    
    const where = [
        "in the parking lot",
        "at the local waffle house",
        "on top of a moving train",
        "inside a giant inflatable bouncy castle",
        "during a live TV broadcast",
        "in the middle of a flash mob"
    ];
    
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhere = where[Math.floor(Math.random() * where.length)];
    
    return `Sorry I'm late! ${randomWho} ${randomWhat} ${randomWhere} and I had to deal with the situation.`;
}

// Generate and display 5 random funny excuses
console.log("Top 5 Reasons I'm Late Today:\n");
for (let i = 1; i <= 5; i++) {
    console.log(`${i}. ${generateLateExcuse()}`);
}

// Bonus: HTML display version for browsers
document.body.innerHTML = `
<h1>Corporate Excuse Generator 3000</h1>
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
    <button onclick="newExcuse()" style="padding: 10px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Generate New Excuse
    </button>
    <p id="excuse" style="background: #f8f8f8; padding: 15px; border-radius: 5px; margin-top: 20px;"></p>
</div>

<script>
    function newExcuse() {
        document.getElementById('excuse').textContent = generateLateExcuse();
    }
    // Show one immediately
    newExcuse();
</script>
`;











