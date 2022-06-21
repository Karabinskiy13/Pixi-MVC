const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '0x';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const shapeArea = (vertex) => {
    const sumVertex = [];
    for (let i = 0; i <Math.ceil(points.length/2); i++){
        sumVertex[i] = vertex.slice((i*2), (i*2) + 2);
    }

    const amountVertex = sumVertex.length;
    let j = 0;
    let area = sumVertex[amountVertex - 1][0] * sumVertex[0][1] - sumVertex[amountVertex - 1][1] * sumVertex[0][0];
    while (j<amountVertex-1) {
        area += sumVertex[j][0] * sumVertex[j+1][1] - sumVertex[j][1] * sumVertex[j+1][0];
        j++;
    }
    return Math.round(area /= 2);
}

export {random, getRandomColor, shapeArea}