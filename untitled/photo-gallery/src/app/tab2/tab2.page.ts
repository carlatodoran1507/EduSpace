import {Component} from '@angular/core';
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";
import {Car} from "./car.model";

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    paragraphText: string;
    buttonText: string;
    showParagraph = false;
    cars: Car[];
    clickCounter = 0;

    constructor(public navCtrl: NavController,
                public router: Router) {
        console.log('Tab 2 s-a pornit')
        this.paragraphText = 'hello';
        this.buttonText = 'click you initial';
        this.cars = [];
        let masina1 = new Car('Aro', 10);
        let masina2 = new Car('Maro', 20);
        let masina3 = new Car('Claro', 30);
        this.cars.push(masina1, masina2, masina3);
        console.log(this.cars)
    }

    clickedButton() {
        this.showParagraph = !this.showParagraph;
        this.clickCounter += 1;
        if (this.clickCounter > 5) {
            this.router.navigateByUrl('tabs/tab3')

        }
        if (this.clickCounter % 2 == 0)
            this.buttonText = 'Even Counter'
        else
            this.buttonText = 'Odddddddddddddddddddddddd Counter'

    }

}
