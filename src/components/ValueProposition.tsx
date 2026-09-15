import React from 'react';
import {
  Armchair,
  Tv,
  Brain,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Activity,
  Award
} from 'lucide-react';

interface ValuePropositionProps {
  isLargeText: boolean;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ isLargeText }) => {
  return (
    <section
      id="value-proposition"
      className="py-16 sm:py-24 bg-white border-b border-gray-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header: Problem Framing */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-800 text-sm sm:text-base font-extrabold px-4 py-1.5 rounded-full mb-4">
            <AlertTriangle className="w-4 h-4 text-red-700" />
            왜 기존 홈트는 어르신과 장애인에게 맞지 않았을까요?
          </span>
          <h2
            className={`font-black text-gray-900 tracking-tight leading-tight ${
              isLargeText ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
            }`}
          >
            "동작이 너무 빠르고, 바닥에 엎드리다 관절만 상했어요"
          </h2>
          <p
            className={`font-semibold text-gray-600 mt-4 leading-relaxed ${
              isLargeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
            }`}
          >
            일반 헬스 영상은 젊은 사람 기준이라 따라가기 벅차고 부상 위험이 큽니다.
            <br className="hidden sm:inline" />
            몸사랑은 <strong>속도, 시야, 자세의 한계</strong>를 처음부터 고려해 맞춤 설계되었습니다.
          </p>
        </div>

        {/* Problem vs Solution Comparison Box */}
        <div className="bg-[#F8F9FA] rounded-3xl p-6 sm:p-8 border-2 border-gray-300 mb-16 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Old Conventional Workout */}
            <div className="bg-white rounded-2xl p-6 border-2 border-red-200">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-red-100">
                <XCircle className="w-7 h-7 text-red-600 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-black text-red-900">
                  기존 일반 홈트레이닝
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">✕</span>
                  <span className="text-base sm:text-lg font-bold text-gray-700">
                    바닥에 눕거나 엎드리는 동작으로 <strong>관절 통증 및 낙상 위험</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">✕</span>
                  <span className="text-base sm:text-lg font-bold text-gray-700">
                    빠른 음악과 템포로 <strong>따라 하기 전 지치고 호흡 곤란</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">✕</span>
                  <span className="text-base sm:text-lg font-bold text-gray-700">
                    작은 스마트폰 화면과 흐린 자막으로 <strong>눈의 피로 가중</strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Momsarang Solution */}
            <div className="bg-emerald-50/80 rounded-2xl p-6 border-3 border-emerald-600 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-emerald-200">
                <CheckCircle className="w-7 h-7 text-emerald-700 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-black text-emerald-950">
                  몸사랑(Momsarang) 솔루션
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">✓</span>
                  <span className="text-base sm:text-lg font-black text-gray-900">
                    <strong className="text-emerald-800 font-black">의자·침대에 앉아서</strong> 안전하게 완성하는 100% 무낙상 동작
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">✓</span>
                  <span className="text-base sm:text-lg font-black text-gray-900">
                    0.7배속 편안한 템포와 <strong className="text-emerald-800 font-black">따뜻한 전문 강사의 음성 코칭</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">✓</span>
                  <span className="text-base sm:text-lg font-black text-gray-900">
                    TV와 컴퓨터 <strong className="text-emerald-800 font-black">초대형 고대비 자막</strong>으로 안경 없이 선명
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* The 3 Core Solution Cards Required by IA */}
        <div className="text-center mb-10">
          <span className="text-emerald-800 font-extrabold text-sm sm:text-base tracking-wider uppercase bg-emerald-100 px-3.5 py-1 rounded-full">
            Momsarang 3가지 특별한 약속
          </span>
          <h3
            className={`font-black text-gray-950 mt-3 tracking-tight ${
              isLargeText ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-3xl'
            }`}
          >
            오직 어르신과 장애인의 안전과 건강만을 생각했습니다
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Solution 1 */}
          <div
            id="card-solution-1"
            className="bg-white rounded-3xl p-6 sm:p-7 border-3 border-emerald-800/20 hover:border-emerald-700 transition-all shadow-md hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 shadow-sm">
                <Armchair className="w-9 h-9 stroke-[2.2]" />
              </div>
              <div className="inline-block px-3 py-1 rounded-md bg-emerald-800 text-white font-black text-xs sm:text-sm mb-3">
                해결책 ① 안전성 극대화
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-gray-950 mb-3 leading-snug">
                의자·침대에서 안전하게 따라 하는 운동
              </h4>
              <p
                className={`font-semibold text-gray-700 leading-relaxed ${
                  isLargeText ? 'text-lg' : 'text-base'
                }`}
              >
                무리하게 바닥에 눕거나 일어서지 않아도 됩니다. 식탁 의자나 휠체어, 침상에 앉은 상태에서 관절 가동 범위를 부드럽게 넓히고 하체 근력을 강화합니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm font-bold text-emerald-800">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>낙상 사고 걱정 0% 보장</span>
            </div>
          </div>

          {/* Solution 2 */}
          <div
            id="card-solution-2"
            className="bg-white rounded-3xl p-6 sm:p-7 border-3 border-emerald-800/20 hover:border-emerald-700 transition-all shadow-md hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mb-6 shadow-sm">
                <Tv className="w-9 h-9 stroke-[2.2]" />
              </div>
              <div className="inline-block px-3 py-1 rounded-md bg-amber-700 text-white font-black text-xs sm:text-sm mb-3">
                해결책 ② 시니어 특화 화면
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-gray-950 mb-3 leading-snug">
                TV·PC·태블릿 어디서나 큰 화면으로 조작
              </h4>
              <p
                className={`font-semibold text-gray-700 leading-relaxed ${
                  isLargeText ? 'text-lg' : 'text-base'
                }`}
              >
                스마트폰의 작은 버튼 때문에 불편하셨나요? 거실 큰 TV 화면과 컴퓨터 모니터에서 리모컨이나 큰 터치 한 번으로 쉽게 틀어놓고 시원하게 운동할 수 있습니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm font-bold text-amber-900">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              <span>초대형 폰트 & 친절한 음성 지원</span>
            </div>
          </div>

          {/* Solution 3 */}
          <div
            id="card-solution-3"
            className="bg-white rounded-3xl p-6 sm:p-7 border-3 border-emerald-800/20 hover:border-emerald-700 transition-all shadow-md hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center mb-6 shadow-sm">
                <Brain className="w-9 h-9 stroke-[2.2]" />
              </div>
              <div className="inline-block px-3 py-1 rounded-md bg-blue-800 text-white font-black text-xs sm:text-sm mb-3">
                해결책 ③ 융합 재활 케어
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-gray-950 mb-3 leading-snug">
                신체 재활과 뇌 인지 자극을 결합한 전문 심리운동
              </h4>
              <p
                className={`font-semibold text-gray-700 leading-relaxed ${
                  isLargeText ? 'text-lg' : 'text-base'
                }`}
              >
                단순 반복 체조가 아닙니다. 손가락 소근육 운동, 박수 리듬 트레이닝, 인지 기억 자극 게임을 함께 진행하여 치매 예방과 우울감 해소까지 돕습니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm font-bold text-blue-900">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>인지 활성화 및 정서적 안정</span>
            </div>
          </div>
        </div>

        {/* Real User Testimonial Snapshot (Social Proof for Landing Page) */}
        <div className="mt-14 bg-emerald-900 text-white rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-emerald-800">
            <div>
              <span className="text-amber-300 font-bold text-sm sm:text-base">이용자 및 가족 생생 후기</span>
              <h4 className="text-xl sm:text-3xl font-black mt-1">"무릎 수술 후 막막했는데, 집에서 매일 웃으며 합니다"</h4>
            </div>
            <div className="flex items-center gap-1 text-amber-300 font-black text-xl">
              ★★★★★ <span className="text-white text-base font-semibold ml-1">(만족도 4.9/5.0)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-800/60 rounded-2xl p-5 border border-emerald-700">
              <p className="font-medium text-emerald-100 text-base sm:text-lg mb-3">
                "혼자서는 운동할 엄두가 안 났는데, TV 화면에서 친절한 선생님이 의자에 앉아 손뼉 치며 유쾌하게 가르쳐 주니 하루가 즐겁습니다."
              </p>
              <div className="font-bold text-amber-200 text-sm sm:text-base">
                — 서울 노원구 박정숙 어르신 (74세)
              </div>
            </div>

            <div className="bg-emerald-800/60 rounded-2xl p-5 border border-emerald-700">
              <p className="font-medium text-emerald-100 text-base sm:text-lg mb-3">
                "뇌졸중 후 휠체어 생활을 하시는 아버지께서 손가락과 팔을 부드럽게 움직이실 수 있어 보호자로서 너무 안심되고 든든합니다."
              </p>
              <div className="font-bold text-amber-200 text-sm sm:text-base">
                — 보호자 이영미 님 (가족 대리 신청)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
