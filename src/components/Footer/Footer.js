import { Typography } from '@material-ui/core'
import React from 'react'
import data from '../../utils/resumeData'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_left">
                <Typography className='footer_name'>
                    {data.name}
                 </Typography>
            </div>
            <div className="footer_right">
            <Typography className='footer_copy'>
                Diseño y Desarrollo x <a href="http://devans.online" target='blank'>Devans.online</a>
            </Typography>
            </div>
        </div>
    )
}

export default Footer
