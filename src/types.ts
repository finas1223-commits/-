export type ExerciseType = 'senior' | 'physical' | 'cognitive';

export type ApplicantRelation = 'self' | 'family';

export interface ApplicationFormData {
  name: string;
  phone: string;
  exerciseType: ExerciseType;
  relation: ApplicantRelation;
  memo?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  ageOrRelation: string;
  program: string;
  content: string;
  rating: number;
}
