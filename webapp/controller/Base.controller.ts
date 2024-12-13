import Controller from "sap/ui/core/mvc/Controller";
import Component from "../Component";

export default class Base extends Controller {
    public onNavTo(oEvent: any): void {
        const key = oEvent.getSource().getKey();
        const component = this.getOwnerComponent() as Component;

        if (component) {
            component.getRouter().navTo(key);
        } else {
            console.error("Owner Component is undefined!");
        }
    }
}
