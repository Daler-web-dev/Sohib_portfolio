import mainIcon from '../../assets/icons/logo.png'
import Button from '@material-ui/core/Button';
import './Header.css'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        border: '3px solid #216BFC',
        color: '#216BFC',
        borderRadius: '100px',
        fontSize: '20px',
        padding: '21px 55px',
        marginLeft: '20px'
    }
})

const Header = () => {
    const classes = useStyles()

    return (
        <header>
            <img src={mainIcon} alt="" />
            <div className="links">
                <a href="">Bosh Sahifa</a>
                <a href="">Portfolio</a>
                <a href="">Blog</a>
                <Button 
                    className={classes.root}
                >
                    Aloqa
                </Button>
            </div>
        </header>
    )
}

export default Header