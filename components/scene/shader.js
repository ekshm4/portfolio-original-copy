export const vertex = `
    uniform float uTime;
    varying vec2 vUv;

    void main () {
        vUv = uv;
        vec3 newPosition = position;
        
        float waveX = 0.20 * sin((position.x * 5.0) + mod(uTime, 6.2832) * 1.0);
        newPosition.z += waveX;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`

export const fragment = `
    uniform sampler2D uTexture;
    uniform sampler2D uTexture2;
    uniform float uTransition;
    varying vec2 vUv;

    void main () {
        vec4 color1 = texture2D(uTexture, vUv);
        vec4 color2 = texture2D(uTexture2, vUv);
        vec4 color = mix(color1, color2, uTransition);
        gl_FragColor = color;
    }
`
