import React, { useState } from 'react';
import {
  CheckCircle2,
  User,
  Phone,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  Send,
  HeartHandshake
} from 'lucide-react';
import { ApplicationFormData, ExerciseType, ApplicantRelation } from '../types';

interface FormSectionProps {
  isLargeText: boolean;
  onSubmitSuccess: (data: ApplicationFormData) => void;
}

export const FormSection: React.FC<FormSectionProps> = ({
  isLargeText,
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    phone: '',
    exerciseType: 'senior',
    relation: 'self',
    memo: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Phone number auto-formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    let formatted = rawValue;

    if (rawValue.length > 3 && rawValue.length <= 7) {
      formatted = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
    } else if (rawValue.length > 7) {
      formatted = `${rawValue.slice(0, 3)}-${rawValue.slice(3, 7)}-${rawValue.slice(7, 11)}`;
    }

    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, name: e.target.value }));
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = '성함을 입력해 주세요.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = '성함을 2글자 이상 정확히 입력해 주세요.';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      newErrors.phone = '연락처(휴대폰 번호)를 입력해 주세요.';
    } else if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      newErrors.phone = '연락처 번호를 10~11자리로 올바르게 입력해 주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      // Focus the first invalid element
      const firstError = Object.keys(errors)[0] || 'name';
      const el = document.getElementById(`input-${firstError}`);
      el?.focus();
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess(formData);
    }, 400);
  };

  return (
    <section
      id="apply-form"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#FAFBF9] via-emerald-50/60 to-[#F2F7F4] relative scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Form Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1.5 rounded-full font-black text-sm sm:text-base mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>2단계: 간단 30초 맞춤 신청 (3클릭 완성)</span>
          </div>
          <h2
            className={`font-black text-gray-950 tracking-tight leading-tight ${
              isLargeText ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-4xl'
            }`}
          >
            우리 가족 맞춤 운동, 무료로 시작하세요
          </h2>
          <p
            className={`font-semibold text-gray-700 mt-3 ${
              isLargeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
            }`}
          >
            성함과 연락처를 남겨주시면, 전문 운동처방사가 어르신에게 딱 맞는 <strong>맞춤 영상 링크와 큰글씨 안내서</strong>를 문자로 즉시 전송해 드립니다.
          </p>
        </div>

        {/* The Accessible Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-4 border-emerald-800/30 shadow-2xl relative">
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* Field 1: Applicant Relation (Senior or Family member) */}
            <div>
              <label className="block text-base sm:text-lg font-black text-gray-900 mb-2.5">
                신청하시는 분은 누구인가요?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  id="btn-relation-self"
                  onClick={() => setFormData((p) => ({ ...p, relation: 'self' }))}
                  className={`min-h-[56px] px-4 py-3 rounded-2xl border-3 font-black text-base sm:text-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    formData.relation === 'self'
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/50'
                      : 'border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <User className="w-5 h-5 text-emerald-800" />
                  <span>본인 직접 신청</span>
                </button>
                <button
                  type="button"
                  id="btn-relation-family"
                  onClick={() => setFormData((p) => ({ ...p, relation: 'family' }))}
                  className={`min-h-[56px] px-4 py-3 rounded-2xl border-3 font-black text-base sm:text-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    formData.relation === 'family'
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/50'
                      : 'border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <HeartHandshake className="w-5 h-5 text-emerald-800" />
                  <span>자녀 / 보호자 대리 신청</span>
                </button>
              </div>
            </div>

            {/* Field 2: Exercise Type Selection (Radio Group) */}
            <div>
              <label
                id="label-exercise-type"
                className="block text-base sm:text-lg font-black text-gray-900 mb-2.5"
              >
                관심 있는 맞춤 운동 분야 <span className="text-emerald-700 font-extrabold">(1개 선택)</span>
              </label>
              <div
                role="radiogroup"
                aria-labelledby="label-exercise-type"
                className="grid grid-cols-1 gap-3.5"
              >
                {/* Option 1: Senior Home Training */}
                <div
                  id="option-exercise-senior"
                  onClick={() => setFormData((p) => ({ ...p, exerciseType: 'senior' }))}
                  className={`p-4 sm:p-5 rounded-2xl border-3 cursor-pointer transition-all flex items-center justify-between ${
                    formData.exerciseType === 'senior'
                      ? 'border-emerald-700 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/40'
                      : 'border-gray-300 bg-white hover:border-emerald-400'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center font-bold text-white shrink-0 ${
                        formData.exerciseType === 'senior'
                          ? 'bg-emerald-700 border-emerald-700'
                          : 'border-gray-400 bg-white'
                      }`}
                    >
                      {formData.exerciseType === 'senior' && <CheckCircle2 className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="block text-lg sm:text-xl font-black text-gray-950">
                        ① 어르신 맞춤 운동
                      </span>
                      <span className="block text-sm sm:text-base font-semibold text-gray-600 mt-0.5">
                        관절에 무리 없는 의자 스트레칭, 기초 하체 근력 및 유연성
                      </span>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-xs font-bold bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full">
                    인기 최고
                  </span>
                </div>

                {/* Option 2: Physical Disability Rehabilitation */}
                <div
                  id="option-exercise-physical"
                  onClick={() => setFormData((p) => ({ ...p, exerciseType: 'physical' }))}
                  className={`p-4 sm:p-5 rounded-2xl border-3 cursor-pointer transition-all flex items-center justify-between ${
                    formData.exerciseType === 'physical'
                      ? 'border-emerald-700 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/40'
                      : 'border-gray-300 bg-white hover:border-emerald-400'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center font-bold text-white shrink-0 ${
                        formData.exerciseType === 'physical'
                          ? 'bg-emerald-700 border-emerald-700'
                          : 'border-gray-400 bg-white'
                      }`}
                    >
                      {formData.exerciseType === 'physical' && <CheckCircle2 className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="block text-lg sm:text-xl font-black text-gray-950">
                        ② 신체 장애 재활
                      </span>
                      <span className="block text-sm sm:text-base font-semibold text-gray-600 mt-0.5">
                        휠체어 및 침상에서 가능한 상지 관절 가동 및 기능 회복 운동
                      </span>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-xs font-bold bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                    재활 맞춤
                  </span>
                </div>

                {/* Option 3: Cognitive & Psychomotor Exercise */}
                <div
                  id="option-exercise-cognitive"
                  onClick={() => setFormData((p) => ({ ...p, exerciseType: 'cognitive' }))}
                  className={`p-4 sm:p-5 rounded-2xl border-3 cursor-pointer transition-all flex items-center justify-between ${
                    formData.exerciseType === 'cognitive'
                      ? 'border-emerald-700 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/40'
                      : 'border-gray-300 bg-white hover:border-emerald-400'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center font-bold text-white shrink-0 ${
                        formData.exerciseType === 'cognitive'
                          ? 'bg-emerald-700 border-emerald-700'
                          : 'border-gray-400 bg-white'
                      }`}
                    >
                      {formData.exerciseType === 'cognitive' && <CheckCircle2 className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="block text-lg sm:text-xl font-black text-gray-950">
                        ③ 뇌 인지·심리운동
                      </span>
                      <span className="block text-sm sm:text-base font-semibold text-gray-600 mt-0.5">
                        치매 예방 두뇌 자극, 박수 리듬 트레이닝, 정서 안정 심리재활
                      </span>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-xs font-bold bg-blue-100 text-blue-900 px-3 py-1 rounded-full">
                    두뇌 활력
                  </span>
                </div>
              </div>
            </div>

            {/* Field 3: Name Input (Large touch target & clear focus) */}
            <div>
              <label
                htmlFor="input-name"
                className="block text-base sm:text-lg font-black text-gray-900 mb-2"
              >
                신청자 성함 <span className="text-red-600 font-bold">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="input-name"
                  value={formData.name}
                  onChange={handleNameChange}
                  placeholder="예: 홍길동"
                  autoComplete="name"
                  className={`w-full min-h-[58px] sm:min-h-[64px] px-5 py-3 text-lg sm:text-xl font-bold rounded-2xl border-3 bg-[#FCFDFD] text-gray-950 placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-500 ${
                    errors.name ? 'border-red-500 bg-red-50/30' : 'border-gray-400 focus:border-emerald-700'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-base font-bold text-red-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Field 4: Phone Input (Large, Tel type, easy input) */}
            <div>
              <label
                htmlFor="input-phone"
                className="block text-base sm:text-lg font-black text-gray-900 mb-2"
              >
                연락처 (휴대폰 번호) <span className="text-red-600 font-bold">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="input-phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="예: 010-1234-5678"
                  autoComplete="tel"
                  maxLength={13}
                  className={`w-full min-h-[58px] sm:min-h-[64px] px-5 py-3 text-lg sm:text-xl font-bold rounded-2xl border-3 bg-[#FCFDFD] text-gray-950 placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-500 ${
                    errors.phone ? 'border-red-500 bg-red-50/30' : 'border-gray-400 focus:border-emerald-700'
                  }`}
                />
              </div>
              <p className="mt-1.5 text-sm font-semibold text-gray-600">
                ※ 입력하신 번호로 맞춤 운동 영상 접속 링크가 문자로 발송됩니다.
              </p>
              {errors.phone && (
                <p className="mt-2 text-base font-bold text-red-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Privacy Guarantee Note */}
            <div className="bg-gray-100 rounded-2xl p-4 flex items-start gap-3 text-xs sm:text-sm font-semibold text-gray-700">
              <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <span>
                <strong>개인정보 안심 보호:</strong> 입력하신 정보는 무료 체험 안내 및 맞춤 운동 코칭 목적으로만 안전하게 사용되며, 승인 없이 외부에 제공되지 않습니다.
              </span>
            </div>

            {/* 3-CLICK FINAL SUBMIT CTA BUTTON */}
            <div>
              <button
                type="submit"
                id="btn-submit-application"
                disabled={isSubmitting}
                className="w-full min-h-[66px] sm:min-h-[74px] px-6 py-4 rounded-2xl bg-[#0A6C3E] hover:bg-[#085A34] active:bg-[#054326] text-white font-black text-xl sm:text-2xl tracking-tight shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 border-3 border-emerald-400 focus:outline-none focus:ring-8 focus:ring-emerald-500/50 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span>신청 접수 중입니다...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-3">
                    <Send className="w-6 h-6" />
                    <span>신청 완료하고 무료 맞춤 운동 받아보기</span>
                  </span>
                )}
              </button>
              <p className="mt-3 text-center text-sm sm:text-base font-bold text-gray-600">
                ✔ 100% 무료 체험 · 번거로운 회원가입 및 결제 정보 입력 없음
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
