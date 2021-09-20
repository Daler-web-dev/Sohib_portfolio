import React from "react"
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import blogImg from '../../assets/img/blog1.png'
import blogImg2 from '../../assets/img/blog2.png'
import blogImg3 from '../../assets/img/blog3.png'
import './Blogs.css'

const Blogs_arr = [
    {
        id: Math.random(),
        img: blogImg,
        time: '3d. 44 daqiqa oldin',
        title: 'Discord ajoyib 3d video rolikni taqdim etdi',
        p: 'to much text',
        gridLength: 12
    },
    {
        id: Math.random(),
        img: blogImg2,
        time: '3d. 44 daqiqa oldin',
        title: 'Discord ajoyib 3d video rolikni taqdim etdi',
        p: 'to much text',
        gridLength: 6
    },
    {
        id: Math.random(),
        img: blogImg3,
        time: '3d. 44 daqiqa oldin',
        title: 'Discord ajoyib 3d video rolikni taqdim etdi',
        p: 'to much text',
        gridLength: 6
    },
    {
        id: Math.random(),
        img: blogImg2,
        time: '3d. 44 daqiqa oldin',
        title: 'Discord ajoyib 3d video rolikni taqdim etdi',
        p: 'to much text',
        gridLength: 4
    },
    {
        id: Math.random(),
        img: blogImg2,
        time: '3d. 44 daqiqa oldin',
        title: 'Discord ajoyib 3d video rolikni taqdim etdi',
        p: 'to much text',
        gridLength: 4
    },
    {
        id: Math.random(),
        img: blogImg2,
        time: '3d. 44 daqiqa oldin',
        title: 'Discord ajoyib 3d video rolikni taqdim etdi',
        p: 'to much text',
        gridLength: 4
    },
]

const useStyles = makeStyles({
    button: {
        fontSize: '28px',
        color: '#fff',
        backgroundColor: '#1662F8',
        borderRadius: '44px',
        margin: '0 auto',
        marginTop: '50px',
        padding: '24px 37px',
        boxShadow: '0px 0px 32px #75A4FF'
    },
    container: {
        margin: '50px 0px'
    }

})

const Blogs = () => {
    const classes = useStyles()

    return (
        <div className="Blog">
            <div className="Blog-heading">
                <h1>Blog</h1>
                <span>Bu yerda dizayn va motion dunyosi haqida fikrlarimni bildirib boraman.</span>
            </div>
            <Grid container xs={12} spacing={3} className={classes.container} >
                {Blogs_arr.map(blog => (
                    <Grid item xs={blog.gridLength} className="blog-item" >
                        <img src={blog.img} alt="" />
                    </Grid>
                ))}
                <Button className={classes.button} >
                    Ko'proq ko'rish
                </Button>
            </Grid>
        </div>
    )
}

export default Blogs