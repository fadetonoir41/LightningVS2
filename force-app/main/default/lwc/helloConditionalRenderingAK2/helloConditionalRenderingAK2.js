import { LightningElement, track } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    @track areDetailsVisible = false;
    @track areDetailsVisible2 = false;

    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
    }

    handleChange2(event) {
        this.areDetailsVisible2 = event.target.checked;
    }
}
