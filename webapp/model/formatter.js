sap.ui.define([], () => {
	"use strict";

	return {
		statusText(sStatus) {
			const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return oResourceBundle.getText("invoiceStatusA");
				case "B":
					return oResourceBundle.getText("invoiceStatusB");
				case "C":
					return oResourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
		},
        statusQun(bStatus) {
			const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			if(bStatus > 10){
                return oResourceBundle.getText("invoiceQuC");
            }
            else{
                return oResourceBundle.getText("invoiceQuB");
            }
			}
		};
	}
);