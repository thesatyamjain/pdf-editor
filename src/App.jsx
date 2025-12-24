import React, { useState } from 'react';
import './App.css';

/**
 * Main application component for PDF Editor
 * Handles the overall layout and state management for the PDF editing application
 */
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  /**
   * Handle file upload
   * @param {Event} event - File input change event
   */
  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (file.type !== 'application/pdf') {
      setError('Please upload a valid PDF file.');
      return;
    }

    // Validate file size (e.g., max 50MB)
    const maxFileSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxFileSize) {
      setError('File size exceeds 50MB limit.');
      return;
    }

    setIsLoading(true);
    setError(null);

    // TODO: Implement PDF processing logic here
    console.log('File uploaded:', file.name);
    
    setIsLoading(false);
    setSuccessMessage(`Successfully loaded ${file.name}`);
  };

  /**
   * Clear error message
   */
  const clearError = () => setError(null);

  /**
   * Clear success message
   */
  const clearSuccess = () => setSuccessMessage('');

  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <h1>📄 PDF Editor</h1>
        <p className="subtitle">Edit, annotate, and manage your PDF files</p>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {/* Error Alert */}
        {error && (
          <div className="alert alert-error">
            <span>{error}</span>
            <button 
              className="alert-close" 
              onClick={clearError}
              aria-label="Close error message"
            >
              ×
            </button>
          </div>
        )}

        {/* Success Alert */}
        {successMessage && (
          <div className="alert alert-success">
            <span>{successMessage}</span>
            <button 
              className="alert-close" 
              onClick={clearSuccess}
              aria-label="Close success message"
            >
              ×
            </button>
          </div>
        )}

        {/* Upload Section */}
        <section className="upload-section">
          <div className="upload-container">
            <h2>Upload PDF</h2>
            <div className="upload-area">
              <input
                type="file"
                id="pdf-input"
                accept=".pdf"
                onChange={handleFileUpload}
                disabled={isLoading}
                aria-label="Upload PDF file"
              />
              <label htmlFor="pdf-input" className="upload-label">
                <div className="upload-icon">📤</div>
                <p>Click to upload or drag and drop</p>
                <span className="upload-hint">PDF files only (max 50MB)</span>
              </label>
            </div>
          </div>
        </section>

        {/* Loading State */}
        {isLoading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Processing PDF...</p>
          </div>
        )}

        {/* Editor Section - Placeholder for future implementation */}
        <section className="editor-section">
          <div className="editor-placeholder">
            <p>📋 PDF Editor workspace will appear here</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>&copy; 2025 PDF Editor. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
