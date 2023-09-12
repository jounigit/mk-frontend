import loadable from '@loadable/component'
import { RouteObject, } from 'react-router-dom'
import MainLayout from './MainLayout'
import NotFoundPage from '@/pages/NotFoundPage'
import React from 'react'
import { LoadingHandler } from '@/components/handlers'
import { Login } from '@/features/login/components/Login'
import { DashboardLayout } from '@/components/dashboard'
import DashboardPage from '@/pages/DashboardPage'
import AlbumListAdminRoute from './AlbumListAdminRoute'
import AlbumUpdateRoute from './AlbumUpdateRoute'
import ChoosePicturesRoute from './ChoosePicturesRoute'
import AlbumAdminRoute from './AlbumAdminRoute'
import AlbumCreateRoute from './AlbumCreateRoute'
import CvListAdminRoute from './CvListAdminRoute'
import CvUpdateRoute from './CvUpdateRoute'
import CvCreateRoute from './CvCreateRoute'
import PictureListAdminRoute from './PictureListAdminRoute'
import PictureUpdateRoute from './PictureUpdateRoute'
import UploadPictureRoute from './UploadPictureRoute'
const HomePage = loadable(() => import('@/pages/HomePage'))
const GalleriaPage = loadable(() => import('@/pages/GalleriaPage'))
const CvPage = loadable(() => import('@/pages/CvPage'))
const ArticlePage = loadable(() => import('@/pages/ArticlePage'))
const Album = loadable(() => import('@/features/album/components/Album'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'cv',
        element: <CvPage />,
      },
      {
        path: 'articles',
        element:
          <ArticlePage />,
      },
      {
        path: 'galleria',
        children: [
          {
            index: true,
            element: <GalleriaPage />,
          },
          {
            path: ':slug',
            element:
            <React.Suspense fallback={<LoadingHandler />}>
              <Album />
            </React.Suspense>,
          }
        ]
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'albums',
        children: [
          AlbumListAdminRoute,
          AlbumUpdateRoute,
          ChoosePicturesRoute,
          AlbumAdminRoute,
          AlbumCreateRoute
        ],
      },
      {
        path: 'cv',
        children: [
          CvListAdminRoute,
          CvUpdateRoute,
          CvCreateRoute
        ]
      },
      {
        path: 'pictures',
        children: [
          PictureListAdminRoute,
          PictureUpdateRoute,
          UploadPictureRoute
        ]
      }
    ],
  }
]

export default routes
