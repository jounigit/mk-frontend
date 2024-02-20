import { LinkTo } from '@/components/layouts/nav/NavLinks.styles'
import { ILinkFormer } from '@/types'

export const linkFormer: ILinkFormer = function(toggle, path, text, t, cytxt) {
  return <li>
    <LinkTo to={path} data-cy={cytxt} onClick={toggle}>
      {t(text)}
    </LinkTo>
  </li>
}

export const dbLinkFormer: ILinkFormer = function(
  toggle, path, text, t, cytxt
) {
  return <LinkTo to={path} data-cy={cytxt} onClick={toggle}>{t(text)}</LinkTo>

}