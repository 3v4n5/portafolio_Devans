import React, { useState } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core';
import data from '../../utils/resumeData'

import './Portfolio.css'



const Portfolio = () => {

    const [tabValue, setTabValue] = useState('All');
    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <Grid container className='section'>
            {/* Title */}
            <Grid item className='section_title'>
                <span></span>
                <h6 className='section_title_text'>Portafolio</h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs
                    value={tabValue}
                    indicatorColor='white'
                    className='customTabs'
                    onChange={(event, newValue) => setTabValue(newValue)}>
                    <Tab label='All' value='All' className={tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'} />

                    {[...new Set(data.projects.map(item => item.tag))].map(
                        (tag) => (
                            <Tab label={tag} value={tag} className={tabValue === tag ? 'customTabs_item active' : 'customTabs_item'} />
                        )
                    )}

                </Tabs>
            </Grid>

            {/* Projects */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {data.projects.map((project) => (
                        <>
                            {tabValue === project.tag || tabValue === "All" ? (
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <Grow in timeout={1000}>
                                        <Card className='customCard' onClick={() => setProjectDialog(project)}>
                                            <CardActionArea>
                                                <CardMedia className='customCard_image' image={project.image} title={project.title} />
                                                <CardContent>
                                                    <Typography variant='body2' className="customCard_title">{project.title}</Typography>
                                                    <Typography variant='body2' className='customCard_caption'>{project.caption}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            ) : null}
                        </>
                    ))}
                </Grid>
            </Grid>


            <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} className='projectDialog'>
                <DialogTitle >
                    {projectDialog.title}
                </DialogTitle>
                <img src={projectDialog.image} alt="" className='projectDialog_image' />
                <DialogContent>
                    <Typography className='projectDialog_description'>{projectDialog.description}</Typography>
                </DialogContent>
                <DialogActions className='projectDialog_actions'>
                    {projectDialog?.links?.map((link) => (
                        <a href={link.link} target='blank' className='projectDialog_icon'>
                           {link.icon}
                        </a>
                    ))}
                </DialogActions>
            </Dialog>

        </Grid>
    )
}

export default Portfolio
