import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line feature-sliced-rules/layer-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
