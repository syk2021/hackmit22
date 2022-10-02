import { Button, Box, Typography, Modal } from '@mui/material';
import { borders } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    return (
        <>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal open={open} onClose={handleClose} aria-labelled-by="modal-modal-title" 
        aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <b>You're all set!</b>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mb: 1 }}>
                    Your reservation for your item is complete!
                </Typography>
                <>
                    <Button style={{ backgroundColor: '#446D04', color: 'white'}} sx={{mr: 2, justifyContent: "flex-end"}} onClick={navigate("/reservations")}>View Reservations</Button>
                </>
            </Box>
        </Modal>
        </>
    )
};

export default PopUpModal;

