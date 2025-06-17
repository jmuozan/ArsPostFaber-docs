# Mesh Edit Component

## Overview
The Mesh Edit component provides an interactive 3D mesh editor with vertex selection, manipulation, and optional hand tracking support. It opens a dedicated editing window with orbit controls, selection tools, and real-time mesh modification capabilities.

## How It Works

### Interactive Editor Window
- Cross-platform window using Eto.Forms
- Real-time 3D visualization with orbit/pan/zoom controls
- Multiple interaction modes: View, Edit, and Hand tracking

### Vertex Manipulation
- Lasso selection for multiple vertices
- Group dragging of selected vertices
- Real-time mesh preview during editing

### Hand Tracking Integration
- Optional computer vision-based hand tracking
- Pinch gestures for vertex manipulation
- Requires Python with MediaPipe and OpenCV

## Inputs
- **Mesh (M)**: Input mesh to edit

## Outputs
- **Mesh (M)**: Edited mesh after modifications

## Technical Features

### 3D Projection System
```csharp
// World to screen projection
var v = p - _center;
var x1 = (float)(v.X * c - v.Y * s);  // Yaw rotation
var y1 = (float)(v.X * s + v.Y * c);
var y2 = y1 * cp - z1 * sp;          // Pitch rotation
return new PointF(x1 * _zoom + cx, -y2 * _zoom + cy);
```

### Selection Algorithms
- Ray-casting point-in-polygon test for lasso selection
- Efficient vertex proximity testing
- Multi-vertex group manipulation

### Hand Tracking Pipeline
- Launches external Python script for computer vision
- Real-time coordinate streaming via stdout
- Gesture recognition for pinch-to-drag operations

### View Controls
- Standard 3D navigation (orbit, pan, zoom)
- Preset viewing angles (Front, Right, Top, etc.)
- Automatic view fitting and reset functionality

## Interface Modes

### View Mode
- Navigation only (orbit, pan, zoom)
- No mesh modification
- Safe preview mode

### Edit Mode
- Lasso selection of vertices
- Group dragging of selected vertices
- Real-time mesh deformation

### Hand Mode
- Computer vision-based interaction
- Pinch gesture detection
- Hands-free mesh manipulation

## Use Cases
- Interactive mesh refinement and correction
- Artistic mesh sculpting and deformation
- Accessibility-focused mesh editing with hand tracking
- Educational demonstrations of 3D geometry manipulation
- Rapid mesh prototyping and iteration