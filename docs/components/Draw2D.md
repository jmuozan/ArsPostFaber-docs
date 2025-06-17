# Draw2D Component

## Overview
The Draw2D component creates an interactive web-based drawing interface that allows users to draw on their mobile devices and send the drawings to Grasshopper for further processing. It also supports G-code generation and real-time printing via serial communication.

## How It Works

### Web Server
- Creates a local HTTP server accessible via QR code
- Serves a responsive HTML page optimized for touch devices
- Handles real-time drawing data transmission

### Drawing Interface
- Touch-responsive canvas that scales to device screen
- Multi-user support with color-coded strokes
- Real-time synchronization between connected devices

### G-Code Generation
- Converts drawn strokes to G-code commands automatically
- Supports pen-up/pen-down movements for travel vs. drawing
- Configurable feed rates and Z-heights

### Serial Integration
- Direct printer communication via serial ports
- Real-time G-code streaming with proper buffering
- Cross-platform serial port detection (Windows/macOS/Linux)

## Inputs
- **Start (S)**: Boolean to activate the drawing session
- **Input Curves (C)**: Optional curves to display as reference
- **Bed Size X/Y**: Printer bed dimensions for scaling
- **Lift Height (H)**: Z-height for pen-up movements
- **Z Down (Z)**: Z-height for drawing movements
- **Feed Rate (F)**: Drawing speed (mm/min)
- **Travel Rate (T)**: Travel move speed (mm/min)

## Outputs
- **Server URL**: Connection URL with QR code display
- **Output Curves**: Drawn strokes as Grasshopper curves
- **G-Code**: Generated G-code commands for printing

## Technical Features

### Coordinate Normalization
Drawings are normalized to 0-1 coordinate space and then scaled to the specified bed dimensions, ensuring consistent output regardless of device screen size.

### Multi-Device Support
Each connected device gets a unique color, and all strokes are synchronized in real-time across all connected clients.

### Cross-Platform Serial
Uses platform-specific serial implementations:
- Windows: RJCP.IO.Ports.SerialPortStream
- Unix/macOS: Direct file stream access with stty configuration

### Web Interface Features
- Responsive design that works on phones and tablets
- Touch gesture support for drawing
- Real-time stroke preview and submission
- Serial port selection and printer control interface

## Use Cases
- Interactive design sessions with remote participants
- Quick sketch-to-fabrication workflows
- Educational demonstrations of digital fabrication
- Collaborative drawing and immediate 3D printing