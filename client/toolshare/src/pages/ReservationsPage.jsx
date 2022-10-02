import { Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './pages-css/reservationPage.css';

const ReservationsPage = () => {
    const navigate = useNavigate();

    return (
        <>
        <h style={{ fontSize: '30px'}}><b>Upcoming reservations</b></h>
        <Card variant="outlined" sx={{mt: 1}}>
            <h class="date"><b>Tomorrow</b> August 2, 2022</h>
            <div class="container">
                <img class="image" src="https://i.insider.com/5d124f9a9c5101048e440825?width=1000&format=jpeg&auto=webp" alt='abc'/>
                <div class="title">
                    Lawnmower
                    <br/>
                    Scheduled for 10:30AM-17:30PM
                </div>
            </div>
            <div class="button">
                <Button style={{ backgroundColor: '#446D04', color: 'white'}} sx={{mr:2}}>Cancel Reservation</Button>
            </div>
        </Card>
        </>
    )
};

export default ReservationsPage;