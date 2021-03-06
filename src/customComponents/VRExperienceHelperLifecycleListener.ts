import { LifecycleListener } from "../LifecycleListener"
import { CreatedInstance } from "../CreatedInstance"

export default class VRExperienceHelperLifecycleListener implements LifecycleListener {
  private props: any

  constructor(props: any) {
    this.props = props
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {}

  onMount(instance: CreatedInstance<any>): void {
    if (this.props.enableInteractions) {
      if (typeof instance.hostInstance.enableInteractions === "function") {
        instance.hostInstance.enableInteractions()
      }
    }
  }
}
