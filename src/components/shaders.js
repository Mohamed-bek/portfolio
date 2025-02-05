export const vertexShader = `
  uniform sampler2D u_map_tex;
  uniform float u_dot_size;
  uniform float u_time_since_click;
  uniform vec3 u_pointer;

  #define PI 3.14159265359

  varying float vOpacity;
  varying vec2 vUv;

  void main() {
    vUv = uv;

    // mask with world map
    float visibility = step(0.2, texture2D(u_map_tex, uv).r);
    gl_PointSize = visibility * u_dot_size;

    // set opacity to 1
    vOpacity = 1.0;

    // add ripple
    float t = u_time_since_click - 0.1;
    t = max(0.0, t);
    float max_amp = 0.15;
    float dist = 1.0 - 0.5 * length(position - u_pointer);
    float damping = 1.0 / (1.0 + 20.0 * t);
    float delta = max_amp * damping * sin(5.0 * t * (1.0 + 2.0 * dist) - PI);
    delta *= 1.0 - smoothstep(0.8, 1.0, dist);
    vec3 pos = position;
    pos *= (1.0 + delta);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const fragmentShader = `
  uniform sampler2D u_map_tex;

  varying float vOpacity;
  varying vec2 vUv;

  void main() {
    vec3 color = texture2D(u_map_tex, vUv).rgb;
    color -= 0.2 * length(gl_PointCoord.xy - vec2(0.5));
    float dot = 1.0 - smoothstep(0.38, 0.4, length(gl_PointCoord.xy - vec2(0.5)));
    if (dot < 0.5) discard;
    gl_FragColor = vec4(0.235, 0.812, 0.569, vOpacity); // Set to #3ccf91
  }
`;
