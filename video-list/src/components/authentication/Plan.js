import "../scss/plan.scss";
const Plan = (props) => {
    return (
        <>
            <div>
                <h2>Free</h2>
                <ul>
                    <li>Pellentesque interdum libero et</li>
                    <li>Pellentesque posuere jdfkdfkdfhd</li>
                    <li>Cras sed felis eget</li>
                    <li>Maecenas eget luctus</li>
                    <li>Nullam vitae augue</li>
                </ul>
                <p>$0</p>
                <button type="button">Downgrade</button>
            </div>
            <div>
                <h2>Pro</h2>
                <ul>
                    <li>Maecenas eget luctus purus</li>
                    <li>Graesent in sollicitudin velit</li>
                    <li>Donec in orci vitae nisi </li>
                    <li>Class aptent taciti</li>
                    <li>Ut blandit vestibulum</li>
                </ul>
                <p>$12</p>
                <button type="button">Downgrade</button>
            </div>
            <div>
                <h2>Team</h2>
                <ul>
                    <li>Etiam ac finibus nisi, a porttitor</li>
                    <li>Quisque tincidunt velit a sapien vulputate </li>
                    <li>Vivamus pulvinar</li>
                    <li>In hac habitasse platea</li>
                    <li>Nullam vitae augue</li>
                </ul>
                <p>$23</p>
                <button type="button">Downgrade</button>
            </div>
            <div>
                <h2>Agency</h2>
                <ul>
                    <li>Praesent in sollicitudin velit</li>
                    <li>Nulla tincidunt finibus interdum</li>
                    <li>Nullam vitae augue</li>
                    <li>Curabitur eleifend</li>
                    <li>Quisque vel ex enim</li>
                </ul>
                <p>$43</p>
                <button type="button">Downgrade</button>
            </div>
        </>
    )
}

export default Plan;