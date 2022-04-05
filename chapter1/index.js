window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    canvas.width = 350;
    canvas.height = 350;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'lightBlue';
    ctx.strokeStyle = 'blue';
    ctx.lineWith = 5;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);

})