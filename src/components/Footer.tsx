import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="main-footer"
      className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 border-t-4 border-emerald-700"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Brand & Slogan */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
              <Heart className="w-6 h-6 fill-white text-white" />
            </div>
            <div>
              <span className="text-2xl font-black text-white">몸사랑</span>
              <span className="text-xs sm:text-sm text-emerald-400 font-bold ml-2">
                어르신·장애인 맞춤 홈트레이닝
              </span>
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-400">
            몸사랑은 어르신과 장애인의 안전하고 활기찬 일상을 진심으로 응원합니다.
          </p>
        </div>

        {/* Contact Info & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
          <div className="space-y-2">
            <p className="font-bold text-white text-base mb-1">고객센터 & 상담 안내</p>
            <p className="flex items-center gap-2 text-amber-300 font-extrabold text-lg">
              <Phone className="w-5 h-5 inline" />
              1588-7230
            </p>
            <p className="text-gray-400">운영시간: 평일 오전 9시 ~ 오후 6시 (주말 및 공휴일 휴무)</p>
            <p className="flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4 inline" />
              이메일: support@momsarang.care
            </p>
          </div>

          <div className="space-y-1.5 text-gray-400">
            <p className="font-bold text-white text-base mb-1">사업자 정보</p>
            <p>상호명: (주)몸사랑 헬스케어 | 대표: 홍길동</p>
            <p>사업자등록번호: 120-88-12345 | 통신판매업신고: 제 2026-서울종로-0123호</p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 inline shrink-0" />
              서울특별시 종로구 대학로 101, 몸사랑 헬스케어 지원센터
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-500 font-medium">
          <p>© 2026 몸사랑 (Momsarang). All rights reserved.</p>
          <p className="mt-1">
            본 사이트의 모든 맞춤 운동 영상 및 콘텐츠는 전문 운동처방사와 물리치료사의 감수를 거쳐 제작되었습니다.
          </p>
        </div>
      </div>
    </footer>
  );
};
