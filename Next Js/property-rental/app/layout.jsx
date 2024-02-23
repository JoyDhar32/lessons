import React from 'react'
import '@/assets/css/global.css'

export const metadata ={
    title: 'Property Rental Management | Fin the Perfect Rental Property',
    description: 'Find the perfect rental property for you. We have a wide range of properties to rent in the UK. Start your search now.',
    keywords: 'rental property, property to rent, property management, property rental, rental management, property rental management, rental property management, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service, property management services, property management company, property management companies, property management services, property management service',
}

const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div> {children} </div>
            </body>
        </html>
    )
}
export default MainLayout