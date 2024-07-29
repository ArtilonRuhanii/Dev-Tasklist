import {Card} from 'react-bootstrap';

export default function BookingDetailsCard({name,data}){
    return<>
        <Card.Text>
            <strong>{name}</strong> {data}
        </Card.Text>
    </>
}