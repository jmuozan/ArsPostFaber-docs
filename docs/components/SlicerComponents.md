# Slicer Components

## Overview
The slicer components provide a complete 3D printing pipeline within Grasshopper, from 3D geometry to G-code generation. The system consists of five interconnected components that handle settings, slicing, shell generation, infill creation, and G-code output.

## Component Chain

```
SlicerSettings → SliceGeometry → ShellGeometry → InfillGeometry → GCodeGenerator
```

## SlicerSettings Component

### Purpose
Defines all parameters for the slicing pipeline including layer heights, print speeds, and advanced motion planning settings.

### Key Parameters
- **Layer Height**: Z-resolution of slicing operation
- **Wall Offset**: Distance between perimeter shells
- **Print Speed**: Feed rate for extrusion moves
- **Bed Dimensions**: Build volume for geometry centering
- **Smoothing Settings**: Path optimization parameters

## SliceGeometry Component

### Purpose
Converts 3D Brep geometry into 2D layer curves through plane intersection.

### How It Works
- Calculates geometry bounding box and centers on build plate
- Creates horizontal cutting planes at layer height intervals
- Intersects geometry with each plane to create 2D curves
- Outputs structured tree of curves per layer

### Technical Features
```csharp
// Layer plane intersection
Intersection.BrepPlane(sliceBrep, plane, tolerance, out curves, out points);
```

## ShellGeometry Component

### Purpose
Generates perimeter shells through curve offsetting and creates infill regions.

### Process
1. **Shell Generation**: Creates multiple offset curves for wall thickness
2. **Region Creation**: Generates innermost curves for infill boundaries
3. **Offset Calculation**: Uses specified wall thickness and shell count

### Technical Features
- Curve offsetting with sharp corner handling
- Automatic shell count management
- Innermost region extraction for infill

## InfillGeometry Component

### Purpose
Creates infill patterns within the regions defined by shell geometry.

### Pattern Generation
- Horizontal line patterns with configurable spacing
- Intersection with region boundaries for proper trimming
- Planar Brep creation for accurate curve-surface intersection

### Technical Features
```csharp
// Infill line generation
var line = new Line(new Point3d(minX - spacing, y, z), 
                   new Point3d(maxX + spacing, y, z));
Intersection.CurveBrep(lineCurve, brep, tolerance, out segments, out points);
```

## GCodeGenerator Component

### Purpose
Converts toolpath curves into optimized G-code with advanced motion planning.

### Advanced Features

#### Arc Interpolation
- Automatic detection of circular segments
- G2/G3 command generation for smooth motion
- Configurable tolerance for arc fitting

#### Path Optimization
- Polyline simplification with angular tolerance
- Moving average smoothing for noise reduction
- Adaptive feed rates for cornering

#### Motion Planning
```csharp
// Smoothing pipeline
poly = RemoveDegenerateSegments(poly);
poly = MergeTinySegments(poly, settings.MinSegmentLength);
poly = SmoothPolyline(poly, settings.SmoothingSamples);
poly = SimplifyPolylineAdvanced(poly, angleRad, distanceTol);
```

## Technical Features

### Coordinate System Management
- Automatic bed centering of geometry
- Z-layer height calculation and management
- Consistent coordinate transformation throughout pipeline

### Quality Control
- Tolerance-based intersection calculations
- Degenerate segment removal
- Curve validation and cleanup

### Performance Optimization
- Efficient tree structure handling
- Memory-conscious processing of large geometries
- Configurable sampling rates for complex curves

## Advanced G-Code Features

### Arc Detection Algorithm
```csharp
// Circle fitting with least-squares method
private static bool TryFitCircleRobust(List<Point3d> pts, double tol,
    out Point3d center, out double radius, out bool clockwise)
```

### Adaptive Motion Planning
- Corner detection and speed adjustment
- Junction deviation calculation
- Smooth acceleration profiles

### Firmware Optimization
- Buffer-aware command generation
- Hardware-specific motion limits
- Advanced acceleration settings

## Use Cases
- Complete 3D printing workflow from CAD to G-code
- Educational slicing algorithm development
- Custom toolpath generation for specialized applications
- Research in additive manufacturing path planning
- Integration with custom printer firmware and hardware