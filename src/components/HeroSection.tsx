import React from 'react';
import { Play, Sparkles, CheckCircle2, ShieldCheck, Tv, ArrowRight, UserCheck } from 'lucide-react';

interface HeroSectionProps {
  isLargeText: boolean;
  onScrollToForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isLargeText,
  onScrollToForm,
}) => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-[#F3F9F5] to-[#FAFBF9] pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-emerald-900/10"
    >
      {/* Decorative gentle background circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Trust pill */}
        <div className="inline-flex items-center gap-2 bg-emerald-800 text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>보건복지 가이드라인 준수 · 100% 무료 맞춤 체험</span>
        </div>

        {/* Main Headline */}
        <h1
          className={`font-black text-gray-900 tracking-tight leading-[1.25] sm:leading-[1.2] mb-6 ${
            isLargeText
              ? 'text-3xl sm:text-5xl md:text-6xl'
              : 'text-2xl sm:text-4xl md:text-5xl'
          }`}
        >
          집에서 <span className="text-emerald-800 underline decoration-amber-400 decoration-wavy underline-offset-8">TV와 컴퓨터로</span> 쉽게 따라 하는
          <br className="hidden sm:inline" />
          {' '}어르신·장애인 맞춤 홈트
        </h1>

        {/* Sub Headline */}
        <p
          className={`font-semibold text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed ${
            isLargeText ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
          }`}
        >
          관절 부담 없이, 의자에 앉아서 즐겁게 움직이세요.
          <br />
          복잡한 동작은 빼고, <strong className="text-emerald-900 font-extrabold">안전과 뇌 활력</strong>에 꼭 필요한 동작만 담았습니다.
        </p>

        {/* 1-CLICK PRIMARY CTA BUTTON */}
        <div className="max-w-xl mx-auto mb-10">
          <button
            id="btn-hero-primary-cta"
            type="button"
            onClick={onScrollToForm}
            className="w-full min-h-[68px] sm:min-h-[76px] px-6 py-4 rounded-2xl bg-[#E65100] hover:bg-[#D84315] active:bg-[#BF360C] text-white font-black text-xl sm:text-2xl tracking-tight shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 border-4 border-amber-300 focus:outline-none focus:ring-8 focus:ring-amber-500/50 cursor-pointer"
            aria-label="30초 만에 무료 맞춤 운동 신청하기 (클릭 시 신청 양식으로 이동)"
          >
            <div className="flex items-center gap-3">
              <span className="bg-white/20 p-2 rounded-xl">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white" />
              </span>
              <span>30초 만에 무료 맞춤 운동 신청하기</span>
            </div>
            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 hidden sm:inline-block animate-bounce-x" />
          </button>
          <p className="mt-3 text-sm sm:text-base font-semibold text-gray-600 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>클릭 즉시 아래 신청 양식으로 부드럽게 이동합니다 (가입비 0원)</span>
          </p>
        </div>

        {/* Interactive Senior Exercise Visual Demonstration Mockup */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border-3 border-emerald-900/20 shadow-xl overflow-hidden text-left mb-12">
          {/* Top Bar resembling TV / Smart Screen */}
          <div className="bg-emerald-900 text-white px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tv className="w-5 h-5 text-amber-300" />
              <span className="font-bold text-sm sm:text-base">큰 화면 맞춤 운동 플레이어 화면</span>
            </div>
            <span className="bg-emerald-800 text-xs sm:text-sm font-semibold px-2.5 py-1 rounded-md text-emerald-100">
              안전 모드 적용 중
            </span>
          </div>

          {/* Screen Content */}
          <div className="p-5 sm:p-7 bg-[#FBFDFB]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Graphic Simulation of Chair Workout */}
              <div className="md:col-span-6 bg-gradient-to-br from-emerald-100 to-amber-50 rounded-2xl p-6 border-2 border-emerald-300/60 flex flex-col items-center justify-center text-center relative">
                <div className="w-20 h-20 rounded-full bg-emerald-700 text-white flex items-center justify-center mb-3 shadow-md">
                  <UserCheck className="w-10 h-10" />
                </div>
                <div className="bg-white/95 px-3 py-1.5 rounded-lg text-emerald-950 font-bold text-sm border border-emerald-200 mb-2">
                  1단계: 의자 어깨 순환 운동
                </div>
                <p className="text-gray-800 font-extrabold text-base sm:text-lg leading-snug">
                  "숨을 깊이 들이쉬며
                  <br />
                  양팔을 천천히 위로 들어올립니다"
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-emerald-900 bg-emerald-200/70 px-3 py-1 rounded-full">
                  <span>속도: 천천히 0.7배속</span>
                  <span>•</span>
                  <span>음성 안내 동시 출력</span>
                </div>
              </div>

              {/* High Contrast Subtitles & Feature Callouts */}
              <div className="md:col-span-6 space-y-4">
                <div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4">
                  <div className="text-xs font-black text-amber-900 uppercase tracking-wider mb-1">
                    어르신 전용 초대형 자막 시스템
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-gray-950 leading-tight">
                    "의자 등받이에 편안히 기대세요"
                  </div>
                  <p className="text-sm font-semibold text-gray-700 mt-1">
                    돋보기 없이도 거실 TV에서 또렷하게 읽히는 고대비 폰트
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-3 border-2 border-gray-200">
                    <span className="block text-xs font-bold text-gray-500">관절 부담도</span>
                    <span className="text-lg font-black text-emerald-700">0% (무충격)</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 border-2 border-gray-200">
                    <span className="block text-xs font-bold text-gray-500">낙상 위험</span>
                    <span className="text-lg font-black text-emerald-700">안전 의자 착석</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Trust Elements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="bg-white p-5 rounded-2xl border-2 border-emerald-800/20 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-gray-900">가입비 없는 무료 체험</h3>
              <p className="text-sm sm:text-base font-semibold text-gray-600">
                체험 후 자동 결제 없이 100% 안심하고 이용하세요.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border-2 border-emerald-800/20 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-gray-900">물리치료사 직접 검수</h3>
              <p className="text-sm sm:text-base font-semibold text-gray-600">
                시니어 및 장애인 전문 재활 운동 처방 연구진 개발.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border-2 border-emerald-800/20 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Tv className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-gray-900">TV·스마트폰·컴퓨터 연동</h3>
              <p className="text-sm sm:text-base font-semibold text-gray-600">
                큰 화면으로 가족 모두가 함께 쉽게 시작할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
