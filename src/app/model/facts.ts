import { Fact } from "./fact";

export class Facts {
    public current_page: number;
    public data = new Array<Fact>();

    public last_page: number;
    public next_page_url: string;
    public prev_page_url: string;

    constructor() {}
}