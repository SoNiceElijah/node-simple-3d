
const { objs } = require('./object');
const vamth = require('./math');

const scene = [{
    type : 'Sphere',
    R : 10,
    C : [1,2,1],
    color : [255,0,0],
    ...objs.sphere
}];

function generate(w,h)
{
    let ws = 2.0 / w;
    let hs = 2.0 / h;

    let orig = [0,0,0];
    let F = [1,0,0];

    for(let i = 0; i < w; ++i)
    {
        for(let j = 0; j < h; ++j)
        {
            let dir =   
        }
    }

}



