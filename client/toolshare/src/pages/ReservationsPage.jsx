import { Button, Card, Box, Typography, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './pages-css/reservationPage.css';
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

const ReservationsPage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    return (
        <>
        <h style={{ fontSize: '30px'}}><b>Upcoming reservations</b></h>
        <Card variant="outlined" sx={{mt: 1}}>
            <h class="date"><b>Tomorrow</b> October 3, 2022</h>
            <div class="container">
                <img class="image" src="https://media.cnn.com/api/v1/images/stellar/prod/mowing-the-lawn-lede.jpg?c=16x9&q=h_270,w_480,c_fill" alt='abc'/>
                <div class="title">
                    Lawnmower
                    <br/>
                    Scheduled for 10:30AM-17:30PM
                </div>
            </div>
            <div class="button">
                <Button style={{ backgroundColor: '#446D04', color: 'white'}} sx={{mr:2}} onClick={handleOpen}>Cancel Reservation</Button>
                {
                    open ? 
                    <>
                        <>
                        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" 
                        aria-describedby="modal-modal-description">
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    <b>Cancellation</b>
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mb: 1 }}>
                                    Are you sure you want to cancel your reservation?
                                </Typography>
                                <>
                                    <Button style={{ backgroundColor: '#446D04', color: 'white'}} sx={{mr: 2, justifyContent: "flex-end"}} onClick={navigate("/")}>Yes, cancel</Button>
                                    <Button style={{ color: '#446D04' }} sx={{ border: "1px solid #446D04", borderRadius: 1, justifyContent: "flex-end"}} onClick={handleClose}>Keep reservation</Button>
                                </>
                            </Box>
                        </Modal>
                        </>
                    </> : ''
                }
            </div>
        </Card>

        <br/>
        <h style={{ fontSize: '30px'}}><b>Past reservations</b></h>
        <Card>
            <h class="date"><b>July 24, 2022</b> Sunday</h>
            <div class="container">
                <img class="image" src="http://mobileimages.lowes.com/productimages/44f2e57a-6c6d-444d-8b5d-6a92ebeb9a77/11371190.jpg" alt='abc'/>
                <div class="title">
                    Wheel Barrow
                    <br/>
                    Scheduled for 10:30AM-17:30PM
                </div>
            </div>
        </Card>

        </>
    )
};

export default ReservationsPage;