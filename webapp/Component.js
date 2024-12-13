import UIComponent from "sap/ui/core/UIComponent";
class Component extends UIComponent {
    init() {
        // Chama o método init da classe pai
        super.init();
        // Inicializa o roteador
        this.getRouter().initialize();
    }
    getRouter() {
        return super.getRouter();
    }
}
Component.metadata = {
    manifest: "json"
};
export default Component;
