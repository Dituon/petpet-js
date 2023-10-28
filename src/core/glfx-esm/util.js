import SplineInterpolator from './spline'

export function simpleShader(shader, uniforms, textureIn, textureOut) {
  (textureIn || this._.texture).use();
  this._.spareTexture.drawTo(function() {
    shader.uniforms(uniforms).drawRect();
  });
  this._.spareTexture.swapWith(textureOut || this._.texture);
}

export function clamp(lo, value, hi) {
  return Math.max(lo, Math.min(value, hi));
}

export function splineInterpolate(points) {
  var interpolator = new SplineInterpolator(points);
  var array = [];
  for (var i = 0; i < 256; i++) {
    array.push(clamp(0, Math.floor(interpolator.interpolate(i / 255) * 256), 255));
  }
  return array;
}
