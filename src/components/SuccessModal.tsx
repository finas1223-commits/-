import React, { useEffect } from 'react';
import { CheckCircle2, Phone, Sparkles, X, MessageSquare, Calendar } from 'lucide-react';
import { ApplicationFormData } from '../types';

interface SuccessModalProps {
  data: ApplicationFormData;
  onClose: () => void;
  isLargeText: boolean;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  data,
  onClose,
  isLargeText,
}) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const getExerciseTitle = (type: string) => {
    switch (type) {
      case 'senior':
        return '어르신 맞춤 운동 (의자 스트레칭 & 관절 순환)';
      case 'physical':
        return '신체 장애 재활 (상지 가동 & 기능 회복)';
      case 'cognitive':
        return '뇌 인지·심리운동 (치매 예방 & 두뇌 활력)';
      default:
        return '맞춤형 홈트레이닝';
    }
  };

  return (
    <div
      id="success-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-white w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-emerald-600 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-500"
          aria-label="닫기"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Celebration Header */}
        <div className="text-center pt-2 pb-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-emerald-100 border-4 border-emerald-600 text-emerald-700 flex items-center justify-center mb-4 shadow-md">
            <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 stroke-[2.3]" />
          </div>

          <div className="inline-flex items-center gap-1.5 bg-emerald-800 text-white text-xs sm:text-sm font-black px-3.5 py-1 rounded-full mb-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>신청 접수 완료</span>
          </div>

          <h3
            id="success-modal-title"
            className={`font-black text-gray-950 tracking-tight leading-tight ${
              isLargeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            }`}
          >
            무료 맞춤 운동 신청이
            <br />
            성공적으로 완료되었습니다!
          </h3>
          <p className="text-base sm:text-lg font-bold text-gray-600 mt-2">
            몸사랑과 함께 활기찬 일상을 시작해 보세요.
          </p>
        </div>

        {/* Application Summary Box */}
        <div className="bg-emerald-50/80 rounded-2xl p-5 border-2 border-emerald-200 my-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
            <span className="text-sm sm:text-base font-bold text-gray-600">신청자 성함</span>
            <span className="text-base sm:text-lg font-black text-emerald-950">
              {data.name} 님 ({data.relation === 'self' ? '본인' : '가족/보호자 대리'})
            </span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
            <span className="text-sm sm:text-base font-bold text-gray-600">안내 받으실 연락처</span>
            <span className="text-base sm:text-lg font-black text-emerald-950">
              {data.phone}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-sm sm:text-base font-bold text-gray-600">선택하신 운동 분야</span>
            <span className="text-base font-black text-emerald-900 bg-white px-2.5 py-1 rounded-lg border border-emerald-300">
              {getExerciseTitle(data.exerciseType)}
            </span>
          </div>
        </div>

        {/* Next Steps Guidance */}
        <div className="bg-[#FAFBF9] rounded-2xl p-4 border border-gray-200 space-y-2.5 text-left mb-6">
          <h4 className="font-black text-gray-900 text-base flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-emerald-700" />
            앞으로 이렇게 진행됩니다
          </h4>
          <ol className="list-decimal list-inside space-y-1.5 text-sm sm:text-base font-semibold text-gray-700">
            <li>
              <strong>24시간 이내 맞춤 영상 문자 전송:</strong> 남겨주신 연락처로 큰 화면에서 바로 볼 수 있는 무료 영상 링크가 발송됩니다.
            </li>
            <li>
              <strong>전담 운동처방사 1:1 상담:</strong> 어르신의 신체 상태나 관절 통증 여부에 맞춰 세부 난이도를 조절해 드립니다.
            </li>
          </ol>
        </div>

        {/* Quick Phone Hotline reminder */}
        <div className="text-center py-1 text-sm font-semibold text-gray-600 mb-5">
          궁금하신 점이 있으시면 언제든 
          <a href="tel:1588-7230" className="text-emerald-800 font-bold underline ml-1">
            <Phone className="w-3.5 h-3.5 inline mr-1" />
            1588-7230
          </a>
          으로 편안하게 전화 주세요.
        </div>

        {/* Confirmation Button */}
        <button
          type="button"
          id="btn-close-modal"
          onClick={onClose}
          className="w-full min-h-[58px] px-6 py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-black text-lg sm:text-xl shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-emerald-500 cursor-pointer"
        >
          확인 (창 닫기)
        </button>
      </div>
    </div>
  );
};
