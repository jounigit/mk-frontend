import { FC, Fragment } from 'react'
import { ICv } from '../../../../types'
import { Content, Title } from '../Cv.styles'
import {
  Col,
  Grid, Row
}
  from '../../../../components/dashboard/components/Dashboard.styles'
import styled from 'styled-components'
import { ActionLinks } from '../../../utils/ActionLinks'
import { CvDelete } from './CvDelete'
import { Modal } from '../../../../components/modal/modal'
import { useModal } from '../../../../hooks/useModal'

export interface CvProps {
  cv: ICv
}

const Links = styled.div`

`

const ColRight = styled(Col)`
   display: flex;
   justify-content: right;
   background: 'red';
   width:'100%';
`

export const CvListItemAdmin: FC<CvProps> = (props) => {
  const { isShown, toggle } = useModal()
  const { id, title, content } = props.cv
  const innerHtmlTxt = <div dangerouslySetInnerHTML={{ __html: content }} />

  // :::::::::::::::::::::::::::::::::::: //
  const { linkUpdate, linkRemove } = ActionLinks({ id, path: 'cv', toggle })

  // :::::::::::::::::::::::::::::::::::: //
  return (
    <Fragment>
      <Grid size={3} style={{ margin: '.5rem', width:'100%' }}>
        <Row style={{ padding: '.5rem' }}>
          <Col size={2}>
            <Title>{title}</Title>
            <Content>{innerHtmlTxt}</Content>
          </Col>
          <ColRight size={1}
          >
            <div>
              <Links>
                {linkUpdate}
              </Links>
              <Links>
                {linkRemove}
              </Links>
            </div>
          </ColRight>
        </Row>
      </Grid>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText='CV - osion poisto'
        modalContent={
          <CvDelete id={id} title={title} toggle={toggle} />
        }
      />
    </Fragment>
  )
}

// style={{ float: 'right', background: 'red', width:'100%' }}