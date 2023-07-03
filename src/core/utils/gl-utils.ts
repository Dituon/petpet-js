// @ts-ignore
import defaultVertexShader from './default-vertex-shader.glsl?raw'

export function useGL(shaderSource: string, image: HTMLImageElement | HTMLCanvasElement, gl: WebGLRenderingContext) {
    const width = image.width
    const height = image.height

    gl.canvas.width = width
    gl.canvas.height = height

    gl.viewport(0, 0, width, height)

    const vertexShader = gl.createShader(gl.VERTEX_SHADER)
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
    const program = gl.createProgram()

    if (!vertexShader || !fragmentShader || !program) {
        throw new Error('Failed to create WebGL shaders or program')
    }

    gl.shaderSource(vertexShader, defaultVertexShader)
    gl.shaderSource(fragmentShader, shaderSource)

    gl.compileShader(vertexShader)
    gl.compileShader(fragmentShader)

    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        throw new Error('Failed to compile WebGL vertex shader: ' + gl.getShaderInfoLog(vertexShader))
    }

    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        throw new Error('Failed to compile WebGL fragment shader: ' + gl.getShaderInfoLog(fragmentShader))
    }

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error('Failed to link WebGL program: ' + gl.getProgramInfoLog(program))
    }

    gl.useProgram(program)

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
    const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord')
    const positionBuffer = gl.createBuffer()

    if (positionBuffer === null) {
        throw new Error('Failed to create WebGL buffer')
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(positionAttributeLocation)
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)

    const texCoordBuffer = gl.createBuffer()

    if (texCoordBuffer === null) {
        throw new Error('Failed to create WebGL buffer')
    }

    const texture = gl.createTexture()

    if (texture === null) {
        throw new Error('Failed to create WebGL texture')
    }

    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

    return gl.canvas
}