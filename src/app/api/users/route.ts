import prisma from "@/libs/client";

export type MobiApplicantType = {
  apply_name: string;
  apply_kakao_id: string;
};

const fetchPassMobi = async (): Promise<MobiApplicantType[]> => {
  const applicants = await prisma.applicant.findMany({
    where: {
      apply_pass_or_not: true,
    },
    select: {
      apply_name: true,
      apply_kakao_id: true,
    },
  });

  return applicants;
};

export default fetchPassMobi;
