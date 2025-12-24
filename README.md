# PDF Editor

A comprehensive, full-featured PDF editor built with modern web technologies, enabling seamless document manipulation and editing capabilities.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Document Management
- ✅ **Open & Load PDFs** - Load PDF files from your system or URLs
- ✅ **Save Documents** - Export edited PDFs to your device
- ✅ **Print Support** - Print edited PDFs directly from the editor

### Text Editing
- ✅ **Add Text** - Insert text annotations at any location on the page
- ✅ **Text Formatting** - Control font size, color, and style
- ✅ **Text Deletion** - Remove unwanted text elements
- ✅ **Text Editing** - Modify existing text content and properties

### Drawing & Markup Tools
- ✅ **Freehand Drawing** - Draw shapes and annotations with a brush tool
- ✅ **Line Drawing** - Create precise straight lines
- ✅ **Rectangle Tool** - Draw rectangular shapes
- ✅ **Circle/Ellipse Tool** - Draw circular and elliptical shapes
- ✅ **Highlighting** - Highlight important sections of text
- ✅ **Color Selection** - Choose from a palette of colors for all drawing tools
- ✅ **Stroke Width Control** - Adjust brush/line thickness

### Page Management
- ✅ **Page Navigation** - Move between pages with ease
- ✅ **Zoom In/Out** - Adjust zoom level for better visibility
- ✅ **Fit to Page** - Auto-fit PDF to window size
- ✅ **Page Rotation** - Rotate pages for proper viewing orientation

### Advanced Features
- ✅ **Undo/Redo** - Revert or reapply changes
- ✅ **Keyboard Shortcuts** - Quick access to common operations
- ✅ **Dark Mode** - Eye-friendly dark theme support
- ✅ **Responsive Design** - Works seamlessly on different screen sizes

---

## Tech Stack

### Frontend
- **React** - UI library for building dynamic components
- **TypeScript** - Type-safe JavaScript for better code quality
- **Canvas API** - For drawing and rendering PDF annotations
- **PDF.js** - Mozilla's PDF rendering library for document handling
- **Tailwind CSS** - Utility-first CSS framework for styling

### State Management
- **Redux Toolkit** / **Context API** - Efficient state management

### Build Tools
- **Vite** - Lightning-fast build tool and dev server
- **Webpack** - Module bundler for production builds

### Testing
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities

### Additional Libraries
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Zustand** / **Jotai** - Lightweight state management alternatives

---

## Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or **yarn** (v3 or higher)

### Clone the Repository

```bash
git clone https://github.com/thesatyamjain/pdf-editor.git
cd pdf-editor
```

### Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:3000
REACT_APP_PDF_WORKER_URL=/pdf.worker.min.js
REACT_APP_ENV=development
```

### Build the Project

```bash
npm run build
```

Or with yarn:
```bash
yarn build
```

---

## Usage

### Starting the Development Server

```bash
npm start
```

Or with yarn:
```bash
yarn start
```

The application will open at `http://localhost:3000` in your default browser.

### Basic Workflow

#### 1. **Opening a PDF**
   - Click the "Open PDF" button or drag and drop a PDF file
   - Select a file from your system
   - The PDF will load and display the first page

#### 2. **Navigation**
   - Use the page navigation controls at the bottom to move between pages
   - Display current page number and total page count
   - Jump to a specific page using the page input field

#### 3. **Zoom Controls**
   - Click the zoom in/out buttons to adjust the view
   - Use the zoom percentage dropdown for preset zoom levels
   - "Fit to Page" button automatically adjusts zoom to fit the window

#### 4. **Drawing Tools**

   **Freehand Brush:**
   - Select the brush tool from the toolbar
   - Click and drag on the PDF to draw freely
   - Adjust color and stroke width as needed

   **Line Tool:**
   - Click the line tool icon
   - Click to set the start point
   - Click again to set the end point

   **Rectangle/Shape Tools:**
   - Select the desired shape tool
   - Click and drag to create the shape
   - Release to finalize the shape

#### 5. **Text Annotations**
   - Click the "Add Text" button
   - Click on the PDF where you want to insert text
   - Type your text in the popup dialog
   - Adjust font size and color as needed
   - Click "Done" to place the text

#### 6. **Highlighting**
   - Select the highlight tool
   - Click and drag to highlight text or areas
   - Choose highlight color from the palette

#### 7. **Editing Existing Elements**
   - Double-click on text to edit its content
   - Drag elements to reposition them
   - Use the color picker to change element colors
   - Right-click for delete and other options

#### 8. **Saving Your Work**
   - Click the "Download PDF" button
   - The edited PDF will be saved to your downloads folder
   - Original file remains unchanged

#### 9. **Printing**
   - Click the "Print" button
   - Configure print settings in the print dialog
   - Print to physical printer or save as PDF

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + Z` / `Cmd + Z` | Undo |
| `Ctrl + Y` / `Cmd + Y` | Redo |
| `Ctrl + S` / `Cmd + S` | Save PDF |
| `Ctrl + P` / `Cmd + P` | Print |
| `Ctrl + O` / `Cmd + O` | Open PDF |
| `+` | Zoom In |
| `-` | Zoom Out |
| `0` | Reset Zoom |
| `→` | Next Page |
| `←` | Previous Page |

---

## Configuration

### Customizing Toolbar

Edit the toolbar configuration in `src/config/toolbar.config.ts`:

```typescript
export const TOOLBAR_CONFIG = {
  tools: [
    'open',
    'save',
    'print',
    'separator',
    'undo',
    'redo',
    'separator',
    'brush',
    'line',
    'rectangle',
    'circle',
    'highlight',
    'text',
    'separator',
    'zoomIn',
    'zoomOut',
    'fitPage',
  ],
};
```

### Adjusting Canvas Settings

Modify `src/config/canvas.config.ts` for drawing properties:

```typescript
export const CANVAS_CONFIG = {
  defaultColor: '#000000',
  defaultStrokeWidth: 2,
  defaultFontSize: 14,
  minZoom: 50,
  maxZoom: 400,
};
```

---

## Project Structure

```
pdf-editor/
├── public/
│   ├── index.html
│   └── pdf.worker.min.js
├── src/
│   ├── components/
│   │   ├── Toolbar.tsx
│   │   ├── Canvas.tsx
│   │   ├── PageNavigator.tsx
│   │   └── ...
│   ├── pages/
│   │   └── Editor.tsx
│   ├── store/
│   │   ├── editorStore.ts
│   │   └── ...
│   ├── utils/
│   │   ├── pdfUtils.ts
│   │   ├── canvasUtils.ts
│   │   └── ...
│   ├── types/
│   │   └── index.ts
│   ├── config/
│   │   ├── toolbar.config.ts
│   │   └── canvas.config.ts
│   ├── App.tsx
│   └── main.tsx
├── tests/
│   ├── components/
│   └── utils/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## API Endpoints (if applicable)

If your PDF editor includes backend functionality:

### Upload PDF
```
POST /api/pdf/upload
Content-Type: multipart/form-data

Response:
{
  "id": "pdf_123",
  "filename": "document.pdf",
  "url": "/pdf/123",
  "uploadedAt": "2025-12-24T11:12:22Z"
}
```

### Save Annotations
```
POST /api/pdf/:id/annotations
Content-Type: application/json

Body:
{
  "annotations": [...]
}

Response:
{
  "success": true,
  "message": "Annotations saved"
}
```

---

## Development

### Running Tests

```bash
npm run test
```

### Code Linting

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

### Build for Production

```bash
npm run build
```

---

## Performance Tips

- **Lazy Load PDFs**: Load large PDFs page by page
- **Optimize Images**: Compress images before adding to PDFs
- **Cache Renderings**: Store rendered pages in memory
- **Debounce Events**: Debounce zoom and scroll events
- **Use Web Workers**: Offload heavy computations to workers

---

## Troubleshooting

### PDF Won't Load
- Ensure the PDF file is not corrupted
- Check browser console for error messages
- Verify CORS settings if loading from external URLs

### Performance Issues
- Reduce the PDF file size
- Lower the zoom level
- Close other browser tabs
- Clear browser cache

### Annotations Not Saving
- Check network connection
- Verify API endpoint configuration
- Ensure proper permissions are set

---

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

---

## Contributing

We welcome contributions! Here's how to get started:

1. **Fork the Repository** - Click the "Fork" button
2. **Create a Branch** - `git checkout -b feature/your-feature`
3. **Make Changes** - Implement your feature
4. **Commit Changes** - `git commit -m "Add your feature"`
5. **Push to Branch** - `git push origin feature/your-feature`
6. **Open a Pull Request** - Submit your PR for review

### Code Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact & Support

- **Author**: [Satyam Jain](https://github.com/thesatyamjain)
- **Issues**: [GitHub Issues](https://github.com/thesatyamjain/pdf-editor/issues)
- **Discussions**: [GitHub Discussions](https://github.com/thesatyamjain/pdf-editor/discussions)

---

## Acknowledgments

- [Mozilla PDF.js](https://mozilla.github.io/pdf.js/) - For PDF rendering
- [React](https://react.dev/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- All contributors and users who have helped improve this project

---

## Changelog

### Version 1.0.0 (2025-12-24)
- Initial release with full PDF editing capabilities
- All drawing tools implemented
- Text annotation support
- Page navigation and zoom controls
- Save and print functionality

---

**Happy Editing! 🎉**
