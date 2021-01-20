import { uuid } from 'uuidv4';

export class NumberEntity {

    public readonly id?: string;
    public people_name: string;
    public people_phone?: string;
    public people_email?: string;
    public chosen_number: number;

    constructor(number: NumberEntity) {
        this.people_name = number.people_name;
        this.people_email = number.people_email ? number.people_email : '';
        this.people_phone = number.people_phone ? number.people_phone : '';
        this.chosen_number = number.chosen_number;
    }
}