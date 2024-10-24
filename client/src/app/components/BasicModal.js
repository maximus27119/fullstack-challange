'use client'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const contentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ children, buttonText }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <Button variant='contained' onClick={handleOpen}>{ buttonText }</Button>
      <Modal open={isModalOpen} onClose={handleClose}>
        <Box sx={contentStyle}>
        { children }
        </Box>
      </Modal>
    </>
  );
}
