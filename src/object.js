
const { vec } = require('./math');

function makeres(ok)
{
    return {
        ok : ok,
        point : null,
        norm : null,
        color : null,
    }
}

const sphere = {
    intersects : function (orig,dir) {

        let result = makeres(false);

        let a = 1;
        let b = vec.dot(vec.scale(2,dir),vec.sub(orig,this.C));
        let c = vec.dot(vec.sub(orig - this.C)) - Math.pow(this.R,2);

        let d = b * b - 4 * a * c;
        if(d < 0) return result;

        let t0 = (-b + Math.sqrt(d)) / (2 * a);
        let t1 = (-b - Math.sqrt(d)) / (2 * a);

        let t = Math.min(t0,t1);
        if(t < 0) return result;

        result.point = vec.add(orig, vec.scale(t,dir));
        result.norm = vec.norm(vec.sub(result.point,this.C));
        result.color = this.color.slice();

        return result;
    }
}

const objs = {
    sphere
}

module.exports = { objs };
