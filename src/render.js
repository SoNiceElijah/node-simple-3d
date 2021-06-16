
const { objs } = require('./object');
const vamth = require('./math');

const scene = [{
    type : 'Sphere',
    R : 10,
    C : [1,2,1],
    color : [255,0,0],
    ...objs.sphere
}];

function generate(window,screen,orig,focus,up,right,forward)
{
    let dw = window[0] / screen[0];
    let dh = window[1] / screen[1];

    for(let i = -window[0] / 2; i < window[0] / 2; i += dw)
    {
        for(let j = -window[1] / 2; j < window[1] / 2; j += dh)
        {
            let f = vamth.vec.scale(focus,forward);
            let r = vamth.vec.scale(i,right);
            let u = vamth.vec.scale(j,up);

            let dir = vamth.vec.norm(
                vamth.vec.add(
                    vamth.vec.add(orig,f),
                    vamth.vec.add(r,u),
                )
            );

            
        }
    }

}



