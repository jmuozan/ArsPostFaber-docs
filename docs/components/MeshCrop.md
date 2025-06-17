# Mesh Crop Component

## Overview
The Mesh Crop component crops input meshes to a specified axis-aligned bounding box with configurable scaling and offset parameters. It's useful for isolating specific regions of complex meshes or preparing meshes for 3D printing within build volume constraints.

## How It Works

### Bounding Box Calculation
- Calculates original mesh bounding box
- Applies scale factors to modify box dimensions
- Applies offset to move box center position

### Face Filtering
- Tests each mesh face against the cropping box
- Only includes faces where ALL vertices are inside the box
- Maintains mesh topology and indexing consistency

### Vertex Management
- Creates index mapping for included vertices
- Removes unused vertices to optimize output mesh
- Rebuilds face connectivity with new indices

## Inputs
- **Mesh (M)**: Input mesh to crop
- **Scale X/Y/Z (SX/SY/SZ)**: Scale factors for bounding box dimensions
- **Offset X/Y/Z (OX/OY/OZ)**: Translation of bounding box center

## Outputs
- **Cropped Mesh (M)**: Resulting mesh after cropping operation

## Technical Features

### Conservative Cropping
Uses a conservative approach where faces are only included if ALL vertices are within the bounding box. This prevents partial faces and maintains mesh integrity.

### Memory Efficiency
- Uses Dictionary for O(1) vertex index lookups
- Only processes vertices that are actually used
- Compacts final mesh to remove unused vertices

### Coordinate Transformation
```csharp
// Calculate scaled extents
hx *= sx; hy *= sy; hz *= sz;

// Apply offset to center
center.X += ox; center.Y += oy; center.Z += oz;

// Compute final bounds
min = new Point3d(center.X - hx, center.Y - hy, center.Z - hz);
max = new Point3d(center.X + hx, center.Y + hy, center.Z + hz);
```

### Quality Assurance
- Automatically computes normals for output mesh
- Handles both triangular and quad faces
- Provides warnings when no faces remain after cropping

## Use Cases
- Preparing large meshes for 3D printing within build volumes
- Extracting specific regions from scanned or generated meshes
- Creating mesh subsets for detailed analysis
- Optimizing mesh complexity by removing unnecessary geometry