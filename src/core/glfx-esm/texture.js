import * as store from './store'
import Shader from './shader'

var canvas = null;

export default class Texture {
  
  static fromElement(element) {
    var gl = store.get('gl')
    var texture = new Texture(0, 0, gl.RGBA, gl.UNSIGNED_BYTE);
    texture.loadContentsOf(element);
    return texture;
  }
  
  constructor(width, height, format, type) {
    var gl = store.get('gl')
    this.gl = gl;
    this.id = gl.createTexture();
    this.width = width;
    this.height = height;
    this.format = format;
    this.type = type;

    gl.bindTexture(gl.TEXTURE_2D, this.id);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    if (width && height) gl.texImage2D(gl.TEXTURE_2D, 0, this.format, width, height, 0, this.format, this.type, null);
  }
  
  loadContentsOf(element) {
    var gl = store.get('gl')
    this.width = element.width || element.videoWidth;
    this.height = element.height || element.videoHeight;
    gl.bindTexture(gl.TEXTURE_2D, this.id);
    gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, element);
  }
  
  initFromBytes(width, height, data) {
    var gl = store.get('gl')
    this.width = width;
    this.height = height;
    this.format = gl.RGBA;
    this.type = gl.UNSIGNED_BYTE;
    gl.bindTexture(gl.TEXTURE_2D, this.id);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, this.type, new Uint8Array(data));
  }
  
  destroy() {
    var gl = store.get('gl')
    gl.deleteTexture(this.id);
    this.id = null;
  }
  
  use(unit) {
    var gl = store.get('gl')
    gl.activeTexture(gl.TEXTURE0 + (unit || 0));
    gl.bindTexture(gl.TEXTURE_2D, this.id);
  }
  
  unuse(unit) {
    var gl = store.get('gl')
    gl.activeTexture(gl.TEXTURE0 + (unit || 0));
    gl.bindTexture(gl.TEXTURE_2D, null);
  }
  
  ensureFormat(width, height, format, type) {
    // allow passing an existing texture instead of individual arguments
    if (arguments.length == 1) {
      var texture = arguments[0];
      width = texture.width;
      height = texture.height;
      format = texture.format;
      type = texture.type;
    }

    // change the format only if required
    if (width != this.width || height != this.height || format != this.format || type != this.type) {
      var gl = store.get('gl')
      this.width = width;
      this.height = height;
      this.format = format;
      this.type = type;
      gl.bindTexture(gl.TEXTURE_2D, this.id);
      gl.texImage2D(gl.TEXTURE_2D, 0, this.format, width, height, 0, this.format, this.type, null);
    }
  }
  
  drawTo(callback) {
    var gl = store.get('gl')
    // start rendering to this texture
    gl.framebuffer = gl.framebuffer || gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, gl.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.id, 0);
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
        throw new Error('incomplete framebuffer');
    }
    gl.viewport(0, 0, this.width, this.height);

    // do the drawing
    callback();

    // stop rendering to this texture
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  
  fillUsingCanvas(callback) {
    callback(getCanvas(this));
    var gl = store.get('gl')
    this.format = gl.RGBA;
    this.type = gl.UNSIGNED_BYTE;
    gl.bindTexture(gl.TEXTURE_2D, this.id);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
    return this;
  }

  toImage(image) {
    this.use();
    Shader.getDefaultShader().drawRect();
    var gl = store.get('gl')
    var size = this.width * this.height * 4;
    var pixels = new Uint8Array(size);
    var c = getCanvas(this);
    var data = c.createImageData(this.width, this.height);
    gl.readPixels(0, 0, this.width, this.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    for (var i = 0; i < size; i++) {
        data.data[i] = pixels[i];
    }
    c.putImageData(data, 0, 0);
    image.src = canvas.toDataURL();
  }

  swapWith(other) {
    var temp;
    temp = other.id; other.id = this.id; this.id = temp;
    temp = other.width; other.width = this.width; this.width = temp;
    temp = other.height; other.height = this.height; this.height = temp;
    temp = other.format; other.format = this.format; this.format = temp;
  }
}

function getCanvas(texture) {
  if (canvas == null) canvas = document.createElement('canvas');
  canvas.width = texture.width;
  canvas.height = texture.height;
  var c = canvas.getContext('2d');
  c.clearRect(0, 0, canvas.width, canvas.height);
  return c;
}
