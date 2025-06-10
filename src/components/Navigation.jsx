import { Upload, Search } from 'lucide-react';

export default function Navigation({ view, setView }) {
    return (
      <div className="flex justify-center slide-in-up stagger-2 mb-12">
        <div className="flex gap-1 p-1 rounded-xl border shadow-sm" style={{ backgroundColor: 'rgba(44, 44, 46, 0.8)', borderColor: '#48484A', backdropFilter: 'blur(10px)' }}>
          <button 
            onClick={() => setView("upload")}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 font-semibold text-sm transition-all duration-200`}
            style={{
              background: view === "upload" 
                ? 'linear-gradient(135deg, #5E5CE6 0%, #4F46E5 100%)' 
                : 'transparent',
              boxShadow: view === "upload" 
                ? '0 4px 16px rgba(94, 92, 230, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
                : 'none',
              color: view === "upload" ? 'white' : '#8E8E93'
            }}
            onMouseEnter={(e) => {
              if (view !== "upload") {
                e.target.style.background = 'rgba(58, 58, 60, 0.7)';
                e.target.style.color = '#EBEBF5';
              } else {
                e.target.style.background = 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)';
              }
            }}
            onMouseLeave={(e) => {
              if (view !== "upload") {
                e.target.style.background = 'transparent';
                e.target.style.color = '#8E8E93';
              } else {
                e.target.style.background = 'linear-gradient(135deg, #5E5CE6 0%, #4F46E5 100%)';
              }
            }}
          >
            <Upload size={18} />
            <span className="hidden sm:inline">Upload Images</span>
            <span className="sm:hidden">Upload</span>
          </button>
          
          <button 
            onClick={() => setView("search")}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 font-semibold text-sm transition-all duration-200`}
            style={{
              background: view === "search" 
                ? 'linear-gradient(135deg, #5E5CE6 0%, #4F46E5 100%)' 
                : 'transparent',
              boxShadow: view === "search" 
                ? '0 4px 16px rgba(94, 92, 230, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
                : 'none',
              color: view === "search" ? 'white' : '#8E8E93'
            }}
            onMouseEnter={(e) => {
              if (view !== "search") {
                e.target.style.background = 'rgba(58, 58, 60, 0.7)';
                e.target.style.color = '#EBEBF5';
              } else {
                e.target.style.background = 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)';
              }
            }}
            onMouseLeave={(e) => {
              if (view !== "search") {
                e.target.style.background = 'transparent';
                e.target.style.color = '#8E8E93';
              } else {
                e.target.style.background = 'linear-gradient(135deg, #5E5CE6 0%, #4F46E5 100%)';
              }
            }}
          >
            <Search size={18} />
            <span className="hidden sm:inline">Search OCR Data</span>
            <span className="sm:hidden">Search</span>
          </button>
        </div>
      </div>
    );
  }