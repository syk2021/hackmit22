import { Button, Card } from '@mui/material';
import './pages-css/reservationPage.css';

const ReservationsPage = () => {
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
                <Button style={{ backgroundColor: '#446D04', color: 'white'}} sx={{mr:2}}>Modify Reservation</Button>
                <Button style={{ color: '#446D04'}} sx={{ border: "1px solid #446D04", borderRadius: 1}}>Cancel Reservation</Button>
            </div>
        </Card>
        </>
    )
};

export default ReservationsPage;