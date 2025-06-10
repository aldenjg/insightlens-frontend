import { useState } from 'react';
import { Search, FileImage, Database } from 'lucide-react';

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions] = useState([
    'invoices with amounts over $500',
    'receipts from March 2024',
    'contracts containing "liability"',
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif' }}>
      {/* Header */}
      <div className="text-center mb-10 slide-in-up">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 rounded-2xl shadow-lg mr-4" style={{ 
            background: 'linear-gradient(135deg, #5E5CE6 0%, #4F46E5 100%)',
            boxShadow: '0 8px 32px rgba(94, 92, 230, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
          }}>
            <Search size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-white">Document Search</h2>
        </div>
        <p className="text-lg max-w-2xl mx-auto font-normal" style={{ color: '#EBEBF5' }}>
          Search through your processed images and extracted OCR data using advanced text matching and data field queries.
        </p>
      </div>

      {/* Search Form */}
      <div className="mb-8 slide-in-up stagger-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={20} style={{ color: '#8E8E93' }} />
          </div>
          <input
            type="text"
            placeholder="Search extracted text, dates, amounts, or specific data fields..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-32 py-4 text-base border rounded-xl text-white font-normal transition-all duration-200"
            style={{
              backgroundColor: '#2C2C2E',
              borderColor: '#48484A',
              '::placeholder': { color: '#8E8E93' }
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#5E5CE6';
              e.target.style.boxShadow = '0 0 0 2px rgba(94, 92, 230, 0.2)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#48484A';
              e.target.style.boxShadow = 'none';
            }}
          />
          <button
            className={`absolute right-2 top-2 bottom-2 px-6 rounded-lg font-semibold transition-all duration-200 text-sm ${
              !searchQuery.trim() || isSearching
                ? 'cursor-not-allowed'
                : 'hover:-translate-y-0.5 shadow-md'
            }`}
            style={{
              background: !searchQuery.trim() || isSearching 
                ? '#3A3A3C' 
                : 'linear-gradient(135deg, #5E5CE6 0%, #4F46E5 100%)',
              boxShadow: !searchQuery.trim() || isSearching 
                ? 'none'
                : '0 8px 32px rgba(94, 92, 230, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              color: !searchQuery.trim() || isSearching ? '#8E8E93' : 'white'
            }}
            onMouseEnter={(e) => {
              if (!(!searchQuery.trim() || isSearching)) {
                e.target.style.background = 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)';
              }
            }}
            onMouseLeave={(e) => {
              if (!(!searchQuery.trim() || isSearching)) {
                e.target.style.background = 'linear-gradient(135deg, #5E5CE6 0%, #4F46E5 100%)';
              }
            }}
          >
            {isSearching ? (
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                </div>
              </div>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </div>

      {/* Search Suggestions */}
      <div className="mb-8 slide-in-up stagger-3">
        <h3 className="text-sm font-semibold mb-3" style={{ color: '#EBEBF5' }}>Common search queries:</h3>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setSearchQuery(suggestion)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border"
              style={{
                backgroundColor: 'rgba(58, 58, 60, 0.7)',
                borderColor: '#48484A',
                color: '#EBEBF5'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(58, 58, 60, 0.9)';
                e.target.style.borderColor = '#636366';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(58, 58, 60, 0.7)';
                e.target.style.borderColor = '#48484A';
                e.target.style.color = '#EBEBF5';
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Search Features */}
      <div className="grid md:grid-cols-2 gap-6 slide-in-up stagger-4">
        {[
          {
            icon: <FileImage size={22} />,
            title: 'OCR Text Search',
            description: 'Search through all extracted text content from your processed images and scanned documents.',
            features: ['Full-text extraction', 'Multi-language support', 'Handwriting recognition']
          },
          {
            icon: <Database size={22} />,
            title: 'Structured Data Queries',
            description: 'Query specific data fields like dates, amounts, invoice numbers, and custom extracted entities.',
            features: ['Date range filters', 'Numeric comparisons', 'Field-specific search']
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
            <div className="mb-4" style={{ color: '#5E5CE6' }}>{feature.icon}</div>
            <h4 className="font-semibold text-white mb-2 text-base">{feature.title}</h4>
            <p className="mb-4 text-sm leading-relaxed" style={{ color: '#EBEBF5' }}>{feature.description}</p>
            <ul className="space-y-1">
              {feature.features.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm" style={{ color: '#8E8E93' }}>
                  <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#5E5CE6' }}></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}