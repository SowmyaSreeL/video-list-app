import '../scss/aside.scss'

const Aside = () => {
    return (
        <aside className="side-nav">
            <ul classNmae="aside-list">
                <li>
                    <i class="fa fa-video-camera" aria-hidden="true"></i>
                </li>
                <li>
                    <i class="fa fa-caret-square-o-right" aria-hidden="true"></i>
                </li>
            </ul>
        </aside>
    )
}

export default Aside;