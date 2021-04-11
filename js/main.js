const size = 100

canvas = [...document.querySelectorAll("#c1 , #c2")]
console.log(canvas)

canvas.forEach(c => {
    c.width = size
    c.height = size
    const ctx = c.getContext("2d");
    for (let i = 0; i < 500; i++) {
        let alpha = Math.random() + .5
        const x = Math.floor(Math.random() * size)
        const y = Math.floor(Math.random() * size)
        ctx.fillStyle = `rgba(${0},${120 + 50 * alpha},${255},${alpha * y / size})`;
        ctx.fillRect(x, y, 1, 1);
    }
});