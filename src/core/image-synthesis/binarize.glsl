precision highp float;
uniform sampler2D u_image;
varying vec2 v_texCoord;

vec4 getColor(vec2 uv) {
    vec4 texColor = texture2D(u_image, uv);
    float r = texColor.r * 255.0;
    float g = texColor.g * 255.0;
    float b = texColor.b * 255.0;
    float m = r + g + b;

    if (m >= 383.0) {
        return vec4(1.0, 1.0, 1.0, 1.0);
    } else {
        return vec4(0.0, 0.0, 0.0, 1.0);
    }
}

void main() {
    vec2 p = v_texCoord * 2.0 - 1.0;
    float d = length(p);
    if (d > 1.0) {
        discard;
    }

    gl_FragColor = getColor(v_texCoord);
}