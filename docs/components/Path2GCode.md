# Path2GCode Component

## Overview
The Path2GCode component converts Grasshopper curves into G-code commands suitable for CNC machines, plotters, and 3D printers. It handles pen-up/pen-down movements automatically and optimizes toolpaths for smooth operation.

## How It Works

### Curve Processing
- Accepts curves organized in data trees (multiple toolpaths)
- Converts complex curves to polylines with adaptive sampling
- Maintains curve sequence and grouping through tree structure

### G-Code Generation
- Generates standard G-code commands (G0, G1, G28, etc.)
- Automatic pen lifting between separate curves
- Configurable feed rates for drawing vs. travel moves

### Motion Planning
- Optimizes travel moves between curve endpoints
- Handles Z-axis movements for pen-up/pen-down operations
- Uses invariant culture formatting for numeric precision

## Inputs
- **Curves (C)**: Tree of curves to convert to G-code
- **Lift Height (H)**: Z-height for pen-up travel moves
- **Z Down (Z)**: Z-height for drawing operations
- **Feed Rate (F)**: Speed for drawing moves (mm/min)
- **Travel Rate (T)**: Speed for travel moves (mm/min)

## Outputs
- **G-Code (G)**: Complete G-code as multiline string

## Technical Features

### Curve Sampling
- Automatic polyline conversion with length-based segmentation
- Maintains curve fidelity while optimizing for machine capabilities
- Handles both simple and complex curve geometries

### Command Structure
```gcode
G28          ; Home axes
G21          ; Set units to millimeters  
G90          ; Absolute positioning
G1 Z[lift]   ; Initial pen lift
G1 X[x] Y[y] ; Travel to start
G1 Z[down]   ; Pen down
G1 X[x] Y[y] ; Draw moves
G1 Z[lift]   ; Pen up
```

### Precision Control
- Uses CultureInfo.InvariantCulture for consistent number formatting
- Configurable decimal precision (0.###)
- Prevents locale-specific formatting issues

## Use Cases
- Converting Grasshopper designs to plotter drawings
- 2D cutting operations on CNC machines
- Artistic plotting and drawing automation
- Educational G-code learning and visualization