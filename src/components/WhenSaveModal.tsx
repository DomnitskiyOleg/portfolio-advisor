import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const WhenSaveModal = ({
  show,
  handleCloseModal,
}: {
  show: boolean;
  handleCloseModal: () => void;
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseModal}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Поздравляем!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ваш портфель успешно сохранён</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal} variant='outline-info'>
            Понятно
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WhenSaveModal;
