# PDF Editor

A powerful and user-friendly PDF editing tool that allows you to easily modify, annotate, and manage PDF documents with a clean and intuitive interface.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

PDF Editor is a comprehensive solution for editing and managing PDF documents. Whether you need to add annotations, modify text, merge documents, or extract content, this tool provides a seamless experience for all your PDF editing needs.

Built with modern technologies, PDF Editor offers:
- **Fast Performance**: Optimized for handling large PDF files
- **User-Friendly Interface**: Intuitive design for easy navigation
- **Cross-Platform Support**: Works on Windows, macOS, and Linux
- **Open Source**: Community-driven development and transparency

## ✨ Features

### Core Editing Features
- **Text Editing**: Add, modify, and delete text within PDF documents
- **Annotations**: Add highlights, underlines, strikethrough, and notes
- **Drawing Tools**: Freehand drawing and shape insertion
- **Page Management**: Add, delete, reorder, and rotate pages
- **Merge & Split**: Combine multiple PDFs or split documents into separate files

### Advanced Features
- **OCR Support**: Extract text from scanned PDFs
- **Form Filling**: Fill out interactive PDF forms
- **Watermarks**: Add text or image watermarks to documents
- **Compression**: Reduce file size while maintaining quality
- **Export Options**: Save as PDF, images, or other formats
- **Undo/Redo**: Full support for operation history

### Document Management
- **Batch Processing**: Process multiple files simultaneously
- **Template Support**: Save and reuse document templates
- **Search & Replace**: Find and replace text across documents
- **Password Protection**: Secure documents with encryption

## 📦 Installation

### Prerequisites
- Node.js (version 14.0 or higher)
- npm (version 6.0 or higher) or yarn
- Git

### From Source

1. **Clone the repository**
   ```bash
   git clone https://github.com/thesatyamjain/pdf-editor.git
   cd pdf-editor
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

   The application will open in your default browser at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

   The optimized build will be generated in the `build/` directory.

### Using Docker

1. **Build the Docker image**
   ```bash
   docker build -t pdf-editor .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 pdf-editor
   ```

   Access the application at `http://localhost:3000`

## 🚀 Usage

### Getting Started

1. **Open a PDF**
   - Click the "Open" button or drag and drop a PDF file into the editor
   - The document will load and display in the main editing area

2. **Edit Your Document**
   - Use the toolbar to access editing tools
   - Select the tool you need (text, annotations, drawing, etc.)
   - Click or draw on the PDF to apply changes

3. **Save Your Work**
   - Click "Save" to download the modified PDF
   - Choose your desired export format if needed
   - The file will be saved to your downloads folder

### Common Tasks

#### Adding Text
1. Click the "Text" tool in the toolbar
2. Click on the PDF where you want to add text
3. Type your text
4. Click elsewhere to finish editing

#### Adding Annotations
1. Select the annotation tool (highlight, underline, etc.)
2. Click and drag to select the area or text
3. The annotation will be applied immediately

#### Merging PDFs
1. Click "File" → "Merge"
2. Select multiple PDF files
3. Arrange the order as needed
4. Click "Merge" to combine them

#### Splitting a PDF
1. Open the PDF you want to split
2. Click "File" → "Split"
3. Select the pages or page ranges to extract
4. Click "Split" to create separate documents

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+O` / `Cmd+O` | Open file |
| `Ctrl+S` / `Cmd+S` | Save file |
| `Ctrl+Z` / `Cmd+Z` | Undo |
| `Ctrl+Y` / `Cmd+Y` | Redo |
| `Ctrl+A` / `Cmd+A` | Select all |
| `Delete` | Delete selected content |
| `+` / `-` | Zoom in/out |
| `Ctrl+F` / `Cmd+F` | Find text |

## 🛠️ Development

### Project Structure
```
pdf-editor/
├── public/           # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── pages/       # Page components
│   ├── utils/       # Utility functions
│   ├── styles/      # CSS styles
│   └── App.js       # Main app component
├── package.json     # Dependencies
└── README.md        # This file
```

### Running Tests
```bash
npm test
# or
yarn test
```

### Code Style
This project uses ESLint and Prettier for code quality. Run:
```bash
npm run lint        # Check code style
npm run format      # Auto-format code
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Please ensure your code follows our style guidelines and includes appropriate tests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Support

For issues, questions, or suggestions:
- Open an [Issue](https://github.com/thesatyamjain/pdf-editor/issues) on GitHub
- Contact us through the project's discussions
- Check existing documentation for solutions

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- PDF processing powered by [PDF.js](https://mozilla.github.io/pdf.js/)
- UI components from [Material-UI](https://material-ui.com/)

---

**Made with ❤️ by [thesatyamjain](https://github.com/thesatyamjain)**
