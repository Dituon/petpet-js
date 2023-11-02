import Shader from '../../shader'
import {simpleShader} from '../../util'
import * as store from '../../store'

const MAX_LEVELS = 64

export default function(skip = 4, levels = 8, range = 12) {
    let gl = store.get('gl');
    gl.oil = gl.oil || new Shader(null, `
    uniform float skip;
    uniform float range;
    uniform float levels;
    vec4 colorArr[${MAX_LEVELS}];
    float counts[${MAX_LEVELS}];
    uniform vec2 texSize;
    uniform sampler2D tex;
    out vec4 fragColor;
    in vec2 texCoord;
    
    vec4 tx(vec2 l){
        return texture(tex, texCoord + l / texSize);
    }
    
    void main() {
        for(float i = -range; i < range; i+=skip){
            for(float j= -range; j < range; j+=skip){
                vec4 t = tx(vec2(i, j));
                int lv = int(dot(vec4(1.0), t) / 4.0 * levels);
                counts[lv] += 1.;
                colorArr[lv] += t;
            }
        }
    
        int mx_index = 0;
        float mx_val = counts[0];
        for(int i = 1; i < int(levels); i++){
            if(counts[i]>mx_val){
                mx_index = i;
                mx_val = counts[i];
            }
        }
    
        fragColor = colorArr[mx_index] / float(mx_val);
    }
    `, true);

    simpleShader.call(this, gl.oil, {
        skip: skip,
        levels: levels,
        range: range,
        texSize: [this.width, this.height]
    });

    return this;
}
