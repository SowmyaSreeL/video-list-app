import '../scss/layout.scss';

const Layout = (props) => {
    const classes = "layout video__container " + props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}
export default Layout;