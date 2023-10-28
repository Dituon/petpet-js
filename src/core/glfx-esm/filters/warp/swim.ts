import Shader from '../../shader'
import {simpleShader} from '../../util'
import * as store from '../../store'

export default function(
    scale = 32,
    stretch = 1,
    angle = 0,
    amount = 20,
    turbulence = 1,
    time = 1
) {
    let gl = store.get('gl');
    gl.swim = gl.swim || new Shader(null, '\
    const float PI = 3.14159265358979323846;\
    uniform float scale;\
    uniform float stretch;\
    uniform float angle;\
    uniform float amount;\
    uniform float turbulence;\
    uniform float time;\
    \
    uniform sampler2D texture;\
    uniform vec2 texSize;\
    varying vec2 texCoord;\
    \
    float rand(vec2 co){return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);}\
    float rand (vec2 co, float l) {return rand(vec2(rand(co), l));}\
    float rand (vec2 co, float l, float t) {return rand(vec2(rand(co, l), t));}\
    \
    float perlin(vec2 p, float dim, float time) {\
        vec2 pos = floor(p * dim);\
        vec2 posx = pos + vec2(1.0, 0.0);\
        vec2 posy = pos + vec2(0.0, 1.0);\
        vec2 posxy = pos + vec2(1.0);\
        \
        float c = rand(pos, dim, time);\
        float cx = rand(posx, dim, time);\
        float cy = rand(posy, dim, time);\
        float cxy = rand(posxy, dim, time);\
        \
        vec2 d = fract(p * dim);\
        d = -0.5 * cos(d * PI) + 0.5;\
        \
        float ccx = mix(c, cx, d.x);\
        float cycxy = mix(cy, cxy, d.x);\
        float center = mix(ccx, cycxy, d.y);\
        \
        return center * 2.0 - 1.0;\
    }\
    \
    void main(){\
        vec2 coord = texCoord * texSize;\
        float c = cos(angle);\
        float s = sin(angle);\
        float nx = c * coord.x + s * coord.y;\
        float ny = -s * coord.x + c * coord.y;\
        nx /= scale;\
        ny /= scale * stretch;\
        coord.x += amount * perlin(vec2(nx + 0.5, ny), turbulence, time);\
        coord.y += amount * perlin(vec2(nx, ny + 0.5), turbulence, time);\
        gl_FragColor = texture2D(texture, coord / texSize);\
        vec2 clampedCoord = clamp(coord, vec2(0.0), texSize);\
        if (coord != clampedCoord) {\
          gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));\
        }\
   }\
  ');

    simpleShader.call(this, gl.swim, {
        scale: scale,
        stretch: stretch,
        angle: angle,
        amount: amount,
        turbulence: turbulence,
        time: time,
        texSize: [this.width, this.height]
    })

    return this
}
