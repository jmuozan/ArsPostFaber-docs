# Photogrammetry Component

## Overview
The Photogrammetry component creates 3D models from video footage using Apple's RealityKit photogrammetry framework. It provides a complete pipeline from video capture to 3D mesh generation with automatic processing and Rhino integration.

## How It Works

### Video Capture Server
- Local HTTP server with mobile-friendly upload interface
- QR code generation for easy device connection
- Support for both live recording and existing video files

### Frame Extraction
- Automatic video processing using FFmpeg
- Extracts individual frames for photogrammetry processing
- Configurable frame sampling and quality settings

### 3D Reconstruction
- Uses HelloPhotogrammetry (Apple's RealityKit wrapper)
- Generates USDZ 3D models from image sequences
- Configurable detail levels and processing options

### Rhino Integration
- Automatic import of generated 3D models
- Conversion to Grasshopper-compatible meshes
- Cleanup of temporary imported objects

## Inputs
- **Start (S)**: Boolean to activate capture and processing
- **Detail (D)**: Quality level {preview, reduced, medium, full, raw}
- **Sample Ordering (SO)**: Processing method {unordered, sequential}
- **Feature Sensitivity (FS)**: Feature detection sensitivity value

## Outputs
- **Server URL**: Mobile connection URL with QR code
- **Mesh (M)**: Reconstructed 3D mesh from photogrammetry

## Technical Features

### Mobile Interface
- Responsive web design optimized for smartphones
- Camera capture API integration
- Real-time upload progress feedback

### Processing Pipeline
```
Video Upload → Frame Extraction → Photogrammetry → USDZ Generation → Mesh Import
```

### Cross-Platform Support
- FFmpeg integration for video processing
- Platform-specific executable handling
- Automatic dependency detection

### Quality Control
- Multiple detail level options
- Configurable feature sensitivity
- Sample ordering optimization

## Processing Workflow

1. **Video Capture**: User records object from multiple angles
2. **Upload**: Video transmitted to Grasshopper via mobile interface
3. **Frame Extraction**: FFmpeg extracts individual frames
4. **Photogrammetry**: HelloPhotogrammetry processes frames into 3D model
5. **Import**: USDZ model imported into Rhino and converted to mesh
6. **Output**: Clean mesh ready for further processing

## Use Cases
- Rapid 3D scanning using mobile devices
- Reverse engineering of physical objects
- Digital archiving and documentation
- Educational photogrammetry demonstrations
- Integration of real-world objects into digital workflows

## Requirements
- macOS (for HelloPhotogrammetry/RealityKit)
- FFmpeg installed and accessible via PATH
- Mobile device with camera for capture
- Network connectivity between device and computer