import Trofei from '../../assets/img/trofei.png'
import Photo from '../../assets/img/Photo.png'
import Cube from '../../assets/img/Сube.png'
import Grid from '@material-ui/core/Grid'
import './Skills.css'

const Skills = () => {
    return (
        <Grid container xs={12} className="skills-block">
            <Grid container xs={10} md={6} className="wh-skills">
                <div className="item">
                    <img src={Trofei} alt="" />
                    <span>Mahsulot ko'rinishi</span>
                </div>
                <div className="item">
                    <img src={Photo} alt="" />
                    <span>Mahsulot ko'rinishi</span>
                </div>
                <div className="item">
                    <img src={Photo} alt="" />
                    <span>Mahsulot ko'rinishi</span>
                </div>
                <div className="item">
                    <img src={Trofei} alt="" />
                    <span>Mahsulot ko'rinishi</span>
                </div>
            </Grid>
            <Grid container xs={10} md={6} className="descrition">
                <img src={Cube} alt="" />
                <h2>Zamonaviy yo'nalishlar</h2>
            </Grid>
        </Grid>
    )
}


export default Skills

