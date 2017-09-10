#version 150

uniform vec4 lightInEyeSpace;

uniform vec4 Ia;
uniform vec4 Id;
uniform vec4 Is;

uniform vec4 ka;
uniform vec4 kd;
uniform vec4 ks;
uniform float specular;

uniform sampler2D diffuseRamp;
uniform sampler2D specularRamp;

out vec4 color;
in vec3 vertexInEyeSpace;
in vec3 normalInEyeSpace;

void main() {

    // We'll start with black, then add various lighting terms to it
    // as we calculate them.

    vec3 n = normalize(normalInEyeSpace);
    vec3 l = normalize(lightInEyeSpace.xyz - vertexInEyeSpace);
    vec3 e = normalize(-vertexInEyeSpace);
    vec3 h = normalize(l + e);

    vec3 diffuseColor = texture(diffuseRamp, vec2( (dot(l, n) + 1.0) / 2.0, 0)).xyz;
    vec3 specularColor = texture(specularRamp, vec2(pow(max(dot(h,n), 0.0), specular), 0)).xyz;

    vec3 finalColor = vec3(0.0, 0.0, 0.0);

    finalColor += (ka.xyz)*(Ia.xyz);
    finalColor += (kd.xyz)*(Id.xyz)*diffuseColor;
    finalColor += (ks.xyz)*(Is.xyz)*specularColor;

    color.rgb = finalColor;
    color.a = 1.0;

}
