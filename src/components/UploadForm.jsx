import { useState, useEffect } from 'react';
import { Upload, Eye, File, Cloud, FileText, CheckCircle, Shield, Database, TextSearch, Workflow, CloudUpload, FileUp } from 'lucide-react';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null); // 'uploading', 'success', 'error'
  const [isFileJustSelected, setIsFileJustSelected] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setIsFileJustSelected(true);
      setTimeout(() => setIsFileJustSelected(false), 750); // Reset after 1 second
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setIsFileJustSelected(true);
      setTimeout(() => setIsFileJustSelected(false), 750); // Reset after 1 second
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;
    
    setUploadStatus('uploading');
    
    // Simulate upload process
    setTimeout(() => {
      setUploadStatus('success');
      setTimeout(() => setUploadStatus(null), 3000);
    }, 2000);
    
    console.log('File to upload:', file);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="w-full max-w-4xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <div className="text-center mb-10 slide-in-up">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 rounded-2xl shadow-lg mr-4" style={{ 
            background: 'linear-gradient(135deg, #5E5CE6 0%, #4F46E5 100%)',
            boxShadow: '0 8px 32px rgba(94, 92, 230, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
          }}>
            <CloudUpload size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-white">Document Upload</h2>
        </div>
        <p className="text-lg max-w-2xl mx-auto font-normal" style={{ color: '#EBEBF5' }}>
          Upload your images and scanned documents for professional OCR processing. We support JPEG, PNG, TIFF, and PDF files up to 25MB.
        </p>
      </div>

      {/* Main Upload Area */}
      <div className="space-y-8">
        {/* Drag and Drop Zone */}
        <div 
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
            isDragOver 
              ? 'bg-opacity-10' 
              : isFileJustSelected 
                ? 'bg-opacity-10' 
                : 'hover:bg-opacity-5'
          }`}
          style={{
            borderColor: isDragOver ? '#5E5CE6' : isFileJustSelected ? '#30D158' : '#48484A',
            backgroundColor: isDragOver ? '#5E5CE6' : isFileJustSelected ? '#30D158' : 'transparent'
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div className="space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
              <div 
                className="p-6 rounded-2xl transition-colors duration-300"
                style={{ 
                  background: file 
                    ? 'linear-gradient(135deg, #30D158 0%, #28CD41 100%)' 
                    : 'linear-gradient(135deg, #5E5CE6 0%, #4F46E5 100%)',
                  boxShadow: file 
                    ? '0 8px 32px rgba(48, 209, 88, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    : '0 8px 32px rgba(94, 92, 230, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {file ? (
                  <CheckCircle size={48} className="text-white" />
                ) : (
                  <FileUp size={48} className="text-white" />
                )}
              </div>
            </div>

            {/* Text Content */}
            <div>
              {file ? (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">File Selected</h3>
                  <div className="rounded-xl p-4 border max-w-md mx-auto" style={{ backgroundColor: '#2C2C2E', borderColor: '#48484A' }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText size={20} style={{ color: '#5E5CE6' }} />
                        <div className="text-left">
                          <p className="font-medium text-white truncate max-w-48">{file.name}</p>
                          <p className="text-sm" style={{ color: '#8E8E93' }}>{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFile(null)}
                        className="transition-colors"
                        style={{ color: '#8E8E93' }}
                        onMouseEnter={(e) => e.target.style.color = '#FF453A'}
                        onMouseLeave={(e) => e.target.style.color = '#8E8E93'}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    {isDragOver ? 'Drop your file here' : 'Drag & drop your file here'}
                  </h3>
                  <p style={{ color: '#8E8E93' }}>or click to browse files</p>
                </div>
              )}
            </div>

            {/* Hidden File Input */}
            <input
              type="file"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.tiff,.tif,.pdf"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* File Type Support */}
        <div className="rounded-xl p-6 border slide-in-up stagger-2" style={{ backgroundColor: 'rgba(44, 44, 46, 0.7)', borderColor: '#48484A', backdropFilter: 'blur(10px)' }}>
          <h4 className="font-semibold text-white mb-4 flex items-center text-base">
            <File size={18} style={{ color: '#5E5CE6' }} className="mr-2" />
            Supported File Formats
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { type: 'JPEG/JPG', desc: 'High quality images'},
              { type: 'PNG', desc: 'Lossless compression'},
              { type: 'TIFF', desc: 'Professional scans'},
              { type: 'PDF', desc: 'Scanned documents'}
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center p-3 rounded-lg transition-colors border cursor-pointer"
                style={{ 
                  backgroundColor: 'rgba(58, 58, 60, 0.5)', 
                  borderColor: '#48484A',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(58, 58, 60, 0.8)';
                  e.currentTarget.style.borderColor = '#636366';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(58, 58, 60, 0.5)';
                  e.currentTarget.style.borderColor = '#48484A';
                }}
              >
                <div className="text-lg mb-2">{item.icon}</div>
                <div className="font-semibold text-white text-xs">{item.type}</div>
                <div className="text-xs mt-1" style={{ color: '#8E8E93' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Processing Features */}
        <div className="grid md:grid-cols-3 gap-6 slide-in-up stagger-3">
          {[
            {
              icon: <Workflow size={22} />,
              title: 'Automated Document Processing',
              description: 'Event-driven pipeline instantly processes uploaded documents using AWS Textract, cutting manual review time by over 80%'
            },
            {
              icon: <Cloud size={22} />,
              title: 'Scalable Cloud Infrastructure',
              description: 'Cloud-native architecture powered by AWS Lambda, S3, and DynamoDB scales automatically to handle thousands of documents in parallel'
            },
            {
              icon: <TextSearch size={22} />,
              title: 'Real-Time Search & Retrieval',
              description: 'Search extracted content instantly with full-text indexing and sub-second response times, powered by DynamoDB Streams and Lambda'
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="rounded-xl p-6 border hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{ 
                backgroundColor: 'rgba(44, 44, 46, 0.7)', 
                borderColor: '#48484A',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(44, 44, 46, 0.9)';
                e.currentTarget.style.borderColor = '#636366';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(44, 44, 46, 0.7)';
                e.currentTarget.style.borderColor = '#48484A';
              }}
            >
              <div className="mb-3" style={{ color: '#5E5CE6' }}>{feature.icon}</div>
              <h4 className="font-semibold text-white mb-2 text-base">{feature.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#EBEBF5' }}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Upload Button */}
        <div className="text-center slide-in-up stagger-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!file || uploadStatus === 'uploading'}
            className={`px-10 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
              !file || uploadStatus === 'uploading'
                ? 'cursor-not-allowed'
                : 'hover:-translate-y-1 shadow-lg hover:shadow-xl'
            }`}
            style={{
              background: !file || uploadStatus === 'uploading' 
                ? '#3A3A3C' 
                : uploadStatus === 'success'
                  ? 'linear-gradient(135deg, #30D158 0%, #28CD41 100%)'
                  : 'linear-gradient(135deg, #5E5CE6 0%, #4F46E5 100%)',
              boxShadow: !file || uploadStatus === 'uploading' 
                ? 'none'
                : uploadStatus === 'success'
                  ? '0 8px 32px rgba(48, 209, 88, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  : '0 8px 32px rgba(94, 92, 230, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              color: !file || uploadStatus === 'uploading' ? '#8E8E93' : 'white'
            }}
            onMouseEnter={(e) => {
              if (!(!file || uploadStatus === 'uploading')) {
                if (uploadStatus === 'success') {
                  e.target.style.background = 'linear-gradient(135deg, #28CD41 0%, #20B932 100%)';
                } else {
                  e.target.style.background = 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)';
                }
              }
            }}
            onMouseLeave={(e) => {
              if (!(!file || uploadStatus === 'uploading')) {
                if (uploadStatus === 'success') {
                  e.target.style.background = 'linear-gradient(135deg, #30D158 0%, #28CD41 100%)';
                } else {
                  e.target.style.background = 'linear-gradient(135deg, #5E5CE6 0%, #4F46E5 100%)';
                }
              }
            }}
          >
            {uploadStatus === 'uploading' ? (
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                </div>
                <span>Processing Image...</span>
              </div>
            ) : uploadStatus === 'success' ? (
              <div className="flex items-center space-x-2">
                <CheckCircle size={18} />
                <span>Processing Complete</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Upload size={18} />
                <span>Process Image</span>
              </div>
            )}
          </button>

          {uploadStatus === 'success' && (
            <div className="mt-4 p-4 rounded-xl animate-fade-in" style={{ backgroundColor: 'rgba(48, 209, 88, 0.1)', border: '1px solid rgba(48, 209, 88, 0.3)' }}>
              <div className="flex items-center justify-center space-x-2" style={{ color: '#30D158' }}>
                <CheckCircle size={18} />
                <span className="font-medium text-sm">Image processed successfully! OCR data extraction complete.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}