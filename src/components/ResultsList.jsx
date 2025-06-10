import { Search, FileImage, Clock, Download } from 'lucide-react';

export default function ResultsList({ results = [] }) {
  if (results.length === 0) {
    return (
      <div className="text-center py-12 slide-in-up" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif' }}>
        <div className="rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(58, 58, 60, 0.7)' }}>
          <Search size={32} style={{ color: '#8E8E93' }} />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">No results found</h3>
        <p style={{ color: '#8E8E93' }}>Try adjusting your search terms or upload some images to get started.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 slide-in-up" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Search Results</h3>
        <span className="text-sm px-3 py-1 rounded-full" style={{ color: '#8E8E93', backgroundColor: 'rgba(58, 58, 60, 0.7)' }}>
          {results.length} result{results.length !== 1 ? 's' : ''}
        </span>
      </div>
      
      <div className="space-y-4">
        {results.map((result, index) => (
          <div
            key={index}
            className={`border rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer slide-in-up stagger-${Math.min(index + 1, 4)}`}
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
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <FileImage size={18} style={{ color: '#5E5CE6' }} />
                  <h4 className="font-semibold text-white text-base">{result.title}</h4>
                </div>
                <p className="mb-3" style={{ color: '#EBEBF5' }}>{result.description}</p>
                <div className="flex items-center space-x-4 text-sm" style={{ color: '#8E8E93' }}>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>2 days ago</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FileImage size={14} />
                    <span>Image Document</span>
                  </div>
                </div>
              </div>
              <button 
                className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                style={{ 
                  background: 'rgba(94, 92, 230, 0.2)', 
                  color: '#5E5CE6',
                  border: '1px solid rgba(94, 92, 230, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(94, 92, 230, 0.3)';
                  e.target.style.borderColor = 'rgba(94, 92, 230, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(94, 92, 230, 0.2)';
                  e.target.style.borderColor = 'rgba(94, 92, 230, 0.3)';
                }}
              >
                <Download size={16} />
                <span>View</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}