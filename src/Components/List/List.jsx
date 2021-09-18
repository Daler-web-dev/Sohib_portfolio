import React from "react"
import { v4 as uuidv4 } from 'uuid';
import './List.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import imgwork from '../../assets/img/work1.png'
import imgwork2 from '../../assets/img/work2.png'
import imgwork3 from '../../assets/img/work3.png'
import smileImg from '../../assets/img/sticker.png'
import {makeStyles} from '@material-ui/core/styles'

const works = [
    {
        id: uuidv4(),
        img: imgwork
    },
    {
        id: uuidv4(),
        img: imgwork2
    },
    {
        id: uuidv4(),
        img: imgwork3
    },
    {
        id: uuidv4(),
        img: imgwork
    },
    {
        id: uuidv4(),
        img: imgwork2
    },
    {
        id: uuidv4(),
        img: imgwork3
    }
]

const useStyles = makeStyles({
    btn: {
        fontSize: '28px',
        color: '#fff',
        backgroundColor: '#1662F8',
        padding: '27px 49px',
        borderRadius: '50px',
        boxShadow: '1px 1px 10px #75A4FF'
    },
    container: {
        margin: '100px 0px'
    } 
})

const List = () => {
    const classes = useStyles()

    return (
        <div className="List">
            <h1 className="heading-h2" >Men qilgan ishlar <img src={smileImg} alt="" /> </h1>
            <Grid container xs={12} spacing={8}  className={classes.container} >
                {works.map(item => (
                    <Grid item xs={6}>
                        <Item item={item}/>
                    </Grid>
                ))}
            </Grid>
            <Button className={classes.btn}>
                Ko'proq ko'rish
            </Button>
        </div>
    )
}

const Item = ({item}) => {
    console.log(item);
    return (
        <div id={item.id} className="item_work" >
            <img src={item.img} alt="" />
        </div>
    )
}


export default List 