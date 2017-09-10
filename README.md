# Cow Toon Shader

## Description
The goal of this assignment was to implement a Blinn-Phong shader to render the cow model that was given to us. On top of that, we were to use some texture lookups and make another shader for silhouetting to make it be "toon" shading, much like you see in games such as The Legend of Zelda WindWaker.

## Tools Used
- Modern OpenGL 3 for drawing
- SDL2 for the windowing and user input

## Features
- Blinn-Phong shader with the ambient, specular, and diffuse lighting
- Toon shader via silhouette highlighting and grouping colors
- Adjustable camera and light

## Controls
- Mouse: Click and move camera around
- 'L': Point the light towards whatever the camera is looking at

## Installing
On Linux:
```sh
g++ main.cpp -lGL -lGLU -lSDL2 -lGLEW
```
