'use server';

import prisma from '@/libs/client';

export async function handleCreateUser(formData: FormData) {
  const apply_email = formData.get('user_email');
  const apply_kakao_id = formData.get('user_kakao');
  const apply_major = formData.get('user_major');
  const apply_name = formData.get('user_name');
  const apply_intro = formData.get('user_intro');

  const email = typeof apply_email === 'string' ? apply_email : '';
  const kakao_id = typeof apply_kakao_id === 'string' ? apply_kakao_id : '';
  const major = typeof apply_major === 'string' ? apply_major : '';
  const name = typeof apply_name === 'string' ? apply_name : '';
  const intro = typeof apply_intro === 'string' ? apply_intro : '';

  try {
    const user = await prisma.applicant.create({
      data: {
        apply_email: email,
        apply_kakao_id: kakao_id,
        apply_major: major === '백엔드' ? 1 : 2,
        apply_name: name,
        apply_pass_or_not: false,
        apply_time_option: 2,
        apply_generation: 2,
        apply_intro: intro,
      },
    });
    console.log(user.apply_name + '님이 지원하셨습니다.');
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
  }
}

export async function handleSearchingUser(formData: FormData) {
  const name = formData.get('user_name') as string;
  const kakaoId = formData.get('user_kakao') as string;

  try {
    const user = await prisma.applicant.findFirstOrThrow({
      where: {
        apply_name: name,
        apply_kakao_id: kakaoId,
      },
    });
    console.log(user.apply_intro);
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
  }
}
