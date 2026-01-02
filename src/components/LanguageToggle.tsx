'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300 text-sm font-medium"
      aria-label="Toggle language"
    >
      <Globe size={18} className="text-blue-400" />
      <span className="hidden sm:inline">{language === 'en' ? 'ID' : 'EN'}</span>
      <span className="sm:hidden">{language === 'en' ? '🇮🇩' : '🇬🇧'}</span>
    </button>
  );
}
