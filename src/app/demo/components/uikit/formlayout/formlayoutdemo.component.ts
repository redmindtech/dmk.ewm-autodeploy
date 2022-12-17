import { Component } from '@angular/core';

@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

    selectedState: any = null;
    cities:any[] = [
        { label: 'Ariyalur', value: { id: 1, name: 'Ariyalur', code: 'AL' } },
        { label: 'Chengalpattu', value: { id: 2, name: 'Chengalpattu', code: 'CP' } },
        { label: 'Chennai', value: { id: 3, name: 'Chennai', code: 'CN' } },
        { label: 'Coimbatore', value: { id: 4, name: 'Coimbatore', code: 'CB' } },
        { label: 'Cuddalore', value: { id: 5, name: 'Cuddalore', code: 'CD' } },
        { label: 'Dharmapuri', value: { id: 6, name: 'Dharmapuri', code: 'DP' } },
        { label: 'Dindigul', value: { id: 7, name: 'Dindigul', code: 'DG' } },
        { label: 'Erode', value: { id: 8, name: 'Erode', code: 'ED' } },
        { label: 'Kallakurichi', value: { id: 9, name: 'Kallakurichi', code: 'KU' } },
        { label: 'Kancheepuram', value: { id: 10, name: 'Kancheepuram', code: 'KC' } },
        { label: 'Kanyakumari', value: { id: 11, name: 'Kanyakumari', code: 'KK' } },
        { label: 'Karur', value: { id: 12, name: 'Karur', code: 'KR' } },
        { label: 'Krishnagiri', value: { id: 13, name: 'Krishnagiri', code: 'KG' } },
        { label: 'Madurai', value: { id: 14, name: 'Madurai', code: 'MD' } },
        { label: 'Mayiladuthurai', value: { id: 15, name: 'Mayiladuthurai', code: 'MT' } },
        { label: 'Nagapattinam', value: { id: 16, name: 'Nagapattinam', code: 'NP' } },
        { label: 'Namakkal', value: { id: 17, name: 'Namakkal', code: 'NK' } },
        { label: 'Perambalur', value: { id: 18, name: 'Perambalur', code: 'PB' } },
        { label: 'Pudukottai', value: { id: 19, name: 'Pudukottai', code: 'PK' } },
        { label: 'Ramanathapuram', value: { id: 18, name: 'Ramanathapuram', code: 'RT' } },
        { label: 'Ranipet', value: { id: 20, name: 'Ranipet', code: 'RP' } },
        { label: 'Salem', value: { id: 21, name: 'Salem', code: 'SL' } },
        { label: 'Sivagangai', value: { id: 22, name: 'Sivagangai', code: 'SG' } },
        { label: 'Tenkasi', value: { id: 23, name: 'Tenkasi', code: 'TS' } },
        { label: 'Thanjavur', value: { id: 24, name: 'Thanjavur', code: 'TJ' } },
        { label: 'Theni', value: { id: 26, name: 'Theni', code: 'TE' } },
        { label: 'Thiruvallur', value: { id: 27, name: 'Thiruvallur', code: 'TL' } },
        { label: 'Thiruvarur', value: { id: 28, name: 'Thiruvarur', code: 'TI' } },
        { label: 'Thoothukudi', value: { id: 29, name: 'Thoothukudi', code: 'TK' } },
        { label: 'Thiruchirappalli', value: { id: 30, name: 'Thiruchirappalli', code: 'TC' } },
        { label: 'Thirunelveli', value: { id: 31, name: 'Thirunelveli', code: 'TN' } },
        { label: 'Thirupathur', value: { id: 32, name: 'Thirupathur', code: 'TP' } },
        { label: 'Thiruppur', value: { id: 33, name: 'Thiruppu', code: 'TR' } },
        { label: 'Thiruvainnamala', value: { id: 34, name: 'Thiruvainnamala', code: 'TV' } },
        { label: 'Nilgiris', value: { id: 35, name: 'Nilgiris', code: 'NG' } },
        { label: 'Vellore', value: { id: 36, name: 'Vellore', code: 'VL' } },
        { label: 'Viluppuram', value: { id: 37, name: 'Viluppuram', code: 'VP' } },
        { label: 'Virudhunagar', value: { id: 38, name: 'Virudhunagar', code: 'VD' } }



    ];
    selectedDrop:any = { value: '' };
    districtadmin:boolean=false;
    valCheck: string[] = [];
    createdistrictadmin:boolean=false;
    selfregistration:boolean=false;
    display: boolean = false;
    home:boolean=false;


    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    cities1: any[] = [];

    cities2: any[] = [];

    city1: any = null;

    city2: any = null;
    valRadio: string = '';

    toggle(a:any){
        this.districtadmin = !this.districtadmin;
        this.createdistrictadmin=false;
        this.selfregistration=false;
        this.home=false;
       }
    toggle1(a:any){
        this.createdistrictadmin= !this.createdistrictadmin;
        this.districtadmin=false;
        this.selfregistration=false;
        this.home=false;
       }
    toggle2(a:any){
        this.selfregistration = !this.selfregistration;
        this.districtadmin=false;
        this.createdistrictadmin=false;
        this.home=false;
       }
    toggle3(a:any){
        this.home = !this.home;
        this.districtadmin=false;
        this.createdistrictadmin=false;
        this.selfregistration=false;
    }
}
