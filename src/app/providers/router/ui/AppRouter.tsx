import { getUserAuthData } from 'entities/User';
import React, { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
    if (route.authOnly && !isAuth) {
      return false;
    }
    return true;
  }), [isAuth]);

  return (
    <Routes>
      {Object.values(routes).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  );
}

export default memo(AppRouter);
