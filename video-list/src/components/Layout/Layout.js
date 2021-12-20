import '../scss/layout.scss';

const Layout = (props) => {
    const classes = "layout " + props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}
export default Layout;