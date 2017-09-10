#version 150

uniform mat4 modelViewMatrix;
uniform mat4 normalMatrix;
uniform mat4 projectionMatrix;
uniform vec4 lightInEyeSpace;

in vec3 vertex;
in vec3 normal;

out vec3 vertexInEyeSpace;
out vec3 normalInEyeSpace;
// out vec3 interpColor;

void main() {

    // TODO: Transform the vertex position and normal to eye space
    // and pass them on to the fragment shader so that it can
    // calculate the lighting correctly.

    vertexInEyeSpace = (modelViewMatrix*vec4(vertex,1)).xyz;
    normalInEyeSpace = normalize((normalMatrix*vec4(normal,0)).xyz);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vertex,1);
}
