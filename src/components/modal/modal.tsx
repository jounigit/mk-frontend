import React, {
  FC,
  // useEffect
} from 'react'
// import FocusLock from 'react-focus-lock'
import ReactDOM from 'react-dom'

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from './modal.style'

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string | undefined;
}

export const Modal: FC<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const modal = (
    <>
      <Backdrop onClick={hide} />
      {/* <FocusLock> */}
      <Wrapper
        aria-modal
        aria-labelledby={headerText}
        tabIndex={-1}
        role="dialog"
      >
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
      {/* </FocusLock> */}
    </>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}
