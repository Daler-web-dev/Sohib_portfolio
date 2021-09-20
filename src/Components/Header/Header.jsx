import mainIcon from '../../assets/icons/logo.png'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
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
        <div className="Header">
            <header>
                <img src={mainIcon} alt="" />
                <div className="links">
                    <Link to="/">Bosh Sahifa</Link>
                    <Link to="#">Portfolio</Link>
                    <Link to="/Blog">Blog</Link>
                    <Button 
                        className={classes.root}
                    >
                        Aloqa
                    </Button>
                </div>
            </header>
        </div>
    )
}

export default Header