import { FileStack } from 'lucide-react';

export default function Header() {
  return (
    <header className="mb-8 mt-12">
      <div className="flex items-center justify-center slide-in-up">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" style={{ 
              background: 'linear-gradient(135deg, #5E5CE6 0%, #4F46E5 100%)',
              boxShadow: '0 8px 32px rgba(94, 92, 230, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
            }}>
              <FileStack size={32} className="text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              InsightLens
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}