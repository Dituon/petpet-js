precision highp float;
uniform sampler2D u_image;
varying vec2 v_texCoord;

void main() {
    vec2 p = v_texCoord * 2.0 - 1.0;
    float d = length(p);
    if (d > 1.0) {
        discard;
    }
    gl_FragColor = texture2D(u_image, v_texCoord);
}