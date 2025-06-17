# Serial Control Component

## Overview
The Serial Control component provides comprehensive G-code streaming and printer communication capabilities. It features real-time toolpath visualization, interactive path editing, and robust serial communication with flow control and error handling.

## How It Works

### Serial Communication
- Cross-platform serial port handling (Windows/macOS/Linux)
- Automatic port detection and configuration
- Hardware flow control and buffer management

### G-Code Streaming
- Line-by-line command transmission with acknowledgment
- Printer buffer management to prevent overflow
- Real-time progress tracking and status monitoring

### Interactive Path Preview
- 3D visualization of executed vs. upcoming toolpath
- Color-coded segments (orange=executed, blue=travel, red=extrusion)
- Interactive path editing with immediate G-code regeneration

### Printer Integration
- Automatic printer state detection and management
- Emergency stop and pause/resume functionality
- Real-time response logging and error handling

## Inputs
- **Port (P)**: Serial port name (auto-detected dropdown)
- **Baud Rate (B)**: Communication speed (typically 115200)
- **Connect (C)**: Boolean to establish printer connection
- **Command (Cmd)**: G-code commands to stream
- **Reset (R)**: Reset playback to beginning
- **Bounding Box (BB)**: Printer build volume dimensions
- **Show BBox (SB)**: Toggle bounding box visualization
- **Samples (S)**: Number of preview sample points

## Outputs
- **Response (Res)**: Current printer status/response
- **PortEvent (Evt)**: Last communication event
- **Path (Path)**: Visualized toolpath curve
- **GCode (G)**: Modified G-code after editing

## Technical Features

### Buffer Management
```csharp
// Sliding window for command acknowledgment
private LinkedList<NackData> _ackWindow = new LinkedList<NackData>();
private int _receiveCacheSize = 127; // Printer buffer size
```

### Cross-Platform Serial
- Windows: RJCP.IO.Ports.SerialPortStream
- Unix/macOS: Direct FileStream with stty configuration
- Automatic platform detection and appropriate wrapper selection

### Path Visualization
- Real-time separation of executed vs. upcoming moves
- Extrusion vs. travel move classification
- Interactive sample point generation for path editing

### Error Recovery
- Automatic retry on communication errors
- Checksum validation for critical commands
- Graceful handling of printer errors and timeouts

## Interactive Features

### Path Editing
- Click edit button to open 3D path editor
- Lasso selection and group vertex manipulation
- Real-time G-code regeneration from edited paths

### Play/Pause Control
- Real-time streaming control
- Pause at any point in execution
- Resume from current position

### Printer Bounding Box
- Visual representation of build volume
- Constraint checking for edited paths
- Scale reference for toolpath planning

## Use Cases
- Direct G-code streaming to 3D printers and CNC machines
- Interactive toolpath optimization and editing
- Real-time fabrication monitoring and control
- Educational demonstrations of digital fabrication
- Prototyping and testing of G-code generation algorithms