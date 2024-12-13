import Controller from "sap/ui/core/mvc/Controller";
export default class Base extends Controller {
    onNavTo(oEvent) {
        const key = oEvent.getSource().getKey();
        const component = this.getOwnerComponent();
        if (component) {
            component.getRouter().navTo(key);
        }
        else {
            console.error("Owner Component is undefined!");
        }
    }
}
