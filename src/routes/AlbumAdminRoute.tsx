import AlbumAdmin from '@/features/album/components/admin/AlbumAdmin'

const AlbumAdminRoute = {
  path: ':slug',
  element: <AlbumAdmin />,
}
      
export default AlbumAdminRoute