import PagFacil, {PagFacilProps} from "@/structural/adapter/payment/pag-facil";
import PaymentGateway from "@/structural/adapter/payment/payment-gateway";

export default class PagFacilAdapter extends PagFacil implements PaymentGateway {
    constructor(props: PagFacilProps) {
        super(props);
    }
}