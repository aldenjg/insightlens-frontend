import { useState } from "react";
import { FileStack, Cloud, Database } from 'lucide-react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import UploadForm from './components/UploadForm';
import SearchBox from './components/SearchBox';
import ResultsList from './components/ResultsList';

export default function App() {
  const [view, setView] = useState("upload");
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1C1C1E', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif' }}>
      <div className="container mx-auto px-6 pt-8 pb-12 max-w-7xl">
        {/* Header */}
        <Header />
        
        {/* Navigation */}
        <Navigation view={view} setView={setView} />
        
        {/* Main Content */}
        <main>
          <div 
            className="rounded-2xl shadow-2xl border overflow-hidden transition-shadow duration-300 slide-in-up stagger-3"
            style={{ 
              backgroundColor: 'rgba(44, 44, 46, 0.3)', 
              borderColor: 'rgba(72, 72, 74, 0.5)',
              backdropFilter: 'blur(20px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';
            }}
          >
            <div className="p-8 md:p-12">
              {view === "upload" && <UploadForm />}
              
              {view === "search" && (
                <div>
                  <SearchBox />
                  <ResultsList results={results} />
                </div>
              )}
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="mt-16 text-center slide-in-up stagger-4">
          <div 
            className="rounded-xl p-6 border shadow-sm"
            style={{ 
              backgroundColor: 'rgba(44, 44, 46, 0.3)', 
              borderColor: 'rgba(72, 72, 74, 0.5)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="flex items-center justify-center gap-2" style={{ color: '#8E8E93' }}>
              <Database size={16} />
              <p className="font-semibold">Automated Document Workflows • Full-Text Search • API-Ready</p>
              <Database size={16} />
            </div>
            <div className="mt-2 text-sm font-medium" style={{ color: '#636366' }}>
            Secure • Scalable • Automated
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}