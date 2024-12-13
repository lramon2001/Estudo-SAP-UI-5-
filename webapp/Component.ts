import UIComponent from "sap/ui/core/UIComponent";
import Router from "sap/ui/core/routing/Router";

export default class Component extends UIComponent {
    public static metadata = {
        manifest: "json"
    };

    public init(): void {
        // Chama o método init da classe pai
        super.init();

        // Inicializa o roteador
        this.getRouter().initialize();
    }

    public getRouter(): Router {
        return super.getRouter() as Router;
    }
}
