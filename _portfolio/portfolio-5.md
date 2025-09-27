---
title: "Interactive 3D Gaussian Splat Viewer"
excerpt: "Real-time 3D Gaussian Splatting visualization using Three.js, TypeScript, and WebGL"
collection: portfolio
---

An interactive web-based viewer for 3D Gaussian Splatting (3DGS) scenes built with modern web technologies. This project demonstrates real-time rendering of photorealistic 3D scenes using the efficient Gaussian splatting technique.

## Technical Stack

- **Three.js**: 3D graphics library for WebGL rendering
- **TypeScript**: Type-safe development
- **gsplat**: Specialized library for Gaussian splatting visualization
- **Vite**: Modern build tool for fast development

## Features

- Interactive orbit controls for scene navigation
- Real-time rendering of 3D Gaussian splat data
- WebGL-accelerated performance
- Responsive design that adapts to different screen sizes
- Support for standard .splat file formats

## Key Technologies

The viewer leverages the latest developments in 3D Gaussian Splatting, a novel approach to neural scene representation that offers:

- **High Performance**: Faster rendering compared to Neural Radiance Fields (NeRF)
- **Memory Efficiency**: Compact scene representation using Gaussian primitives
- **Real-time Interaction**: Smooth navigation and manipulation of 3D scenes
- **Quality**: Photorealistic novel view synthesis

## Live Demo

Experience the interactive 3D Gaussian splat viewer directly in your browser:

<div style="text-align: center; margin: 20px 0;">
  <iframe 
    src="/assets/demos/gsplat-viewer/index.html" 
    width="100%" 
    height="500px" 
    style="border: 1px solid #ccc; border-radius: 8px;"
    frameborder="0">
    Your browser does not support iframes. 
    <a href="/assets/demos/gsplat-viewer/index.html" target="_blank">Open demo in new window</a>
  </iframe>
</div>

<div style="text-align: center; margin: 10px 0;">
  <a href="/assets/demos/gsplat-viewer/index.html" target="_blank" style="display: inline-block; padding: 10px 20px; background-color: #007cba; color: white; text-decoration: none; border-radius: 5px;">🚀 Open Full Screen Demo</a>
</div>

## Implementation Details

The viewer is built using a modular architecture:

1. **Scene Management**: Handles loading and management of 3D Gaussian splat data
2. **Camera System**: Implements perspective camera with orbit controls
3. **Rendering Pipeline**: WebGL-based rendering optimized for Gaussian primitives
4. **User Interaction**: Mouse and touch controls for scene navigation

## Source Code

The complete source code for this project is available in my [GitHub repository](https://github.com/erenovic), featuring:

- TypeScript implementation with full type safety
- Modular code structure for easy extension
- Comprehensive documentation and examples
- Support for custom 3D Gaussian splat datasets

<div style="text-align: center; margin: 20px 0;">
  <img src='/images/gsplat-viewer-preview.png' alt='3D Gaussian Splat Viewer - Interactive 3D scene with orbit controls' style="width: 100%; height: auto; border: 1px solid #ccc; border-radius: 8px;">
</div>

This project showcases the intersection of computer graphics, web development, and machine learning, demonstrating how cutting-edge 3D technologies can be made accessible through modern web platforms.
