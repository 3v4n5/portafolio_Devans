import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import data from '../../utils/resumeData'
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';


import './Curriculum.css'

const Curriculum = () => {
    return (
        <>
            {/* About Me */}
            <Grid container className="section">
                <Grid item className='section_title'>
                    <span></span>
                    <h6 className='section_title_text'>Sobre Mi</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='about_text'>{data.about}</Typography>
                </Grid>
            </Grid>

            {/* Education Experience */}
            <Grid container className="section">
                <Grid item className='section_title'>
                    <span></span>
                    <h6 className='section_title_text'>Currículum</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                        {/* Experiences */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Experiencia Laboral' icon={<WorkIcon />}>
                                {data.experience.map((experience, i) => (
                                    <TimelineItem key={i}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_company'>{experience.company}</Typography>
                                            <Typography className='timeline_title'>{experience.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{experience.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>

                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Educacion' icon={<SchoolIcon />}>
                                {data.education.map((education, i) => (
                                    <TimelineItem key={i}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>{education.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{education.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            {/* Services */}
            <Grid container className="section" >
                <Grid item className='section_title'>
                    <span></span>
                    <h6 className='section_title_text'>Mis Servicios</h6>
                </Grid>

                <Grid item xs={12} className="bg-color">
                    <Grid container spacing={3} justify='space-evenly' className="bg-color">
                        {data.services.map((service, i) => (
                            <Grid item xs={12} sm={6} md={3} key={i}>
                                <Paper elevation={3}>
                                    <div className="service">
                                        <div className='service_icon'>{service.icon}</div>
                                        <Typography className='services_title' variant='h6'>{service.title}</Typography>
                                        <Typography className='services_description' variant='body2'>{service.description}</Typography>
                                    </div>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            
        </>
    )
}

export default Curriculum
