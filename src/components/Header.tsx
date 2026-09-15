import React from 'react';
import { Heart, Phone, ArrowDown, ZoomIn } from 'lucide-react';

interface HeaderProps {
  isLargeText: boolean;
  onToggleLargeText: () => void;
  onScrollToForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isLargeText,
  onToggleLargeText,
  onScrollToForm,
}) => {
  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b-2 border-emerald-900/15 shadow-sm transition-all"
    >
      {/* Quick accessibility top banner */}
      <div className="bg-emerald-900 text-white px-4 py-2 text-center text-sm sm:text-base font-medium flex items-center justify-center gap-2">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>전화 신청이 더 편하신가요? 상담센터 </span>
        <a
          href="tel:1588-7230"
          className="font-bold underline decoration-amber-300 underline-offset-4 hover:text-amber-200 ml-1 inline-flex items-center gap-1"
        >
          <Phone className="w-4 h-4 inline" />
          1588-7230
        </a>
        <span className="hidden sm:inline text-emerald-200">(평일 09시~18시)</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <a
          href="#"
          id="brand-logo-link"
          className="flex items-center gap-2.5 focus:outline-none focus:ring-4 focus:ring-emerald-500 rounded-lg p-1"
          aria-label="몸사랑 홈으로 이동"
        >
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-900/20">
            <Heart className="w-6 h-6 sm:w-7 sm:h-7 fill-emerald-200 text-white stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-emerald-950 flex items-center gap-1.5">
              몸사랑
              <span className="text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                홈트레이닝
              </span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-600">
              어르신·장애인 맞춤 심리운동
            </span>
          </div>
        </a>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Font Size Accessibility Switch */}
          <button
            id="btn-toggle-font-size"
            type="button"
            onClick={onToggleLargeText}
            className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl font-bold border-2 transition-colors flex items-center gap-1.5 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-emerald-500 ${
              isLargeText
                ? 'bg-amber-100 border-amber-600 text-amber-950'
                : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200'
            }`}
            title="글씨 크기 확대/축소"
            aria-label={isLargeText ? '보통 글씨로 변경' : '큰 글씨 모드로 확대'}
          >
            <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-800" />
            <span className="hidden xs:inline">글씨:</span>
            <span className="font-extrabold">{isLargeText ? '큰글씨 (켜짐)' : '보통'}</span>
          </button>

          {/* Sticky Header CTA Button */}
          <button
            id="btn-header-apply"
            type="button"
            onClick={onScrollToForm}
            className="min-h-[48px] sm:min-h-[52px] px-4 sm:px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-extrabold text-base sm:text-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-emerald-500"
          >
            <span>무료 체험 신청</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
