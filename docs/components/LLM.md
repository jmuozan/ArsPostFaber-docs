# LLM Components

## Overview
The LLM components provide AI-powered Grasshopper component generation using either local Ollama models or OpenAI's API. These components can automatically generate, compile, and integrate new Grasshopper components based on natural language descriptions.

## Component Architecture

### OllamaComponentGenerator
Local AI-powered component generation using Ollama models.

### OpenAIComponentGenerator  
Cloud-based component generation using OpenAI's API.

### ComponentCompiler
Standalone compiler for generated C# code into Grasshopper assemblies.

## How It Works

### Code Generation Pipeline
1. **Context Loading**: PDF documentation and code examples
2. **Prompt Construction**: Natural language to structured prompts
3. **AI Generation**: LLM creates complete C# component code
4. **Compilation**: Roslyn compiler builds .gha assembly
5. **Error Handling**: Automatic retry with error feedback

### Context Integration
- PDF extraction from documentation files
- Code example libraries for reference
- Grasshopper API guidelines and best practices
- Automatic context relevance scoring

## Ollama Component Features

### Local Model Support
- Automatic model detection via `ollama list`
- Support for code-specialized models (CodeLlama, DeepSeek, etc.)
- Configurable temperature and token limits

### Agent Mode
- Automatic retry on compilation errors
- Iterative improvement through error feedback
- Unlimited attempts until successful compilation

### Context Management
```csharp
// PDF context loading
public static string LoadPdfContext(string[] specificFiles = null)
{
    // Extract text from PDFs using UglyToad.PdfPig
    // Build comprehensive context for code generation
}
```

## OpenAI Component Features

### API Integration
- Support for multiple OpenAI models (GPT-4, GPT-3.5-turbo, etc.)
- Automatic model listing via API
- Structured conversation handling

### Enhanced Error Recovery
- Compilation error tracking and classification
- Adaptive retry strategies
- Lower temperature for error fixes

### Advanced Context Processing
```csharp
// Context relevance scoring
private int ScoreChunk(string chunk, HashSet<string> keywords)
{
    // Keyword matching with position weighting
    // Code block detection and scoring
    // Multiple occurrence handling
}
```

## Component Compiler

### Cross-Platform Compilation
- Roslyn C# compiler integration
- Automatic assembly reference resolution
- Platform-agnostic .gha generation

### Reference Management
```csharp
// Assembly reference collection
var assemblies = AppDomain.CurrentDomain.GetAssemblies()
    .Where(a => !a.IsDynamic && !string.IsNullOrEmpty(a.Location))
    .Select(a => a.Location);
```

## Technical Features

### PDF Context Processing
- Automatic text extraction from documentation
- Keyword-based relevance scoring
- Chunking with overlap for context preservation
- Multi-file context aggregation

### Error Classification
```csharp
private class CompilationErrorTracker
{
    public List<string> PreviousErrors { get; }
    public HashSet<string> CommonErrors { get; }
    // Adaptive error response generation
}
```

### Code Quality Assurance
- Namespace validation
- Assembly reference checking
- GUID generation for component identity
- Grasshopper API compliance verification

## Agent Mode Operation

### Iterative Improvement
1. **Initial Generation**: Create component from description
2. **Compilation Test**: Attempt to build .gha assembly
3. **Error Analysis**: Parse and classify compilation errors
4. **Retry Generation**: Enhanced prompt with error context
5. **Repeat**: Continue until successful compilation

### Context Adaptation
- Error-specific prompt modification
- Progressive context refinement
- Learning from previous failures

## Use Cases

### Rapid Prototyping
- Quick component creation for specific tasks
- Experimental algorithm implementation
- Custom data processing components

### Educational Applications
- Learning Grasshopper API through examples
- Understanding component architecture
- Code generation pedagogy

### Production Development
- Accelerated plugin development
- Consistent code quality and structure
- API best practice enforcement

### Research Applications
- AI-assisted software development studies
- Code generation quality analysis
- Human-AI collaboration patterns

## Requirements

### Ollama Setup
- Local Ollama installation
- Downloaded code-generation models
- Sufficient system resources for model inference

### OpenAI Setup
- Valid OpenAI API key
- Appropriate usage limits and billing
- Network connectivity for API access

### Development Environment
- .NET development tools
- Grasshopper SDK references
- Rhino installation for testing