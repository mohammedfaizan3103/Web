import React from 'react'
import PaymentsPage from '../components/PaymentsPage';

const page = ({ params }) => {
    console.log(params);
    return (
        <>
            <PaymentsPage username={params.username}/>
        </>
    )
}

export default page
