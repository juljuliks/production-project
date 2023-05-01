import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetProfileRatingArg {
  userId: string,
  profileId: string
}

interface SetProfileRatingArg {
  userId: string,
  profileId: string,
  rate: number,
  feedback?: string
}

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<Rating[], GetProfileRatingArg>({
      query: ({ userId, profileId }) => ({
        url: '/profile-ratings',
        params: {
          userId,
          profileId,
        },
      }),
    }),
    setProfileRating: build.mutation<void, SetProfileRatingArg>({
      query: (arg) => ({
        url: '/profile-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useSetProfileRating = profileRatingApi.useSetProfileRatingMutation;
