import { Registration } from '@kloudsoftware/chromstahl-plugin'
import { VApp, Props, Component, ComponentBuildFunc, VNode } from '@kloudsoftware/eisen'

class DemoRoute extends Component {
    build(app: VApp): ComponentBuildFunc {
        return (root: VNode, props: Props) => {
            let hw = app.k("h1", {value: "Hello world"});
            root.appendChild(hw)
            return {};
        }
    }
}

export default class RegisterPlugin implements Registration {
    register() {
        const theMap = new Map<string, Component>();
        theMap.set("/helloWorld", new DemoRoute())
        return theMap;
    }
}
