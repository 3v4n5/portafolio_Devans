import { Typography } from '@material-ui/core'
import React from 'react'
import profile from '../../assets/images/perfil.jpg'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import data from '../../utils/resumeData'

import './Profile.css'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';





/* componente timeline profile */
const CustomTimelineItem = ({ title, text, link }) => {

    return (
        <TimelineItem className='timelineItem'>
            <CustomTimelineSeparator className='timeline' />
            <TimelineContent className='timeline_content'>
                {link ? (
                    <Typography className='timelineItem_text'>
                        <span>{title}: </span>{" "}
                        <a href={link} target='blank'>{text}</a>
                    </Typography>
                ) : (
                    <Typography className='timelineItem_text'>
                        <span>{title}: </span>{text}
                    </Typography>
                )}
            </TimelineContent>
        </TimelineItem>
    )
}

const Profile = () => {
    

    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{data.name}</Typography>
                <Typography className="title">{data.title}</Typography>
            </div>

            <figure className="profile_image img-fluid">
                <img className='img-fluid' src={profile} alt="imagen de perfil" />
                {/* <img src={require("../../assets/images/perfil.jpg")} alt=""/> */}
            </figure>

            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
                    <CustomTimelineItem title='Nombre' text={data.name} />
                    <CustomTimelineItem title='Email' text={data.email} />
                    <CustomTimelineItem title='Tel' text={data.phone} />
                    <CustomTimelineItem title='Ubicacion' text={data.addres} />

                    {/* {Object.keys(resumeData.socials).map((key) => (
                        <CustomTimelineItem
                            title={key} 
                            text={resumeData.socials[key].text} 
                            link={resumeData.socials[key].link} 
                        />
                    ))} */}
                <div className="button_container">
                    <a href="https://drive.google.com/file/d/1pz3C0UTwaQpG8pMjMfn-8pd6hWlHl2rq/view?usp=sharing" target='blank'><CustomButton text='Descarga CV' icon = {<GetAppIcon/>} /></a>
                </div>
                </CustomTimeline>
            </div>
        </div>
    )
}

export default Profile
