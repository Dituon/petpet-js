precision highp float;
uniform sampler2D u_image;
varying vec2 v_texCoord;

void main() {
    vec4 color = texture2D(u_image, v_texCoord);

    float gray = (color.r + color.g + color.b) / 3.0;
    gl_FragColor = vec4(gray, gray, gray, color.a);
}