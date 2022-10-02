import { Button, Box, Typography, Modal } from '@mui/material';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PopUpModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal open={open} onClose={handleClose} aria-labelled-by="modal-modal-title" 
        aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    You're all set!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt:2 }}>
                    Your reservation for lawnmower is confirmed for August 2, 2022 from 15:30PM - 17:30PM.
                </Typography>
                <Button>View Reservations</Button>
                <Button>Cancel Reservation</Button>
            </Box>
        </Modal>
        </>
    )
};

export default PopUpModal;

