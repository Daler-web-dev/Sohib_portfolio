import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HiPng from '../../assets/icons/hi.png'
import useStyles from './HeadingStyle';
import './Heading.css'

const Heading = () => {
    const classes = useStyles()

    return (
        <Grid container xs={12} className="Heading" >
            <div className="heading">
                <h1>Salom, <img src={HiPng} alt="" /> siz bilan
                    Sohib Abdurahmon</h1>
                <span className='description'>Motion va 3d dizayner sohasi bo'yicha 6 yildan buyon
                    faoliyat yuritib bormoqdaman.</span>
                <div className="btns">
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.btn_one}
                    >
                        Bog'lanish
                    </Button>
                    <Button
                        className={classes.btn_two}
                    >
                        mening ishlarim
                    </Button>
                </div>
            </div>
        </Grid>
    )
}

export default Heading