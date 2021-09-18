import React from "react"
import { v4 as uuidv4 } from 'uuid';
import './List.css'
import Grid from '@material-ui/core/Grid'
import imgwork from '../../assets/img/work1.png'
import smileImg from '../../assets/img/sticker.png'

const works = [
    {
        id: uuidv4(),
        img: '../../assets/img/work1.png'
    },
    {
        id: uuidv4(),
        img: '../../assets/img/work2.png'
    },
    {
        id: uuidv4(),
        img: '../../assets/img/work3.png'
    },
    {
        id: uuidv4(),
        img: '../../assets/img/work1.png'
    },
    {
        id: uuidv4(),
        img: '../../assets/img/work2.png'
    },
    {
        id: uuidv4(),
        img: '../../assets/img/work3.png'
    },
]

const List = () => {
    return (
        <div className="List">
            <h1 className="heading-h2" >Men qilgan ishlar <img src={smileImg} alt="" /> </h1>
            <Grid container xs={12} spacing={8} >
                {works.map(item => (
                    <Grid item xs={6}>
                        <Item item={item}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

const Item = ({item}) => {
    console.log(item);
    return (
        <div id={item.id} className="item_work" >
            <img src={imgwork} alt="" />
        </div>
    )
}


export default List 