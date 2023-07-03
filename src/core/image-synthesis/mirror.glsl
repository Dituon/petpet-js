precision highp float;
uniform sampler2D u_image;
varying vec2 v_texCoord;

void main() {
    gl_FragColor = texture2D(u_image, vec2(1.0 - v_texCoord.x, v_texCoord.y));
}