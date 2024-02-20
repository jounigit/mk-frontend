import loadable from '@loadable/component'
import { RouteObject, } from 'react-router-dom'
import MainLayout from './MainLayout'
import NotFoundPage from '@/pages/NotFoundPage'
import React from 'react'
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
import { QueryBoundaries } from '@/components/queryboundary/QueryBoundaries'
import { TestPics } from '@/test-pic-css/TestPics'
import CurrentPage from '@/pages/CurrentPage'
import CurrentListAdminRoute from './CurrentListAdminRoute'
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
        element:
        <QueryBoundaries>
          <Login />
        </QueryBoundaries>
      },
      {
        path: 'cv',
        element:
        <QueryBoundaries>
          <CvPage />
        </QueryBoundaries>
      },
      {
        path: 'articles',
        element:
        <QueryBoundaries>
          <ArticlePage />
        </QueryBoundaries>
      },
      {
        path: 'currents',
        element:
        <QueryBoundaries>
          <CurrentPage />
        </QueryBoundaries>
      },
      {
        path: 'galleria',
        children: [
          {
            index: true,
            element:
            <QueryBoundaries>
              <GalleriaPage />
            </QueryBoundaries>
          },
          {
            path: ':slug',
            element:
            <QueryBoundaries>
              <Album />
            </QueryBoundaries>
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
        element:
        <DashboardPage />,
      },
      {
        path: 'testpics',
        element: <TestPics />,
      },
      {
        path: 'currents',
        children: [
          CurrentListAdminRoute,
          // AlbumUpdateRoute,
          // ChoosePicturesRoute,
          // AlbumAdminRoute,
          // AlbumCreateRoute
        ],
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
