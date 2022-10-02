import { Button, Box, Typography, Modal } from '@mui/material';
import { borders } from '@mui/system';
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

const CancelModal = () => {
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
                    <b>Cancellation</b>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mb: 1 }}>
                    Are you sure you want to cancel your reservation?
                </Typography>
                <>
                    <Button style={{ backgroundColor: '#446D04', color: 'white'}} sx={{mr: 2, justifyContent: "flex-end"}}>Yes, cancel</Button>
                    <Button style={{ color: '#446D04' }} sx={{ border: "1px solid #446D04", borderRadius: 1, justifyContent: "flex-end"}}>Keep reservation</Button>
                </>
            </Box>
        </Modal>
        </>
    )
};

export default CancelModal;

