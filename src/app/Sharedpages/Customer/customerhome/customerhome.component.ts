import { Component } from '@angular/core';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent {
    Locations =[
      {
        image : 'https://cdn-icons-png.flaticon.com/128/2160/2160071.png',
        loc: 'Hyderabad',

      },
      {
        image : 'https://cdn-icons-png.flaticon.com/128/1235/1235728.png',
        loc: 'Mumbai',
      },
      {
        image : 'https://cdn-icons-png.flaticon.com/128/2465/2465341.png',
        loc: 'Delhi'
      },
      {
        image : 'https://cdn-icons-png.flaticon.com/128/4093/4093225.png',
        loc: 'Chennai'
      },
      {
        image : 'https://cdn-icons-png.flaticon.com/128/2308/2308220.png',
        loc: 'Kolkata'
      },
      {
        image : 'https://cdn-icons-png.flaticon.com/128/4163/4163873.png',
        loc: 'Amaravati'
      },
      {
        image : 'https://cdn-icons-png.flaticon.com/128/2706/2706094.png',
        loc: 'Goa '
      },
      {
        image : 'https://cdn-icons-png.flaticon.com/128/10706/10706892.png',
        loc: 'Banglore'
      },
      
    ]

    myfun() {
      const inputElement = document.getElementById("inp1") as HTMLInputElement;
      const searchValue = inputElement.value;
      const url = `http://www.google.com/maps/search/${searchValue} car service/api=1`;
      location.replace(url);
    }

    icon(locationName: string): void {
      const url = `http://www.google.com/maps/search/${locationName} car service/api=1`;
      location.replace(url);
    }
    
}
