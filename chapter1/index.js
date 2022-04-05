window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    canvas.width = 150;
    canvas.height = 950;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'lightBlue';
    ctx.strokeStyle = 'blue';
    ctx.lineWith = 5;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const getSmallEdge = context => {
        const edges = [context.canvas.height, context.canvas.width];
        edges.sort((a, b) => a - b);
        return edges[0]
    }

    const getSquareParams = (context, baseValue) => {
        const smallEdge = getSmallEdge(context);
        const edge = smallEdge * baseValue;
        return {
            x: (context.canvas.width - edge) / 2,
            y: (context.canvas.height - edge) / 2,
            width: edge,
            height: edge,
        };
    };
    const squareParams = getSquareParams(ctx, 1);
    ctx.clearRect(squareParams.x, squareParams.y, squareParams.width, squareParams.height);
})